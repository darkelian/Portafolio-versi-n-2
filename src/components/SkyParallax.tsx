"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useTheme } from "@/components/ThemeProvider";

// Desplazamiento máximo, en píxeles, cuando el cursor está en un borde.
const MAX_SHIFT = 16;
// Cuánto se acerca el cielo a su destino en cada fotograma: valores bajos dan
// una inercia suave en lugar de un salto seco tras el cursor.
const EASING = 0.06;

/**
 * Desplaza muy levemente el cielo nocturno según la posición del cursor, para
 * dar sensación de profundidad.
 *
 * Recibe el cielo como `children` para que todo ese marcado (varios SVG) se
 * siga renderizando en el servidor: lo único que viaja al navegador es la
 * lógica de este archivo. El desplazamiento se escribe directamente sobre el
 * nodo como variables CSS, nunca con estado de React — un re-render por cada
 * movimiento del ratón sería inasumible.
 */
export function SkyParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const node = ref.current;
    if (!node || theme !== "dark") return;

    // Sin movimiento si el visitante lo ha pedido, y sin escuchar el ratón en
    // dispositivos que no tienen puntero fino (móviles y tablets).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const tick = () => {
      currentX += (targetX - currentX) * EASING;
      currentY += (targetY - currentY) * EASING;
      node.style.setProperty("--parallax-x", `${currentX.toFixed(2)}px`);
      node.style.setProperty("--parallax-y", `${currentY.toFixed(2)}px`);

      const settled =
        Math.abs(targetX - currentX) < 0.1 && Math.abs(targetY - currentY) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const handleMove = (event: MouseEvent) => {
      // Signo invertido: el fondo se mueve en sentido contrario al cursor, que
      // es lo que se lee como profundidad.
      targetX = -(event.clientX / window.innerWidth - 0.5) * 2 * MAX_SHIFT;
      targetY = -(event.clientY / window.innerHeight - 0.5) * 2 * MAX_SHIFT;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
      node.style.removeProperty("--parallax-x");
      node.style.removeProperty("--parallax-y");
    };
  }, [theme]);

  return (
    <div ref={ref} className="sky-parallax absolute inset-0">
      {children}
    </div>
  );
}

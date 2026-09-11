// Nubes a la deriva: el equivalente diurno de la rotación del cielo nocturno.
//
// Cada nube cruza la pantalla de izquierda a derecha en un ciclo largo y vuelve
// a entrar por el otro lado. Las lejanas son más pequeñas, pálidas y lentas.
// Los retrasos son negativos para que al cargar la página ya estén repartidas
// por el cielo, en lugar de entrar todas a la vez por el borde.

const CLOUD_PATH =
  "M30,70 C12,70 4,58 10,48 C14,40 24,38 32,40 C34,24 50,14 66,18 C76,6 100,4 112,18 C124,10 144,14 148,30 C164,26 184,34 184,50 C194,54 196,70 180,70 Z";

// `left` es la posición en reposo (la que se ve con reduced-motion) y va en vw
// porque la animación la resta dentro de un translateX.
const CLOUDS = [
  { top: "9%", left: "8vw", width: 110, opacity: 0.45, duration: "170s", delay: "-40s" },
  { top: "16%", left: "30vw", width: 240, opacity: 0.75, duration: "100s", delay: "-60s" },
  { top: "24%", left: "60vw", width: 180, opacity: 0.6, duration: "125s", delay: "-95s" },
  { top: "33%", left: "18vw", width: 140, opacity: 0.5, duration: "145s", delay: "-15s" },
];

export function DriftingClouds() {
  return (
    <div
      className="parallax-layer absolute inset-0"
      style={{ "--depth": 0.25 } as React.CSSProperties}
    >
      {CLOUDS.map(({ top, left, width, opacity, duration, delay }) => (
        <svg
          key={`${top}-${left}`}
          className="cloud"
          viewBox="0 0 200 80"
          style={
            {
              top,
              width,
              opacity,
              "--cloud-left": left,
              "--cloud-duration": duration,
              "--cloud-delay": delay,
            } as React.CSSProperties
          }
        >
          <path d={CLOUD_PATH} fill="white" />
        </svg>
      ))}
    </div>
  );
}

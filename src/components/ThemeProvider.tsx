"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// El script anti-parpadeo de layout.tsx ya escribió la clase `dark` en <html>
// antes de que React hidrate, así que el DOM es la fuente de verdad del tema.
// Lo leemos con useSyncExternalStore en lugar de copiarlo a estado dentro de un
// efecto: React admite que el snapshot del servidor difiera del cliente y
// corrige el valor tras hidratar, sin renders en cascada ni desajustes.
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// En el servidor no hay DOM; "dark" es el tema con el que se sirve el HTML.
function getServerSnapshot(): Theme {
  return "dark";
}

// Duración del amanecer y el atardecer. Debe coincidir con --sky-transition en
// globals.css, que es donde vive la coreografía.
const SKY_TRANSITION_MS = 4000;
let skyTransitionTimer: ReturnType<typeof setTimeout> | undefined;

// Marca <html> con la dirección del cambio para que el cielo haga su
// transición, y retira la marca al terminar: sólo existe mientras dura, así que
// la carga inicial nunca dispara un amanecer. Quien pide menos movimiento
// conserva el fundido directo.
function playSkyTransition(next: Theme) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  root.dataset.skyTransition = next === "dark" ? "sunset" : "sunrise";
  clearTimeout(skyTransitionTimer);
  // Un pequeño margen, porque las animaciones arrancan en el siguiente cálculo
  // de estilos y no deben perder su último fotograma.
  skyTransitionTimer = setTimeout(() => {
    delete root.dataset.skyTransition;
  }, SKY_TRANSITION_MS + 100);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    playSkyTransition(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("color-theme", next);
    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

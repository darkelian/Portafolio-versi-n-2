export function Observatory() {
  return (
    <section
      id="observatorio"
      className="py-20 border-t border-day-muted/20 dark:border-white/10"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">El Observatorio</h2>
        <p className="text-day-muted dark:text-night-muted max-w-2xl text-lg">
          Un espacio interactivo reservado para lógica. Aquí es donde los
          minijuegos y experimentos cobran vida.
        </p>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="px-6 py-3 border-b border-black/5 dark:border-white/5 flex items-center gap-2 bg-black/5 dark:bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-4 font-mono text-xs opacity-60">
            sandbox/game.tsx
          </div>
        </div>

        {/*
          TODO: cuando definan el minijuego, este es el lugar para
          renderizar el componente del juego (por ejemplo <GameCanvas />).
          Se deja como placeholder para no bloquear el resto del sitio.
        */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="w-16 h-16 mb-6 rounded-full glass-card flex items-center justify-center text-day-accent dark:text-night-accent">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Lienzo en blanco</h3>
          <p className="text-day-muted dark:text-night-muted mb-8 font-mono text-sm">
            [área lista para inyectar el minijuego]
          </p>
          <button className="btn-secondary px-6 py-2 rounded-lg font-bold text-sm">
            INICIAR SIMULACIÓN
          </button>
        </div>
      </div>
    </section>
  );
}

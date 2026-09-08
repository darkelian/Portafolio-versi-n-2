export function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-16 min-h-[70vh] flex flex-col justify-center">
      <div className="mb-8">
        <span className="badge text-day-accent border-day-accent dark:text-night-text dark:border-night-accent dark:bg-night-surface/50">
          Desarrollador Backend · IGAC
        </span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl">
        <span className="block dark:hidden">
          El mismo backend <br /> sólido, con la luz del <br /> amanecer.
        </span>
        <span className="hidden dark:block">
          Construyo backend <br /> sólido bajo un cielo de <br /> estrellas.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-day-muted dark:text-night-muted max-w-2xl mb-12 font-medium leading-relaxed">
        Ingeniero de sistemas — arquitectura hexagonal, Oracle Spatial y
        MongoDB en el Sistema Nacional de Catastro.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="btn-primary px-8 py-3.5 rounded-xl font-semibold"
        >
          Ver proyectos
        </a>
        <a
          href="#"
          className="btn-secondary px-8 py-3.5 rounded-xl font-semibold"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 border-t border-day-muted/20 dark:border-white/10"
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0 w-36 h-36 rounded-full flex items-center justify-center text-4xl font-extrabold border-2 border-day-accent dark:border-night-accent bg-day-surface dark:bg-night-surface text-day-accent dark:text-night-accent">
          BP
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-day-accent dark:text-night-accent mb-3">
            Sobre mí
          </h2>
          <h3 className="text-3xl font-bold mb-4">
            Ingeniero de sistemas, backend por convicción.
          </h3>
          <p className="text-day-muted dark:text-night-muted max-w-2xl leading-relaxed font-medium">
            Trabajo como desarrollador backend en el Instituto Geográfico
            Agustín Codazzi (IGAC), en el Sistema Nacional de Catastro, donde
            además reviso código de otros desarrolladores y cuido que la
            arquitectura hexagonal del backend se mantenga consistente. Me
            interesa el software bien estructurado tanto como una buena
            historia visual.
          </p>
        </div>
      </div>
    </section>
  );
}

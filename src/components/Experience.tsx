export function Experience() {
  return (
    <section
      id="experiencia"
      className="py-20 border-t border-day-muted/20 dark:border-white/10"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-day-accent dark:text-night-accent mb-6">
        Experiencia
      </h2>
      <div className="glass-card p-7 flex gap-6 items-start">
        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
        <div>
          <div className="font-bold text-lg">Desarrollador Backend — IGAC</div>
          <div className="text-sm font-semibold text-day-accent dark:text-night-accent mt-1">
            Marzo 2025 — Actualidad
          </div>
          <p className="text-sm text-day-muted dark:text-night-muted mt-3 max-w-2xl leading-relaxed font-medium">
            Sistema Nacional de Catastro. Desarrollo con Oracle Spatial y
            MongoDB, revisión de código de otros desarrolladores y cuidado de
            la arquitectura hexagonal del backend.
          </p>
        </div>
      </div>
    </section>
  );
}

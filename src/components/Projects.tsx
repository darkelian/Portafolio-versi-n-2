const projects = [
  { title: "Sistema Catastral", desc: "Backend geoespacial" },
  { title: "API Geoespacial", desc: "Oracle Spatial + MongoDB" },
  { title: "Servicio de Auth", desc: "Arquitectura hexagonal" },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-16">
      <h2 className="text-xs font-bold uppercase tracking-widest text-day-accent dark:text-night-accent mb-6">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="glass-card p-6">
            <h3 className="font-bold text-lg mb-1">{p.title}</h3>
            <p className="text-sm text-day-muted dark:text-night-muted font-medium">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

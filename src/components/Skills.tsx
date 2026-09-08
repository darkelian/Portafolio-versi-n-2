const skills = [
  "Spring Boot",
  "Oracle Spatial",
  "MongoDB",
  "Docker",
  "Arquitectura Hexagonal",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t border-day-muted/20 dark:border-white/10"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-day-accent dark:text-night-accent mb-6">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="glass-card px-4 py-2 text-sm font-semibold">
            {skill}
          </span>
        ))}
        <span className="px-4 py-2 text-sm font-medium rounded-2xl border border-dashed border-day-muted/40 dark:border-white/25 text-day-muted dark:text-night-muted">
          + agrega más skills
        </span>
      </div>
    </section>
  );
}

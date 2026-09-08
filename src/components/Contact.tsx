export function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 border-t border-day-muted/20 dark:border-white/10 text-center"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-day-accent dark:text-night-accent mb-4">
        Contacto
      </h2>
      <h3 className="text-3xl font-bold mb-6">¿Construimos algo juntos?</h3>
      <div className="flex flex-wrap gap-4 justify-center text-day-muted dark:text-night-muted font-medium">
        <a href="mailto:tu-email@ejemplo.com" className="hover:opacity-70">
          [tu email]
        </a>
        <span>·</span>
        <a href="#" className="hover:opacity-70">
          [GitHub]
        </a>
        <span>·</span>
        <a href="#" className="hover:opacity-70">
          [LinkedIn]
        </a>
      </div>
    </section>
  );
}

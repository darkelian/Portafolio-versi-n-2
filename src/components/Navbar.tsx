import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <nav className="relative z-50 w-full px-6 py-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-xl tracking-tight">Brayan Peña</div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

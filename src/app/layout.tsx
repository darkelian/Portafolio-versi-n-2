import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brayan Peña | Backend Developer",
  description:
    "Portafolio de Brayan Peña, desarrollador backend — arquitectura hexagonal, Oracle Spatial y MongoDB.",
};

// Se ejecuta antes de que React hidrate, para que el tema correcto
// (guardado en localStorage, o la preferencia del sistema) se aplique
// de inmediato y no haya parpadeo entre modo día y modo noche.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('color-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} font-sans bg-day-bg text-day-text dark:bg-night-bg dark:text-night-text min-h-screen selection:bg-day-accent selection:text-white dark:selection:bg-night-accent`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

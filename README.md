# Portafolio — Brayan Peña

Portafolio personal construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS**, con un toggle de tema día/noche (amanecer ☀️ / cielo estrellado 🌙) y una sección "El Observatorio" reservada para un minijuego easter egg.

## Stack

- **Next.js** (App Router) — elegido porque, además de servir el sitio estático, deja la puerta abierta a agregar rutas de API más adelante (por ejemplo, para un formulario de contacto real o un leaderboard del minijuego) sin cambiar de framework.
- **TypeScript**
- **Tailwind CSS** con paleta personalizada `night.*` / `day.*` (definida en `tailwind.config.ts`, tomada directamente del borrador de diseño ya aprobado).
- Toggle de tema hecho a mano con Context + `localStorage` (sin dependencias extra), replicando el comportamiento del borrador original en HTML.

## Estructura

```
src/
  app/
    layout.tsx       # layout raíz, fuente Inter, script anti-parpadeo de tema
    page.tsx         # ensambla todas las secciones
    globals.css       # Tailwind + utilidades (.glass-card, .btn-primary, etc.)
  components/
    ThemeProvider.tsx # contexto de tema (dark/light)
    ThemeToggle.tsx    # switch sol/luna
    SkyBackground.tsx  # fondo fijo: estrellas+luna (noche) / sol+nubes+dunas (día)
    Navbar.tsx
    Hero.tsx
    Projects.tsx
    About.tsx
    Experience.tsx
    Skills.tsx
    Observatory.tsx   # sección "El Observatorio" — placeholder del minijuego
    Contact.tsx
```

## Cómo correrlo localmente

> ⚠️ Este proyecto se generó a mano en un entorno sin acceso al registro de npm, así que **no se pudo correr `npm install` ni `npm run build` todavía**. Falta que lo hagas tú una vez lo tengas en tu máquina o en GitHub — son dos comandos:

```bash
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000).

Para generar la build de producción:

```bash
npm run build
npm run start
```

## Pendientes marcados en el código

Busca estos placeholders y complétalos con tu información real:

- `src/components/Contact.tsx` — tu email, GitHub y LinkedIn.
- `src/components/Skills.tsx` — agrega las skills que falten.
- `src/components/Observatory.tsx` — ahí va el componente del minijuego cuando lo definamos.

## Subir esto a GitHub

Desde la raíz del proyecto:

```bash
git init
git add .
git commit -m "Scaffold inicial del portafolio (Next.js + Tailwind, toggle día/noche)"
```

Luego crea el repositorio en GitHub (con la web, o con `gh repo create` si tienes la CLI instalada) y conéctalo:

```bash
git remote add origin git@github.com:<tu-usuario>/<nombre-del-repo>.git
git branch -M main
git push -u origin main
```

## Despliegue

Todavía no decidido — cuando el sitio esté listo, tanto **Vercel** (el más natural para Next.js, deploy automático en cada push) como **GitHub Pages** (requiere exportar como sitio estático con `next export`/`output: "export"`) son opciones válidas.

# Portafolio — Brayan Peña

Portafolio personal construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS 4**, con un toggle de tema día/noche (amanecer ☀️ / cielo estrellado 🌙) y una sección "El Observatorio" reservada para un minijuego easter egg.

## Requisitos

- **Node.js 24 LTS** (fijado en `.nvmrc` y en `engines`). Con `nvm`: `nvm use`.

## Stack

- **Next.js 16** (App Router) — elegido porque, además de servir el sitio estático, deja la puerta abierta a agregar rutas de API más adelante (por ejemplo, para un formulario de contacto real o un leaderboard del minijuego) sin cambiar de framework. Desde la 16, **Turbopack es el bundler por defecto** tanto en `dev` como en `build`.
- **React 19**.
- **TypeScript 7** — el compilador reescrito en Go. Ver la nota más abajo, porque convive con un puente a la API de TypeScript 6.
- **Tailwind CSS 4** con paleta personalizada `night-*` / `day-*`. Desde la v4 la configuración es *CSS-first*: ya no hay `tailwind.config.ts`, la paleta y la fuente viven en el bloque `@theme` de `src/app/globals.css`, y el modo oscuro por clase se declara con `@custom-variant dark`.
- **ESLint 9** con *flat config* (`eslint.config.mjs`). `next lint` fue eliminado en Next 16, así que el linting se corre con la CLI de ESLint.
- Toggle de tema hecho a mano con Context + `localStorage` (sin dependencias extra), replicando el comportamiento del borrador original en HTML.

### Nota sobre TypeScript 7

TypeScript 7 **no publica la API de JavaScript** del compilador (llega en la 7.1), y herramientas como `typescript-eslint` la necesitan. Por eso el `package.json` usa el esquema *side-by-side* que recomienda el equipo de TypeScript:

```json
"@typescript/native": "npm:typescript@^7.0.2",
"typescript": "npm:@typescript/typescript6@^6.0.2"
```

En la práctica:

- `tsc` (y por tanto `npm run typecheck` y el chequeo de tipos de `next build`) es **TypeScript 7**, el compilador nativo.
- Lo que el tooling importa como `typescript` es la **API de TypeScript 6**, que es la que consume ESLint. El binario de esa versión queda disponible como `tsc6`.

Dos consecuencias a tener presentes: el plugin de editor de Next (`plugins: [{ "name": "next" }]` en `tsconfig.json`) depende de `tsserver`, que TS 7 no incluye, así que el IDE usará su TypeScript propio; y **ESLint está fijado en la línea 9** porque `eslint-config-next` 16 todavía no funciona con ESLint 10.

## Estructura

```
src/
  app/
    layout.tsx       # layout raíz, fuente Inter, script anti-parpadeo de tema
    page.tsx         # ensambla todas las secciones
    globals.css      # config de Tailwind 4 (@theme, @custom-variant) + utilidades
  components/
    ThemeProvider.tsx # contexto de tema (dark/light), lee el DOM con useSyncExternalStore
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

`AGENTS.md` y `CLAUDE.md` los genera y mantiene `next dev` para apuntar a los docs de la versión instalada de Next; conviene commitearlos.

## Cómo correrlo localmente

```bash
nvm use          # Node 24
npm install
npm run dev
```

Luego abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit con TypeScript 7
npm run build      # build de producción con Turbopack
npm run start      # sirve la build
```

## Pendientes marcados en el código

Busca estos placeholders y complétalos con tu información real:

- `src/components/Contact.tsx` — tu email, GitHub y LinkedIn.
- `src/components/Skills.tsx` — agrega las skills que falten.
- `src/components/Observatory.tsx` — ahí va el componente del minijuego cuando lo definamos.

## Subir esto a GitHub

Crea el repositorio en GitHub (con la web, o con `gh repo create` si tienes la CLI instalada) y conéctalo:

```bash
git remote add origin git@github.com:<tu-usuario>/<nombre-del-repo>.git
git branch -M main
git push -u origin main
```

## Despliegue

Todavía no decidido — cuando el sitio esté listo, tanto **Vercel** (el más natural para Next.js, deploy automático en cada push) como **GitHub Pages** (requiere exportar como sitio estático con `output: "export"` en `next.config.ts`) son opciones válidas.

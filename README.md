# davinchi.work — Portfolio Personal

Portafolio personal de **David Peña**, Desarrollador Fullstack con experiencia en React, TypeScript e IA. Construido con un diseño cinematográfico "Digital Blueprint", soporte multilenguaje (ES/EN) y sistema de temas dinámico.

🌐 **Live:** [davinchi.work](https://davinchi.work)

---

## Stack Técnico

- [**React**](https://react.dev/) + [**TypeScript**](https://www.typescriptlang.org/) — UI y tipado estricto
- [**Vite**](https://vite.dev/) — Build tool y servidor de desarrollo
- [**Tailwind CSS v4**](https://tailwindcss.com/) — Estilos utility-first con sistema de temas via CSS Custom Properties
- [**Hono**](https://hono.dev/) — Backend ultraligero para API routes
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) — Deploy en el edge, distribución global
- [**TanStack Query**](https://tanstack.com/query) — Data fetching y estado del servidor
- [**Zustand**](https://zustand-demo.pmnd.rs/) — Estado global (tema activo)
- [**i18next**](https://www.i18next.com/) — Internacionalización ES/EN

### ✨ Características

- Diseño cinematográfico con 3 temas visuales: Deep Ocean, Forest Fire, Neon Dusk
- Soporte multilenguaje con detección automática del navegador
- API routes con Hono para formulario de contacto y status dinámico
- Deploy automático a Cloudflare's global edge network
- HMR para desarrollo rápido
- Observabilidad integrada via Wrangler


## Getting Started

To start a new project with this template, run:

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/vite-react-template
```

A live deployment of this template is available at:
[https://react-vite-template.templates.workers.dev](https://react-vite-template.templates.workers.dev)

## Development

Install dependencies:

```bash
npm install
```

Start the development server with:

```bash
npm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Production

Build your project for production:

```bash
npm run build
```

Preview your build locally:

```bash
npm run preview
```

Deploy your project to Cloudflare Workers:

```bash
npm run build && npm run deploy
```

Monitor your workers:

```bash
npx wrangler tail
```

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)

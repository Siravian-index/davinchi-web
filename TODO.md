## 🔌 Backend (Hono / Cloudflare Workers)

- [ ] **Formulario de contacto** — Endpoint `POST /api/contact`. Recibe `{ name, email, message }` y envía el correo vía Resend. Reemplaza el `mailto:` del footer por un form con la estética del sitio.
- [ ] **Status dinámico** — Endpoint `GET /api/status`. Almacena `{ available, currentlyLearning, location }` en KV. El badge "Disponible para proyectos" del hero consume este endpoint en lugar de ser hardcodeado.
- [ ] **Contador de visitas** — Endpoint `GET /api/stats`. Incrementa un contador en KV por visita única (IP hasheada). Mostrar discretamente en footer o hero badge.

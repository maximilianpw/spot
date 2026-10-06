# Spot

One repository, two deployable applications. Bun workspaces share a lockfile and Vite+ tooling; the frontend and backend have separate code, builds, and runtimes.

## Structure

```text
frontend/                 React Router + React + Tailwind (SPA)
  app/                    UI, routes, and client-side data loading
  public/                 Static files
  Dockerfile              Static build served by Nginx
  nginx.conf.template     SPA fallback and /api reverse proxy
backend/                  Node.js + TypeScript API monolith
  src/app.ts              HTTP API routing (GET /api/health)
  src/server.ts           Runtime configuration and server lifecycle
  Dockerfile              Compiled API on Node.js
compose.yaml              Both services for local production testing
vite.config.ts            Shared formatting, linting, and tests
bun.lock                  Shared dependency lockfile
```

Keep business logic and persistence in backend/ as the application grows. The frontend must not import backend implementation files or contain secrets. This is not a microservices setup: the backend is one application.

## Development

Requires Node.js 24+, Bun 1.4.2, and the Vite+ CLI (`vp`).

```bash
vp install
vp run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001/api/health
- Proxied API: http://localhost:5173/api/health

Run only one app with `vp run dev:frontend` or `vp run dev:backend`.
The root `dev` and `build` scripts orchestrate both workspaces: use **vp run dev** / **vp run build**, not the built-in `vp dev` / `vp build` commands at the repository root.

Frontend code should use relative requests such as `fetch("/api/health")` in React Router `clientLoader` / `clientAction` functions. Vite proxies /api to the backend in development and preview; Nginx does this in the supplied production image. Browser requests stay same-origin, so no permissive CORS configuration is needed.

### Configuration

| Variable    | Used by                       | Default                                                      |
| ----------- | ----------------------------- | ------------------------------------------------------------ |
| PORT        | Backend                       | 3001                                                         |
| HOST        | Backend                       | 0.0.0.0                                                      |
| BACKEND_URL | Frontend dev/preview or Nginx | http://127.0.0.1:3001 locally; http://backend:3001 in Docker |

Set `FRONTEND_PORT` to override the frontend development port (default 5173) if it is already in use.

Set variables in the process environment, for example:

```bash
PORT=4001 vp run dev:backend
BACKEND_URL=http://127.0.0.1:4001 vp run dev:frontend
```

BACKEND_URL must be an HTTP(S) origin with no path or trailing slash. It is server-side proxy configuration, not a browser-exposed secret. The backend does not automatically load .env files.

## Verification and builds

```bash
vp run verify   # Generate route types, typecheck both apps, format/lint checks
vp test        # API tests through a real HTTP server
vp run build   # frontend/build/client and backend/dist
```

After a build, run the API with `bun run --cwd backend start` and preview the frontend with `bun run --cwd frontend preview` (http://localhost:4173). Preview is for local verification, not production hosting.

## Deployment

Both Dockerfiles use the **repository root** as their build context:

```bash
docker build -f frontend/Dockerfile -t spot-frontend .
docker build -f backend/Dockerfile -t spot-backend .
# Or build and run both locally:
docker compose up --build
```

Compose exposes the frontend at http://localhost:8080 and API at http://localhost:3001. Its frontend proxies /api to the backend over the internal Docker network.

For separate hosting:

- **Backend:** deploy the backend image (port 3001, configurable via PORT), or build and run backend/dist/server.js with Node 24+. The initial API uses only Node built-ins and needs no runtime dependencies. Health check: GET /api/health.
- **Frontend:** deploy the frontend image (port 80) and set BACKEND_URL to the reachable backend origin. Alternatively, upload frontend/build/client to a static host; configure an /api/* reverse proxy to the backend **before** the SPA fallback to index.html.
- Terminate HTTPS at your hosting platform / ingress. Do not expose secrets with VITE_ variables.

The original template's runtime SSR is intentionally disabled: the UI is now independently hosted as a static SPA, while runtime server logic belongs in backend/. Do not add server loaders/actions to frontend routes; use clientLoader/clientAction to call the API instead. There is no application database or authentication configured yet.

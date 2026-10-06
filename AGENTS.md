# Project workflow

Use npm workspaces from the repository root with Node.js 24+ and npm 11+.
Install dependencies with `npm ci` after pulling lockfile changes; use `npm install` when changing dependencies and commit `package-lock.json`.

Before completing changes, run `npm run verify`, `npm test`, and `npm run build`.
Use `npm run format` to fix formatting failures.

See README.md for development, configuration, and deployment instructions.

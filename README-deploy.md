Signal Ridge — Deployment & Vercel checklist

Goal: Ensure the site builds locally and deploys cleanly to Vercel on first attempt.

Prerequisites

- Node.js (>=18) and npm installed
- Repo checked out and dependencies installed (npm install)

Local verification steps

1. Install deps (if not already):

   ```powershell
   cd "C:\Users\Quant\Downloads\Signal_Ridge_WebSuite_Final"
   npm install
   ```

2. Run a production build:

   ```powershell
   npm run build
   ```

   - Expected: a `dist` directory is created.

3. Preview the production build locally:

   ```powershell
   npm run preview
   ```

   - Vite's preview prints a Local URL (e.g. http://localhost:4173). Open that in a browser and confirm the site loads.

4. Troubleshooting build errors:
   - Tailwind/PostCSS: Check `postcss.config.cjs` and `tailwind.config.cjs` exist and are valid.
   - Missing assets: Ensure assets live in `public/assets` and are referenced with `/assets/...`.
   - React errors: Run `npm run dev` to reproduce and fix in dev mode.

Vercel deployment settings (first-time)

- Connect the repository to Vercel (Import Project).
- Set build command: `npm run build` (Vercel usually auto-detects).
- Output directory: `dist` (Vite default).
- `vercel.json` already includes `@vercel/static-build` and SPA routing to `index.html`.

vercel.json example (already present):

```json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@vercel/static-build" }],
  "routes": [{ "src": "\\/(.*)", "dest": "/index.html" }]
}
```

Common Vercel pitfalls

- DevDependencies not installed during build: Vercel installs devDependencies for static builds by default. If you changed project settings, ensure devDependencies are installed.
- Wrong output dir: Set to `dist`.
- Environment variables: None required by this repo.

If deploy fails

1. Paste the Vercel build log here and I will analyze and propose changes.
2. If build passes locally but fails on Vercel, check Node version used by Vercel (set via `engines` in package.json or Vercel project settings).

Advanced

- To pin Node version, add to `package.json`:
  ```json
  "engines": { "node": "^18.0.0" }
  ```

If you want, I can:

- Re-run `npm run build` here and capture the exact error output (I'll try again), or
- Modify `vercel.json` or `package.json` to pin Node or adjust build settings, or
- Attempt to trigger a Vercel deploy if you provide access.

Respond with which follow-up you want.

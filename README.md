# maheshkk.com - Personal Site

## Stack
Next.js (App Router) + TypeScript + Tailwind + MDX

## Development
pnpm install
pnpm dev

If `pnpm` is not available:

npm install
npm run dev

## Build
pnpm build
pnpm start

If `pnpm` is not available:

npm run build
npm run start

## Deploy to Vercel
1. Push this repository to GitHub.
2. In Vercel, click **Add New...** -> **Project**.
3. Import the GitHub repository.
4. Keep defaults (Framework Preset: **Next.js**).
5. Build settings:
   - Install Command: `pnpm install` (or `npm install` if needed)
   - Build Command: `pnpm build` (or `npm run build`)
   - Output Directory: `.next` (default)
6. Add production environment variables if needed.
7. Click **Deploy**.

After deploy, verify:
- `/api/health` returns `{"status":"ok"}`
- `/rss.xml`, `/sitemap.xml`, and `/robots.txt` resolve correctly

## Spec
See `SPEC.md` and `AGENTS.md`.

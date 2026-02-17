# Deployment Guide (Vercel + IONOS Domain)

## 1. Deploy project to Vercel
1. Push code to GitHub.
2. In Vercel: **Add New...** -> **Project**.
3. Import this GitHub repo.
4. Keep Next.js defaults.
5. Build settings:
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
6. Deploy.

If `pnpm` is unavailable in your setup, switch commands to npm equivalents.

## 2. Add your custom domain in Vercel
1. Open the Vercel project.
2. Go to **Settings** -> **Domains**.
3. Add your domain (example: `maheshkk.com`) and also `www.maheshkk.com`.
4. Vercel will show required DNS records.

## 3. Configure DNS at IONOS
In IONOS DNS settings for your domain, create/update records based on what Vercel shows in the UI.
Typical setup is:

- Apex/root (`@`):
  - Type: `A`
  - Name/Host: `@`
  - Value: `76.76.21.21`

- WWW subdomain:
  - Type: `CNAME`
  - Name/Host: `www`
  - Value: `cname.vercel-dns.com`

Notes:
- If Vercel provides different record values, use Vercel's values.
- Remove conflicting old A/CNAME records for `@` and `www`.
- DNS propagation can take a few minutes to 48 hours.

## 4. Verify and set redirect behavior
1. Return to Vercel Domains page.
2. Wait for domain status to become valid.
3. Set one primary domain (for example `maheshkk.com`) and redirect the other (`www`) to primary.
4. Confirm HTTPS certificate is active.

## 5. Post-deploy checks
- Site loads at `https://maheshkk.com`
- `https://maheshkk.com/api/health` returns 200 and `{"status":"ok"}`
- Canonical tags point to `https://maheshkk.com/...`
- `https://maheshkk.com/rss.xml`, `https://maheshkk.com/sitemap.xml`, `https://maheshkk.com/robots.txt` are accessible

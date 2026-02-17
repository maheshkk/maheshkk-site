# AGENTS.md — Working Agreement for Codex

## Constraints
- Follow SPEC.md exactly unless a decision is necessary; if necessary, choose the simplest/minimal solution.
- Keep dependencies minimal. Do not add large libraries unless truly required.
- Do NOT embed the Twitter/X timeline widget. Use curated notes from `data/notes.json`.
- Keep the design minimal, calm, Apple-like: whitespace, clean typography, subtle motion only.
- Avoid confidential employer details in copy. Keep "What I'm building" high-level.

## Tooling
- Use pnpm if available; otherwise use npm.
- Run and fix: `pnpm lint` and `pnpm build` before finalizing changes.
- Prefer simple utilities over heavy packages.

## Implementation preferences
- Next.js App Router + TypeScript + Tailwind
- MDX in-repo for blog posts
- Generate RSS + sitemap (simple implementation ok)
- Client-side search can be a simple filter over the loaded post metadata.

# maheshkk.com — Personal Brand Site (V1) Spec

## Goal
Build a minimalist, calm, Apple-like personal website for Mahesh Kulkarni that establishes:
- Thought leadership on "Future with AI" and AI adaptation
- Credibility as a seasoned product builder (startup dev → smartphones → XR → AI)
- Aspirational AI entrepreneur energy (builder mindset, not hustle-y)
- Motivation + excitement for next generation (especially kids/students)

Primary emotional outcome:
- A 12-year-old should feel excitement and possibility:
  "You have a magic ball in your hand — what will you build with it?"

Tone:
- Calm, thoughtful, nerdy, optimistic. Not hype. Not corporate. Not hustle-bro.

Non-negotiables:
1) Minimal and calm aesthetic (lots of whitespace, clean typography, subtle motion)
2) Curated > raw feeds (NO embedded Twitter/X timeline widget; curated items only)
3) Story-first: the 1992 BASIC bouncing ball origin story is the anchor
4) High performance, accessible, SEO-friendly
5) Easy to maintain content (mostly edit MDX/JSON files, not code)

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- MDX for blog posts
- Deployed to Vercel
- Content stored in-repo (MDX + JSON) for v1
- Package manager: pnpm (preferred). If pnpm not available, use npm.

## Pages / Routes (Information Architecture)

### Home `/`
Purpose: instantly communicate thesis + story + credibility + ways to engage.

Required sections:
1) Hero
   - Name: Mahesh Kulkarni
   - Descriptor: "Technologist • Product Builder • AI Explorer" (or similar)
   - Headline: "In the AI-native era, adaptability is the ultimate advantage."
   - Subtext: "I write and speak about how individuals adapt to AI—and how that shapes products, enterprises, and society."
   - CTAs: "Read My Thoughts" → /thoughts, "Watch Talks" → /talks, "Subscribe" → email capture
   - Optional small profile photo (if exists)

2) Origin story (must-have)
   - Title: "1992: The first time I saw a computer"
   - Short story:
     - Rural school
     - BASIC program
     - Bouncing ball game
     - Awe + life direction
   - Bridge: "AI feels like that moment again."

3) Thesis / Beliefs (2–4 bullets)
   - AI is a structural shift, not a tool upgrade
   - Individuals who adapt faster will lead
   - Agents will reshape how we interact with software
   - (Optional) Privacy + trust matters

4) Featured writing
   - Show 3 posts marked `featured: true` from MDX frontmatter

5) Featured talks
   - Show 2–3 items marked `featured: true` from `data/talks.json`
   - Each: title + event + date + embed if YouTube

6) What I'm building (high-level only)
   - Themes: AI-native experiences, agentic workflows, privacy-first AI, browser as workspace
   - Must avoid confidential Samsung details.

7) Curated signals (NOT raw feed)
   - Show 5–7 curated items from `data/notes.json` (short text + link)

Footer:
- Social links (LinkedIn, X, YouTube, GitHub optional)
- Email subscribe (again)
- Simple copyright

### About `/about`
Purpose: deepen story and worldview (not resume copy).
Sections:
- Origin story (slightly longer)
- Chasing the frontier: startup dev → smartphones → XR → AI
- "What I believe now" (3–5 beliefs)
- "If you're a student..." (encouraging note)

### Thoughts `/thoughts`
Purpose: blog listing + filters/search.
Requirements:
- List posts reverse chronologically
- Tag filter (multi-tag ok)
- Search box (client-side search across title/summary)
- Each card shows title, date, summary, tags, reading time
- Clicking goes to `/thoughts/[slug]`

### Post detail `/thoughts/[slug]`
Requirements:
- Title, date, reading time, tags
- Content rendered from MDX
- Share links (X/LinkedIn share)
- Subscribe CTA at bottom
- Related posts section (same tag)

Also required:
- RSS feed at `/rss.xml`

### Talks `/talks`
Purpose: public proof + credibility.
- Grid list of talks/panels (from `data/talks.json`)
- Each entry: title, event, date, tags, 2–3 takeaways, embed (YouTube) or external link
- Optional filters by tag

### Contact `/contact`
- Minimal contact form (name/email/message)
- Basic spam mitigation (honeypot field)
- Form should submit to a simple API route that emails or stores—V1 can just log and return success OR use `mailto:` fallback
- Provide a clear email link as fallback.

## Content Model

### Blog posts (MDX)
Location: `content/thoughts/*.mdx`

Frontmatter:
---
title: string
date: YYYY-MM-DD
tags: [string]
summary: string
featured: boolean
draft: boolean
---

Slug derived from filename.

### Talks
Location: `data/talks.json`

Fields per item:
- id (string)
- title
- event
- date (YYYY-MM-DD)
- tags (string[])
- takeaways (string[])
- youtubeId (string | null)
- url (string | null)
- featured (boolean)

### Curated notes ("Selected posts")
Location: `data/notes.json`

Fields:
- id
- text (short)
- url
- source ("X" | "LinkedIn" | "YouTube" | "Other")
- date (optional)

### Site config
Location: `data/site.ts`
- name, descriptor, headline, social links, SEO defaults

## Design System
- Minimal, calm, Apple-like
- White background, near-black text, single subtle accent color for links/buttons
- Max content width around 880–980px
- Excellent typography (system font stack ok)
- Subtle animations only (fade/translate on scroll ok but minimal)
- Components: Button, Card, Tag pill, Divider, Newsletter form, Responsive video embed

## SEO Requirements
- Per-page title + meta description
- OpenGraph + Twitter card
- canonical URLs
- sitemap.xml and robots.txt
- JSON-LD structured data:
  - Person on home/about
  - BlogPosting on post pages

## Performance & Accessibility Acceptance Criteria
- Lighthouse Mobile targets:
  - Performance >= 90
  - Accessibility >= 95
  - Best Practices >= 95
  - SEO >= 95
- CLS < 0.1
- LCP < 2.5s on decent connection
- Keyboard navigation + visible focus states
- Semantic headings, alt text, AA contrast

## Definition of Done (DoD)
- All routes implemented: /, /about, /thoughts, /thoughts/[slug], /talks, /contact
- MDX blog works (tags, search, reading time, related posts, RSS)
- Home shows featured posts + featured talks + curated notes
- No embedded Twitter timeline widget
- Responsive, minimal design
- SEO + RSS + sitemap + robots included
- `pnpm lint` and `pnpm build` pass

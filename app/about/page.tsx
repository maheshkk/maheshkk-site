import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "About",
  description: "The story, background, and current focus behind Mahesh Kulkarni's work on AI.",
  alternates: { canonical: "/about" },
};

const highlights = [
  "Built products across startup, mobile, XR, and AI platform waves.",
  "Writes and speaks on adapting individuals and teams to AI-native work.",
  "Focuses on practical product strategy, workflow redesign, and execution discipline.",
  "Advocates trust, privacy, and legibility in agentic systems.",
];

const experience = [
  { period: "Now", role: "AI Explorer and Product Builder", company: "Independent" },
  { period: "Before", role: "Product and technology leadership", company: "Smartphone ecosystem" },
  { period: "Earlier", role: "XR and frontier interface exploration", company: "Emerging platforms" },
  { period: "Start", role: "Startup developer and builder", company: "Early-career startups" },
];

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.domain,
    description: "Technologist, product builder, and AI explorer.",
  };

  return (
    <>
      <Container>
        <section className="py-16 md:py-20">
          <h1 className="text-4xl font-medium tracking-tight">About</h1>
          <p className="mt-5 max-w-3xl leading-8 text-ink/75">
            In 1992, I saw a computer for the first time in a rural school and wrote a BASIC
            bouncing-ball program. That tiny loop changed my life direction.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-ink/75">
            Since then, I have kept chasing the frontier: startup development, smartphones, XR, and
            now AI. The throughline is simple: help people adapt faster as technology changes how we
            build, decide, and collaborate.
          </p>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Highlights</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="rounded-xl border border-black/5 p-4 text-sm leading-7 text-ink/75">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Experience snapshot</h2>
          <div className="mt-7 space-y-5">
            {experience.map((item) => (
              <article key={`${item.period}-${item.role}`} className="grid gap-2 border-l border-black/10 pl-4 md:grid-cols-[90px_1fr] md:gap-4">
                <p className="text-xs uppercase tracking-wide text-ink/50">{item.period}</p>
                <div>
                  <h3 className="text-base font-medium text-ink">{item.role}</h3>
                  <p className="mt-1 text-sm text-ink/70">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">What I&apos;m exploring now</h2>
          <ul className="mt-5 space-y-3 text-ink/75">
            <li>AI-native experiences with clear user supervision loops</li>
            <li>Agentic workflows that improve decision quality, not just speed</li>
            <li>Privacy-first AI product patterns that earn long-term trust</li>
            <li>Browser-first workspaces for modern builders</li>
          </ul>
          <Link href="/thoughts" className="mt-6 inline-block text-sm text-accent hover:underline">
            Read current thinking -&gt;
          </Link>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Connect</h2>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-ink/75">
            {site.contact.showEmailPublicly ? (
              <a className="text-accent hover:underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            ) : null}
            <SocialLinks iconOnly={false} />
          </div>
        </section>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story and worldview behind Mahesh Kulkarni's work on the future with AI.",
  alternates: { canonical: "/about" },
};

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
        <section className="py-16">
          <h1 className="text-4xl font-medium tracking-tight">About</h1>
          <div className="prose prose-neutral mt-8 max-w-3xl">
            <h2>Origin story</h2>
            <p>
              In 1992, I saw a computer for the first time in a rural school and wrote a BASIC
              bouncing ball program. That small moment of wonder shaped everything that followed.
            </p>
            <h2>Chasing the frontier</h2>
            <p>
              My journey moved from startup development to smartphones, then XR, and now AI. Every
              wave changed interfaces, workflows, and expectations. AI feels like the most
              foundational shift yet.
            </p>
            <h2>What I believe now</h2>
            <ul>
              <li>Adaptability is the most valuable skill in the AI-native era.</li>
              <li>Agents will become a default interface for software tasks.</li>
              <li>Learning velocity will matter more than credentials.</li>
              <li>Trust, safety, and privacy are product requirements.</li>
            </ul>
            <h2>If you&apos;re a student...</h2>
            <p>
              You are early for the most exciting era in computing. Stay curious, build small things
              often, and let each project raise your ambition.
            </p>
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

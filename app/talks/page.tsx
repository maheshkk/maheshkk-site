import type { Metadata } from "next";
import { Container } from "@/components/container";
import { TalksClient } from "@/components/talks-client";
import { getTalks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Talks",
  description: "Talks and panels on the future with AI, adaptation, and product strategy.",
  alternates: { canonical: "/talks" },
};

export default function TalksPage() {
  const talks = getTalks();

  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-medium tracking-tight">Talks</h1>
        <p className="mt-3 text-ink/70">Public talks, panels, and keynotes.</p>
        <div className="mt-10">
          <TalksClient talks={talks} />
        </div>
      </section>
    </Container>
  );
}

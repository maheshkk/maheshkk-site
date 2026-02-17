import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { NewsletterForm } from "@/components/newsletter-form";
import { PostCard } from "@/components/post-card";
import { TalkCard } from "@/components/talk-card";
import { NotesList } from "@/components/notes-list";
import { getFeaturedPosts, getFeaturedTalks, getNotes } from "@/lib/content";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const featuredTalks = getFeaturedTalks(3);
  const notes = getNotes(6);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    description: site.descriptor,
    url: site.domain,
    jobTitle: "Technologist and Product Builder",
  };

  return (
    <>
      <Container>
        <section className="py-20">
          <p className="text-sm tracking-wide text-ink/65">{site.descriptor}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">{site.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/thoughts" className="rounded-xl bg-ink px-5 py-2.5 text-sm text-white">
              Read My Thoughts
            </Link>
            <Link href="/talks" className="rounded-xl border border-black/10 px-5 py-2.5 text-sm">
              Watch Talks
            </Link>
          </div>
          <div className="mt-8 max-w-md">
            <p className="text-sm text-ink/65">Subscribe for new essays and talks.</p>
            <NewsletterForm />
          </div>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">1992: The first time I saw a computer</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink/75">
            I was in a rural school when I first sat in front of a computer. I wrote a tiny BASIC
            program to make a ball bounce across the screen. It was simple, but it changed my
            trajectory. AI feels like that moment again, except the magic ball is now in everyone&apos;s
            hand.
          </p>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Beliefs</h2>
          <ul className="mt-6 space-y-3 text-ink/75">
            <li>AI is a structural shift, not a tool upgrade.</li>
            <li>Individuals who adapt faster will lead.</li>
            <li>Agents will reshape how we interact with software.</li>
            <li>Trust and privacy must be built in, not patched in.</li>
          </ul>
        </section>

        <section className="border-t border-black/5 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Featured Writing</h2>
            <Link href="/thoughts" className="text-sm text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Featured Talks</h2>
            <Link href="/talks" className="text-sm text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredTalks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">What I&apos;m building</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink/75">
            I&apos;m exploring AI-native experiences, agentic workflows, privacy-first AI, and the browser
            as a serious workspace for the next generation of builders.
          </p>
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Curated Signals</h2>
          <p className="mt-3 text-sm text-ink/65">Selected notes and references, updated over time.</p>
          <div className="mt-6 max-w-3xl">
            <NotesList notes={notes} />
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

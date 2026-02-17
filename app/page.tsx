import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { NewsletterForm } from "@/components/newsletter-form";
import { PostCard } from "@/components/post-card";
import { TalkCard } from "@/components/talk-card";
import { NotesList } from "@/components/notes-list";
import { getFeaturedPosts, getFeaturedTalks, getNotes } from "@/lib/content";

function BackToTopLink() {
  return (
    <div className="mt-8">
      <Link href="/#top" className="text-sm text-ink/60 transition hover:text-ink hover:underline">
        Back to top
      </Link>
    </div>
  );
}

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const featuredTalks = getFeaturedTalks(3);
  const notes = getNotes(6);
  const startHereHref = featuredPosts[0] ? `/thoughts/${featuredPosts[0].slug}` : "/thoughts";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    description: site.descriptor,
    url: site.domain,
    jobTitle: "Technologist and Product Builder",
  };

  const beliefs = [
    {
      text: "AI is a structural shift, not a tool upgrade.",
      href: "/thoughts/second-1992",
    },
    {
      text: "Individuals who adapt faster will lead.",
      href: "/thoughts/magic-ball",
    },
    {
      text: "Agents will reshape how we interact with software.",
      href: "/thoughts/agent-era",
    },
    {
      text: "Trust and privacy must be built in, not patched in.",
      href: "",
    },
  ];

  return (
    <>
      <Container>
        <section id="top" className="scroll-mt-24 py-20 md:py-24">
          <p className="text-sm tracking-wide text-ink/65">{site.descriptor}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-tight text-ink md:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{site.subheadline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65">
            My why started in 1992 with a tiny BASIC bouncing-ball program in a rural school lab.
            I have been chasing that same frontier feeling ever since, now through AI-native
            products and workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#thoughts" className="rounded-xl bg-ink px-5 py-2.5 text-sm text-white">
              Read My Thoughts
            </Link>
            <Link href="/#talks" className="rounded-xl border border-black/10 px-5 py-2.5 text-sm">
              Watch Talks
            </Link>
            <Link href="/#about" className="rounded-xl border border-black/10 px-5 py-2.5 text-sm">
              About Me
            </Link>
          </div>
          <div className="mt-8 max-w-md">
            <p className="text-sm text-ink/65">Subscribe for new essays and talks.</p>
            <NewsletterForm />
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-black/5 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <h2 className="text-2xl font-medium tracking-tight">1992: The first time I saw a computer</h2>
              <p className="mt-4 max-w-3xl leading-8 text-ink/75">
                I was in a rural school when I first sat in front of a computer. I wrote a tiny
                BASIC program to make a ball bounce across the screen. It looked simple, but it
                rewired my sense of what was possible.
              </p>
              <p className="mt-4 max-w-3xl leading-8 text-ink/75">
                AI feels like that moment again: same wonder, bigger surface area, more people able
                to build. The core question is still personal: what will you create with this new
                capability?
              </p>
              <Link href="/about" className="mt-6 inline-block text-sm text-accent hover:underline">
                Read the full story -&gt;
              </Link>
              <BackToTopLink />
            </div>
            <div className="rounded-2xl border border-black/5 bg-mist p-5">
              <p className="text-xs tracking-wide text-ink/60">BASIC (1992)</p>
              <pre className="mt-3 overflow-x-auto text-xs leading-6 text-ink/70">
{`10 X=X+1
20 IF X>20 THEN DX=-1
30 IF X<1 THEN DX=1
40 X=X+DX : GOTO 20`}
              </pre>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
                <p className="text-xs text-ink/60">A bouncing dot became a career direction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 border-t border-black/5 py-16 md:py-20">
          <h2 className="text-2xl font-medium tracking-tight">Beliefs</h2>
          <p className="mt-3 text-sm text-ink/65">
            These beliefs shape how I build and how I write.
          </p>
          <ul className="mt-7 space-y-4 text-ink/75">
            {beliefs.map((belief) => (
              <li key={belief.text} className="rounded-xl border border-black/5 p-4">
                {belief.href ? (
                  <Link href={belief.href} className="hover:text-accent hover:underline">
                    {belief.text}
                  </Link>
                ) : (
                  <span>{belief.text}</span>
                )}
              </li>
            ))}
          </ul>
          <Link href={startHereHref} className="mt-6 inline-block text-sm text-accent hover:underline">
            Start here -&gt;
          </Link>
          <BackToTopLink />
        </section>

        <section id="thoughts" className="scroll-mt-24 border-t border-black/5 py-16">
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
          <BackToTopLink />
        </section>

        <section id="talks" className="scroll-mt-24 border-t border-black/5 py-16">
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
          <BackToTopLink />
        </section>

        <section className="border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">What I&apos;m building</h2>
          <p className="mt-4 max-w-3xl leading-8 text-ink/75">
            I&apos;m exploring AI-native experiences, agentic workflows, privacy-first AI, and the browser
            as a serious workspace for the next generation of builders.
          </p>
        </section>

        <section className="scroll-mt-24 border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Curated Signals</h2>
          <p className="mt-3 text-sm text-ink/65">Selected notes and references, updated over time.</p>
          <div className="mt-6 max-w-3xl">
            <NotesList notes={notes} />
          </div>
          <BackToTopLink />
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-black/5 py-16">
          <h2 className="text-2xl font-medium tracking-tight">Contact</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">
            For talks, collaboration, or product conversations, reach out directly or use the full
            contact page form.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            {site.contact.showEmailPublicly ? (
              <a href={`mailto:${site.contact.email}`} className="text-accent hover:underline">
                {site.contact.email}
              </a>
            ) : null}
            {site.socials.linkedin ? (
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>
            ) : null}
            <Link href="/contact" className="rounded-xl border border-black/10 px-4 py-2 hover:bg-black/5">
              Open full contact form
            </Link>
          </div>
          <BackToTopLink />
        </section>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
    </>
  );
}

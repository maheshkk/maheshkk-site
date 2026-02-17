import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Tag } from "@/components/tag";
import { PostCard } from "@/components/post-card";
import { getAllPosts, getPostBySlug, getPostContent, getRelatedPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { site } from "@/data/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/thoughts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `${site.domain}/thoughts/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function ThoughtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postMeta = getPostBySlug(slug);
  if (!postMeta) notFound();

  const post = await getPostContent(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postMeta.title,
    datePublished: postMeta.date,
    description: postMeta.summary,
    url: `${site.domain}/thoughts/${postMeta.slug}`,
    author: {
      "@type": "Person",
      name: site.name,
    },
  };

  const encodedUrl = encodeURIComponent(`${site.domain}/thoughts/${postMeta.slug}`);
  const encodedTitle = encodeURIComponent(postMeta.title);

  return (
    <>
      <Container>
        <article className="py-16">
          <p className="text-sm text-ink/60">
            {formatDate(postMeta.date)} | {post.readingTime}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight">{postMeta.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {postMeta.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className="prose prose-neutral mt-10 max-w-3xl">{post.content}</div>

          <div className="mt-12 rounded-2xl border border-black/5 bg-mist p-6">
            <p className="text-sm text-ink/75">Share this post</p>
            <div className="mt-2 flex gap-4 text-sm">
              <a
                href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Share on LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm text-ink/75">Subscribe for more essays at hello@maheshkk.com</p>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="border-t border-black/5 py-14">
            <h2 className="text-2xl font-medium tracking-tight">Related posts</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="pb-16">
          <Link href="/thoughts" className="text-sm text-accent hover:underline">
            Back to all thoughts
          </Link>
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}

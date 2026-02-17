import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ThoughtsClient } from "@/components/thoughts-client";
import { getAllPosts, getAllTags } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Essays and notes on adapting to AI and building AI-native products.",
  alternates: { canonical: "/thoughts" },
};

export default function ThoughtsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-medium tracking-tight">Thoughts</h1>
        <p className="mt-3 text-ink/70">Ideas on adaptation, AI-native product thinking, and learning.</p>
        <div className="mt-10">
          <ThoughtsClient posts={posts} allTags={tags} />
        </div>
      </section>
    </Container>
  );
}

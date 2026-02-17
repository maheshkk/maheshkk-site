"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/types";
import { PostCard } from "@/components/post-card";
import { Tag } from "@/components/tag";

type Props = {
  posts: PostMeta[];
  allTags: string[];
};

export function ThoughtsClient({ posts, allTags }: Props) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return posts.filter((post) => {
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q);

      const matchesTags =
        activeTags.length === 0 || activeTags.every((tag) => post.tags.includes(tag));

      return matchesQuery && matchesTags;
    });
  }, [posts, query, activeTags]);

  function toggleTag(tag: string) {
    setActiveTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag],
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts"
          className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none ring-accent/40 transition focus:ring"
          aria-label="Search posts"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button key={tag} onClick={() => toggleTag(tag)} type="button" aria-pressed={activeTags.includes(tag)}>
              <Tag label={tag} className={activeTags.includes(tag) ? "text-accent border-accent/40" : ""} />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 ? <p className="text-sm text-ink/70">No posts found.</p> : null}
    </div>
  );
}

import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/tag";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-2xl border border-black/5 p-6 transition hover:border-black/10">
      <p className="mb-3 text-xs text-ink/60">
        {formatDate(post.date)} | {post.readingTime}
      </p>
      <h3 className="text-xl font-medium tracking-tight text-ink">
        <Link href={`/thoughts/${post.slug}`} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink/75">{post.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}

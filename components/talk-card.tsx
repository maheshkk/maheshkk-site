import type { Talk } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/tag";

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <article className="rounded-2xl border border-black/5 p-6">
      <p className="text-xs text-ink/60">{formatDate(talk.date)} | {talk.event}</p>
      <h3 className="mt-2 text-lg font-medium tracking-tight text-ink">{talk.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {talk.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/75">
        {talk.takeaways.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {talk.youtubeId ? (
        <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
          <iframe
            title={talk.title}
            src={`https://www.youtube.com/embed/${talk.youtubeId}`}
            className="aspect-video w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : talk.url ? (
        <a href={talk.url} className="mt-4 inline-block text-sm text-accent hover:underline">
          Watch / Details
        </a>
      ) : null}
    </article>
  );
}

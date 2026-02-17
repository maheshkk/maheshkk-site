"use client";

import { useMemo, useState } from "react";
import type { Talk } from "@/lib/types";
import { Tag } from "@/components/tag";
import { TalkCard } from "@/components/talk-card";

type Props = {
  talks: Talk[];
};

export function TalksClient({ talks }: Props) {
  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const talk of talks) {
      for (const tag of talk.tags) set.add(tag);
    }
    return Array.from(set).sort();
  }, [talks]);

  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered =
    activeTag === "All" ? talks : talks.filter((talk) => talk.tags.includes(activeTag));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setActiveTag("All")}>
          <Tag label="All" className={activeTag === "All" ? "text-accent border-accent/40" : ""} />
        </button>
        {tags.map((tag) => (
          <button key={tag} type="button" onClick={() => setActiveTag(tag)}>
            <Tag label={tag} className={activeTag === tag ? "text-accent border-accent/40" : ""} />
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((talk) => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </div>
  );
}

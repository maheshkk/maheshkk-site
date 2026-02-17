export type Talk = {
  id: string;
  title: string;
  event: string;
  date: string;
  tags: string[];
  takeaways: string[];
  youtubeId: string | null;
  url: string | null;
  featured: boolean;
};

export type Note = {
  id: string;
  text: string;
  url: string;
  source: "X" | "LinkedIn" | "YouTube" | "Other";
  date?: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  featured: boolean;
  draft: boolean;
  readingTime: string;
};

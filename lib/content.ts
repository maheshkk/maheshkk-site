import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Note, PostMeta, Talk } from "@/lib/types";
import talksData from "@/data/talks.json";
import notesData from "@/data/notes.json";

const thoughtsDir = path.join(process.cwd(), "content", "thoughts");

type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  featured: boolean;
  draft: boolean;
};

function getMdxFilenames(): string[] {
  return fs.readdirSync(thoughtsDir).filter((name) => name.endsWith(".mdx"));
}

function parsePostFromFile(filename: string): PostMeta {
  const fullPath = path.join(thoughtsDir, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;

  return {
    slug: filename.replace(/\.mdx$/, ""),
    title: fm.title,
    date: fm.date,
    tags: fm.tags ?? [],
    summary: fm.summary,
    featured: Boolean(fm.featured),
    draft: Boolean(fm.draft),
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): PostMeta[] {
  return getMdxFilenames()
    .map(parsePostFromFile)
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getFeaturedPosts(limit = 3): PostMeta[] {
  return getAllPosts().filter((p) => p.featured).slice(0, limit);
}

export function getPostBySlug(slug: string): PostMeta | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export async function getPostContent(slug: string) {
  const filePath = path.join(thoughtsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const compiled = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    frontmatter: data as Frontmatter,
    content: compiled.content,
    readingTime: readingTime(content).text,
  };
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) set.add(tag);
  }
  return Array.from(set).sort();
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const allPosts = getAllPosts();
  const base = allPosts.find((p) => p.slug === slug);
  if (!base) return [];

  return allPosts
    .filter((p) => p.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((t) => base.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function getTalks(): Talk[] {
  return (talksData as Talk[]).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getFeaturedTalks(limit = 3): Talk[] {
  return getTalks().filter((talk) => talk.featured).slice(0, limit);
}

export function getNotes(limit = 6): Note[] {
  return (notesData as Note[])
    .sort((a, b) => +new Date(b.date ?? "1970-01-01") - +new Date(a.date ?? "1970-01-01"))
    .slice(0, limit);
}

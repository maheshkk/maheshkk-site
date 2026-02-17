import { site } from "@/data/site";

export function formatDate(input: string): string {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${clean}`;
}

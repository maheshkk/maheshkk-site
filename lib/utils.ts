export function formatDate(input: string): string {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://maheshkk.com"}${clean}`;
}

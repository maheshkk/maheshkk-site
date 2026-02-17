import { getAllPosts } from "@/lib/content";
import { site } from "@/data/site";

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${site.domain}/thoughts/${post.slug}</link>
          <guid>${site.domain}/thoughts/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.summary}]]></description>
        </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${site.name} - Thoughts</title>
      <link>${site.domain}</link>
      <description>${site.seo.description}</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

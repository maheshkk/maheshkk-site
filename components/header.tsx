import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/talks", label: "Talks" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-black/5">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 sm:py-5">
          <Link href="/" className="text-sm font-medium tracking-tight text-ink">
            {site.name}
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
            <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ink/70 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </header>
  );
}

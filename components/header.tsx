"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#thoughts", label: "Thoughts" },
  { href: "/#talks", label: "Talks" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold leading-5 tracking-tight text-ink">
            {site.name}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm leading-5">
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

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink/70 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-nav" className="border-t border-black/5 py-4 md:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-3 text-sm leading-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-ink/75 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <SocialLinks className="mt-4" />
          </div>
        ) : null}
      </Container>
    </header>
  );
}

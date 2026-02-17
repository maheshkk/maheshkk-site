import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 py-12">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
          <p>(c) {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-ink">Subscribe</Link>
            {site.contact.showEmailPublicly ? (
              <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                Email
              </a>
            ) : null}
            <Link href="/talks" className="hover:text-ink">Talks</Link>
            <SocialLinks compact />
          </div>
        </div>
      </Container>
    </footer>
  );
}

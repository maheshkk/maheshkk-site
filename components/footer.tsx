import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 py-12">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
          <p>(c) {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-ink">Subscribe</Link>
            <Link href="/contact" className="hover:text-ink">Email</Link>
            <Link href="/talks" className="hover:text-ink">Talks</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

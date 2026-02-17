import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mahesh Kulkarni for speaking, collaboration, or conversation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-medium tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-ink/70 leading-8">
          Building something AI-native, planning a talk, or redesigning product workflows? Reach
          out and I will respond as soon as possible.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm text-ink/75">
          {site.contact.showEmailPublicly ? (
            <p>
              Email:{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          ) : null}
          {site.socials.linkedin ? (
            <p>
              LinkedIn:{" "}
              <a className="text-accent hover:underline" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                Open profile
              </a>
            </p>
          ) : null}
        </div>
        <ContactForm />
      </section>
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

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
        <p className="mt-3 max-w-2xl text-ink/70">
          For talks, collaboration, or thoughtful conversations: use the form below or email me
          directly.
        </p>
        <ContactForm />
      </section>
    </Container>
  );
}

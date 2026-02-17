import { site } from "@/data/site";

export function NewsletterForm() {
  const action = site.contact.email ? `mailto:${site.contact.email}` : "mailto:hello@maheshkk.com";

  return (
    <form className="mt-5 flex flex-col gap-3 sm:flex-row" action={action} method="post">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none ring-accent/40 transition focus:ring"
      />
      <button
        type="submit"
        className="rounded-xl bg-ink px-5 py-2.5 text-sm text-white transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Subscribe
      </button>
    </form>
  );
}

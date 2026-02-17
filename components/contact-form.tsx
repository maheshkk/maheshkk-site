"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
      company: String(form.get("company") ?? ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "success" : "error");
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-2xl space-y-4">
      <input
        name="company"
        type="text"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label className="mb-1 block text-sm text-ink/75" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none ring-accent/40 focus:ring"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ink/75" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none ring-accent/40 focus:ring"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ink/75" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm outline-none ring-accent/40 focus:ring"
        />
      </div>
      <button
        disabled={status === "loading"}
        className="rounded-xl bg-ink px-5 py-2.5 text-sm text-white disabled:opacity-70"
        type="submit"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      <p className="text-sm text-ink/65">
        Prefer email?{" "}
        <a className="text-accent hover:underline" href="mailto:hello@maheshkk.com">
          hello@maheshkk.com
        </a>
      </p>
      {status === "success" ? <p className="text-sm text-accent">Thanks, message received.</p> : null}
      {status === "error" ? <p className="text-sm text-red-700">Something went wrong. Please email directly.</p> : null}
    </form>
  );
}

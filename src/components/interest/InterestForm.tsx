"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/travis@aurapathai.com";

export function InterestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Session Interest — ${data.get("company")} (${data.get("name")})`,
          _template: "table",
          Name: data.get("name"),
          Email: data.get("email"),
          Company: data.get("company"),
          "Team Size": data.get("team_size"),
          "Interested In": data.get("interest"),
          Bottleneck: data.get("bottleneck") || "Not specified",
          Source: "claudeoc.com/interest (presentation QR)",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-olive/20 bg-olive/5 p-8 text-center dark:border-emerald-400/20 dark:bg-emerald-400/5">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-content rounded-full bg-olive/10 dark:bg-emerald-400/10">
          <svg
            className="mx-auto h-6 w-6 text-olive dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-sans text-lg font-semibold text-slate-dark dark:text-cream">
          Got it.
        </h3>
        <p className="mt-2 font-serif text-sm text-slate-light dark:text-stone-300">
          I&apos;ll follow up personally within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="if-name"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Name
          </label>
          <input
            id="if-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
        <div>
          <label
            htmlFor="if-email"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Email
          </label>
          <input
            id="if-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="if-company"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Company / Role
          </label>
          <input
            id="if-company"
            name="company"
            type="text"
            required
            placeholder="Acme Corp, VP Engineering"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
        <div>
          <label
            htmlFor="if-size"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Team Size
          </label>
          <select
            id="if-size"
            name="team_size"
            required
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:focus:border-clay"
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="if-interest"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
        >
          I&apos;m interested in...
        </label>
        <select
          id="if-interest"
          name="interest"
          required
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:focus:border-clay"
        >
          <option value="" disabled>
            Select one...
          </option>
          <option value="eng-training">Engineering team training</option>
          <option value="pm-training">Product / PM team training</option>
          <option value="org-training">Org-wide AI adoption</option>
          <option value="case-study">Becoming a case study</option>
          <option value="community">Joining Claude OC community</option>
          <option value="just-connect">Just staying in touch</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="if-bottleneck"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
        >
          Biggest bottleneck on your team right now?
        </label>
        <textarea
          id="if-bottleneck"
          name="bottleneck"
          rows={3}
          placeholder="e.g. PR review takes too long, PMs can't prototype, manual reporting..."
          className="w-full resize-none rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Show Interest"}
      </button>

      {status === "error" && (
        <p className="text-center font-serif text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try again or email{" "}
          <a href="mailto:travis@aurapathai.com" className="underline">
            travis@aurapathai.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

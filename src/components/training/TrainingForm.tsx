"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/travis@aurapathai.com";

export function TrainingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Build interest string from checkboxes
    const interests: string[] = [];
    if (data.get("claude_code")) interests.push("Claude Code");
    if (data.get("claude_cowork")) interests.push("Claude Cowork");
    const interest = interests.length > 0 ? interests.join(", ") : "Not specified";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Training Request — ${data.get("company")} (${data.get("name")})`,
          _template: "table",
          Name: data.get("name"),
          Email: data.get("email"),
          Company: data.get("company"),
          Role: data.get("role"),
          "Team Size": data.get("team_size"),
          "Interested In": interest,
          "Goals": data.get("goals") || "Not specified",
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
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 dark:bg-emerald-400/10">
          <svg
            className="h-6 w-6 text-olive dark:text-emerald-400"
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
          Request received
        </h3>
        <p className="mt-2 font-serif text-sm text-slate-light dark:text-stone-300">
          I&apos;ll review your submission and reach out within 48 hours to
          discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="tf-name"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Name
          </label>
          <input
            id="tf-name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
        <div>
          <label
            htmlFor="tf-email"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Work Email
          </label>
          <input
            id="tf-email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="tf-company"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Company
          </label>
          <input
            id="tf-company"
            name="company"
            type="text"
            required
            placeholder="Acme Corp"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
        <div>
          <label
            htmlFor="tf-role"
            className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
          >
            Your Role
          </label>
          <input
            id="tf-role"
            name="role"
            type="text"
            required
            placeholder="VP of Engineering"
            className="w-full rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="tf-size"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
        >
          Team Size
        </label>
        <select
          id="tf-size"
          name="team_size"
          required
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:focus:border-clay"
        >
          <option value="" disabled>
            Select team size
          </option>
          <option value="10-25">10–25</option>
          <option value="25-50">25–50</option>
          <option value="50-100">50–100</option>
          <option value="100-500">100–500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="tf-goals"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted"
        >
          What are you hoping to solve?
        </label>
        <textarea
          id="tf-goals"
          name="goals"
          rows={3}
          placeholder="e.g. Our sales team spends hours on proposals, we want to automate internal reporting, we're evaluating AI tools for engineering..."
          className="w-full resize-none rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
        />
      </div>

      <fieldset>
        <legend className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-slate-light dark:text-muted">
          Interested In
        </legend>
        <div className="flex flex-wrap gap-4">
          <label className="flex cursor-pointer items-center gap-2.5 font-sans text-sm text-slate-dark dark:text-cream">
            <input
              type="checkbox"
              name="claude_code"
              value="1"
              className="h-4 w-4 rounded border-slate-dark/20 accent-clay dark:border-white/20"
            />
            Claude Code
          </label>
          <label className="flex cursor-pointer items-center gap-2.5 font-sans text-sm text-slate-dark dark:text-cream">
            <input
              type="checkbox"
              name="claude_cowork"
              value="1"
              className="h-4 w-4 rounded border-slate-dark/20 accent-clay dark:border-white/20"
            />
            Claude Cowork
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-clay px-7 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Request a Session"}
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

"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/travis@aurapathai.com";

const REPOS = [
  {
    name: "Impeccable",
    author: "pbakaus/impeccable",
    stars: "19.5K",
    url: "https://github.com/pbakaus/impeccable",
    install: "npx skills add pbakaus/impeccable",
    description:
      "The design skill that kills AI slop. Automatic audits, polish, normalize — makes every frontend output production-grade.",
    color: "#D97757",
    tag: "Design · Frontend · UI Quality",
  },
  {
    name: "Superpowers",
    author: "obra/superpowers",
    stars: "154K",
    url: "https://github.com/obra/superpowers",
    install: "npx skills add obra/superpowers",
    description:
      "Agentic dev methodology that works. TDD, debugging, planning, code review, parallel agents — the full workflow.",
    color: "#788C5D",
    tag: "Engineering · Workflows · Dev",
  },
  {
    name: "skills.sh",
    author: "Vercel Labs",
    stars: "261 skills",
    url: "https://skills.sh",
    install: "npx skills add <owner/repo>",
    description:
      "The open agent skills directory. Browse, discover, install with one command. Works with Claude Code, Cursor, Copilot, and more.",
    color: "#6A9BCC",
    tag: "Directory · Discovery · All Agents",
  },
];

export function ResourceGate() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "unlocked" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Resources Download — ${data.get("email")}`,
          _template: "table",
          Email: data.get("email"),
          Source: "claudeoc.com/resources (presentation QR)",
        }),
      });

      if (res.ok) {
        setStatus("unlocked");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status !== "unlocked") {
    return (
      <div>
        {/* Preview cards (locked state) */}
        <div className="space-y-4 opacity-60">
          {REPOS.map((repo) => (
            <div
              key={repo.name}
              className="rounded-xl border border-slate-dark/10 bg-white p-5 dark:border-white/10 dark:bg-stone-800"
              style={{ borderLeftWidth: 3, borderLeftColor: repo.color }}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-sans text-lg font-bold text-slate-dark dark:text-cream">
                  {repo.name}
                </h3>
                <span className="font-sans text-xs text-slate-light dark:text-muted">
                  {repo.author} · {repo.stars} ★
                </span>
              </div>
              <p className="mt-1 font-serif text-sm text-slate-light dark:text-stone-300">
                {repo.description}
              </p>
            </div>
          ))}
        </div>

        {/* Email gate */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex gap-3"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-lg border border-slate-dark/10 bg-white px-4 py-3 font-sans text-sm text-slate-dark outline-none transition-colors placeholder:text-cloud-medium focus:border-clay dark:border-white/10 dark:bg-stone-800 dark:text-cream dark:placeholder:text-muted dark:focus:border-clay"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-clay px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent disabled:opacity-60"
          >
            {status === "sending" ? "..." : "Get Access"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 font-serif text-sm text-red-600 dark:text-red-400">
            Something went wrong. Try again or visit the repos directly.
          </p>
        )}
      </div>
    );
  }

  // Unlocked state — show full cards with links
  return (
    <div className="space-y-4">
      <div className="mb-6 rounded-xl border border-olive/20 bg-olive/5 p-4 text-center dark:border-emerald-400/20 dark:bg-emerald-400/5">
        <p className="font-sans text-sm font-semibold text-olive dark:text-emerald-400">
          ✓ Unlocked — here are your repos
        </p>
      </div>

      {REPOS.map((repo) => (
        <div
          key={repo.name}
          className="rounded-xl border border-slate-dark/10 bg-white p-5 dark:border-white/10 dark:bg-stone-800"
          style={{ borderLeftWidth: 3, borderLeftColor: repo.color }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="font-sans text-lg font-bold text-slate-dark dark:text-cream">
                {repo.name}
              </h3>
              <span className="font-sans text-xs text-slate-light dark:text-muted">
                {repo.author} · {repo.stars} ★
              </span>
            </div>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-clay/10 px-4 py-2 font-sans text-xs font-semibold text-clay transition-colors hover:bg-clay/20"
            >
              Open →
            </a>
          </div>
          <p className="mt-1 font-serif text-sm text-slate-light dark:text-stone-300">
            {repo.description}
          </p>
          <div className="mt-3 rounded-lg bg-slate-dark/5 px-3 py-2 dark:bg-white/5">
            <code className="font-mono text-xs text-slate-dark dark:text-cream">
              {repo.install}
            </code>
          </div>
          <p className="mt-2 font-sans text-xs text-cloud-dark">
            {repo.tag}
          </p>
        </div>
      ))}
    </div>
  );
}

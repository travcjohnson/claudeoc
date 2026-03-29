import { SectionHeader } from "@/components/shared/SectionHeader";

const credentials = [
  "Anthropic AI Ambassador (1 of 50 globally)",
  "Duke University AI Certificate",
  "Co-founder, AuraPath AI \u2014 AI strategy consulting",
  "10 years product management (e-commerce, CPG, HR tech)",
  "70,000 prompts \u00b7 100+ projects \u00b7 daily Claude power user",
];

export function TrainerBackground() {
  return (
    <section className="bg-ivory-light py-24 lg:py-32">
      <div className="mx-auto max-w-[89.5rem] px-6 lg:px-10">
        <SectionHeader title="My Background" />
        <div className="max-w-2xl">
          <ul className="flex flex-col gap-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 font-serif text-base leading-relaxed text-slate-light"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {c}
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 rounded-xl border-l-4 border-clay bg-white px-6 py-5">
            <p className="font-serif text-base italic leading-relaxed text-slate-medium">
              &ldquo;When something unlocks you, you overflow with joy and
              can&apos;t keep it to yourself.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

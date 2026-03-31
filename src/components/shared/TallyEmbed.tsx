"use client";

import { useEffect, useRef } from "react";

interface TallyEmbedProps {
  formId: string;
  placeholder?: boolean;
  placeholderText?: string;
  title?: string;
}

export function TallyEmbed({ formId, placeholder, placeholderText, title }: TallyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [placeholder]);

  if (placeholder) {
    return (
      <div className="rounded-xl border-2 border-dashed border-clay/30 bg-clay/5 p-8 text-center dark:border-clay/20 dark:bg-clay/5">
        <div className="inline-flex items-center gap-2 rounded-full bg-clay/10 px-3 py-1 text-xs font-medium text-clay">
          Coming soon
        </div>
        <p className="mt-3 font-serif text-sm text-cloud-dark dark:text-muted">
          {placeholderText || "Form coming soon"}
        </p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
        loading="lazy"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title || "Application form"}
        className="rounded-xl"
      />
    </div>
  );
}

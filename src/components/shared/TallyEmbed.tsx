"use client";

interface TallyEmbedProps {
  formId: string;
  placeholder?: boolean;
  placeholderText?: string;
  title?: string;
}

export function TallyEmbed({ formId, placeholder, placeholderText, title }: TallyEmbedProps) {
  if (placeholder) {
    return (
      <div className="rounded-xl border-2 border-dashed border-clay/30 bg-clay/5 p-8 text-center dark:border-clay/20 dark:bg-clay/5">
        <div className="inline-flex items-center gap-2 rounded-full bg-clay/10 px-3 py-1 text-xs font-medium text-clay">
          Coming soon
        </div>
        <p className="mt-3 font-serif text-sm text-cloud-dark dark:text-cloud-light">
          {placeholderText || "Form coming soon"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <iframe
        src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        frameBorder="0"
        title={title || "Application form"}
        className="rounded-xl"
        style={{ border: "none" }}
      />
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-dark/10 bg-white p-6 dark:border-white/6 dark:bg-stone-900/50 dark:backdrop-blur-xl ${
        hover ? "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-none dark:hover:bg-stone-900/70 dark:hover:border-clay/20" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

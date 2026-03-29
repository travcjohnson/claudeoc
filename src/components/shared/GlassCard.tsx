interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-dark/10 bg-white p-6 dark:glass ${
        hover ? "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:glass-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function GlassPanel({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-3xl border backdrop-blur-xl",
        "bg-white/10 border-white/20",
        "shadow-[0_20px_80px_-30px_rgba(0,0,0,0.65)]",
        "dark:bg-slate-900/25 dark:border-white/10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function IconButton({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-white/12 bg-white/8 backdrop-blur-xl",
        "hover:bg-white/12 active:scale-[0.98] transition",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
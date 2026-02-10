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
        "rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
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
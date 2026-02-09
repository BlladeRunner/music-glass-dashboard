export default function GlassCard({ className = "", children }) {
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
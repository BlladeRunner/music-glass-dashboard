export default function ToggleTheme({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="
        group inline-flex items-center gap-3 rounded-full border border-white/20
        bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-xl
        hover:bg-white/15 active:scale-[0.99] transition
      "
      aria-label="Toggle theme"
    >
      {/* Track */}
      <span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/20 bg-white/10">
        {/* Knob */}
        <span
          className={[
            "absolute left-0.5 top-0.5 grid h-5 w-5 place-items-center rounded-full",
            "bg-white/90 text-slate-900 shadow",
            "transition-transform duration-200 ease-out",
            isDark ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        >
          <span className="text-[11px] leading-none">
            {isDark ? "🌙" : "☀️"}
          </span>
        </span>
      </span>

      <span className="select-none font-medium">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
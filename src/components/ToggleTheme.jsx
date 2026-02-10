export default function ToggleTheme({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className="
        group inline-flex items-center gap-3 rounded-full border border-white/20
        bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-xl
        hover:bg-white/15 active:scale-[0.99] transition
      "
    >
      {/* Track */}
      <span className="relative h-6 w-11 rounded-full border border-white/20 bg-white/10 shadow-inner p-0.5 overflow-hidden">
        {/* Knob */}
        <span
          className={[
            "grid h-5 w-5 place-items-center rounded-full",
            "text-white",
            "transition-transform duration-200 ease-out",
            isDark ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        >
          <span className="text-[14px] leading-none">{isDark ? "🌙" : "☀️"}</span>
        </span>
      </span>
    </button>
  );
}
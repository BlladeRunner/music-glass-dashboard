import { useEffect, useMemo, useState } from "react";
import { GlassPanel, GlassCard, IconButton } from "./components/ui/Glass";

const THEME_KEY = "music-glass-theme";

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs backdrop-blur-xl hover:bg-white/12 transition"
    >
      <span className="relative h-6 w-11 rounded-full border border-white/12 bg-white/10 shadow-inner">
        <span
          className={[
            "absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full",
            "bg-white/70 shadow transition-all duration-200",
            value ? "left-[22px]" : "left-[2px]",
          ].join(" ")}
        />
      </span>
      {value ? "On" : "Off"}
    </button>
  );
}

import ThemeToggle from "./components/ToggleTheme";

export default function App() {
  const [showStats, setShowStats] = useState(true);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);

    root.style.colorScheme = isDark ? "dark" : "light";

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const stats = useMemo(
    () => [
      { label: "Elevation", value: "1,000 ft" },
      { label: "Distance", value: "7.4 miles" },
      { label: "Time", value: "3hr 15min" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-app">
      <div className="min-h-screen bg-white/25 dark:bg-black/35">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <GlassPanel className="p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-tight text-white/90">
                Glass Dashboard
              </div>

              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} onToggle={toggleTheme} />

                <Toggle value={showStats} onChange={setShowStats} />

                <IconButton aria-label="Share">↗</IconButton>
                <IconButton aria-label="Favorite">♡</IconButton>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <GlassCard className="lg:col-span-2 overflow-hidden">
                <div className="relative h-[320px]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <div className="text-xs text-white/70">Trail</div>
                    <div className="text-lg font-semibold text-white">
                      Eagle Ridge Loop
                    </div>
                    <div className="mt-1 text-[11px] text-white/60">
                      Summit Crest Road · Pinebrook, CO
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                    <span className="h-2 w-2 rounded-full bg-white/25" />
                    <span className="h-2 w-2 rounded-full bg-white/25" />
                  </div>
                </div>
              </GlassCard>

              {/* Right info card */}
              <GlassCard className="p-6">
                <div className="text-3xl font-semibold leading-tight text-white">
                  Trail: Eagle
                  <br />
                  Ridge Loop
                </div>

                <div className="mt-5 h-px w-full bg-white/10" />

                {showStats && (
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[11px] text-white/60">{s.label}</div>
                        <div className="mt-1 text-sm font-semibold text-white/90">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-5 text-sm text-white/70 leading-relaxed">
                  Eagle Ridge Loop is a scenic 7.4-mile trail featuring sweeping
                  ridge-top views. The moderate elevation gain and well-marked
                  path make it perfect for both casual hikers and adventure
                  seekers.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button className="rounded-full bg-sky-500/70 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500/85 transition">
                    Book a tour
                  </button>
                  <button className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/12 transition">
                    Preview trail
                  </button>
                </div>
              </GlassCard>

              {/* Bottom left chart-ish card */}
              <GlassCard className="p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">
                    Trail level{" "}
                    <span className="ml-2 rounded-full border border-white/14 bg-white/8 px-2 py-0.5 text-xs text-white/80">
                      4
                    </span>
                  </div>
                  <div className="text-xs text-white/60">Estimated time</div>
                </div>

                <div className="mt-5 h-[120px] rounded-2xl border border-white/10 bg-white/5 p-4">
                  <svg viewBox="0 0 300 80" className="h-full w-full">
                    <path
                      d="M10,55 C45,60 55,25 90,35 C125,45 135,10 165,20 C195,30 210,65 240,55 C265,48 275,35 290,40"
                      fill="none"
                      stroke="rgba(255,255,255,0.55)"
                      strokeWidth="2"
                    />
                    <circle cx="90" cy="35" r="4" fill="rgba(255,255,255,0.85)" />
                    <circle cx="165" cy="20" r="4" fill="rgba(56,189,248,0.95)" />
                    <text x="155" y="70" fontSize="10" fill="rgba(255,255,255,0.55)">
                      1,000 ft
                    </text>
                  </svg>
                </div>
              </GlassCard>

              {/* Bottom right profile card */}
              <GlassCard className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/15" />
                  <div>
                    <div className="text-sm font-semibold text-white/90">
                      Ryan Carter
                    </div>
                    <div className="text-[11px] text-white/60">@ryanrunswild</div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <IconButton aria-label="Share profile">⤴</IconButton>
                    <IconButton aria-label="Settings">⚙</IconButton>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <div>
                    <div className="text-xs text-white/60">Miles</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">
                      164.2
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Elevation</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">
                      2496 ft
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Followers</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">
                      511
                    </div>
                  </div>
                </div>

                <button className="mt-4 text-xs text-white/65 hover:text-white/85 transition">
                  Edit profile ✎
                </button>
              </GlassCard>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
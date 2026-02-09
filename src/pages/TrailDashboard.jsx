import GlassCard from "../components/GlassCard";

const stats = [
  { label: "Elevation", value: "1,000 ft" },
  { label: "Distance", value: "7.4 miles" },
  { label: "Time", value: "3hr 15 min" },
];

export default function TrailDashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      {/* Outer shell */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT: big media */}
          <GlassCard className="lg:col-span-7 overflow-hidden">
            <div className="relative h-[340px] w-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

              <div className="relative p-6">
                <div className="text-sm text-white/80">Eagle Ridge Loop</div>
                <div className="mt-1 text-xs text-white/60">
                  Summit Crest Road · Pinebrook, CO
                </div>
              </div>

              {/* dots */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
            </div>
          </GlassCard>

          {/* RIGHT: info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="text-xs text-white/70 dark:text-white/60">
                Trail
              </div>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white dark:text-white">
                Eagle Ridge Loop
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/70 dark:text-white/60">
                A scenic 7.4-mile trail featuring sweeping ridge-top views,
                frequent wildlife sightings, and stunning vistas. Moderate
                elevation gain and a well-marked path.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <GlassCard key={s.label} className="p-4">
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {s.value}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-white">
                Book a tour
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15">
                Preview trail
              </button>

              <button
                className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/15"
                aria-label="Like"
              >
                ♡
              </button>
            </div>
          </div>

          {/* Bottom left: mini chart */}
          <GlassCard className="lg:col-span-8 p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">Trail level</div>
              <div className="text-xs text-white/60">Estimated time</div>
            </div>

            <div className="mt-4 h-[120px] w-full rounded-2xl border border-white/15 bg-white/5 p-4">
              {/* simple “chart” placeholder */}
              <div className="relative h-full">
                <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
                <div className="absolute left-4 top-[70%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute left-20 top-[60%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute left-40 top-[45%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute left-64 top-[35%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute left-[80%] top-[55%] h-2 w-2 rounded-full bg-sky-300" />
                <div className="absolute bottom-1 left-4 text-[10px] text-white/60">
                  1,000 ft
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Bottom right: profile */}
          <GlassCard className="lg:col-span-4 p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Ryan Carter
                </div>
                <div className="text-xs text-white/60">@ryannunswild</div>
              </div>
              <button className="ml-auto text-white/70 hover:text-white">
                ⋯
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
                <div className="text-xs text-white/60">Miles</div>
                <div className="mt-1 text-lg font-semibold text-white">164.2</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
                <div className="text-xs text-white/60">Elevation</div>
                <div className="mt-1 text-lg font-semibold text-white">2496 ft</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
                <div className="text-xs text-white/60">Followers</div>
                <div className="mt-1 text-lg font-semibold text-white">511</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <button className="hover:text-white">Edit profile</button>
              <button className="hover:text-white">⚙</button>
            </div>
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  );
}
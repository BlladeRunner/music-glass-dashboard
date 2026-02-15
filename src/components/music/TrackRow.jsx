import { formatTime } from "../../app/usePlayer";

export default function TrackRow({ t, active, isPlaying, onPick }) {
  const accent = "rgb(34,197,94)";

  return (
    <button
      onClick={() => onPick(t.id)}
      className={[
        "relative w-full rounded-2xl px-3 py-2 text-left transition-all duration-300",
        active
          ? "bg-white/15 shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-md"
          : "hover:bg-white/10",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          {active && isPlaying && (
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-70"
              style={{ backgroundColor: accent }}
            />
          )}

          <img
            src={t.cover}
            alt=""
            className={[
              "relative h-10 w-10 rounded-3xl object-cover transition-all duration-500",
              active && isPlaying ? "animate-spin [animation-duration:8s]" : "",
              active ? "scale-105" : "",
            ].join(" ")}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className={[
              "truncate text-sm font-semibold transition-colors duration-300",
              active ? "text-white" : "text-white/90",
            ].join(" ")}
          >
            {t.title}
          </div>
          <div className="truncate text-xs text-white/55">
            {t.artist} • {t.album}
          </div>
        </div>

        <div className="w-12 flex justify-end">
          {active && isPlaying ? (
            <div className="flex items-end gap-[3px] h-5">
              <span
                className="w-[3px] rounded-full animate-bounce"
                style={{ backgroundColor: accent }}
              />
              <span
                className="w-[3px] rounded-full animate-bounce [animation-delay:0.2s]"
                style={{ backgroundColor: accent }}
              />
              <span
                className="w-[3px] rounded-full animate-bounce [animation-delay:0.4s]"
                style={{ backgroundColor: accent }}
              />
            </div>
          ) : (
            <div className="text-xs text-white/55">{formatTime(t.duration)}</div>
          )}
        </div>
      </div>
    </button>
  );
}
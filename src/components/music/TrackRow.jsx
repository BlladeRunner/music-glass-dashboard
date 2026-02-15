import { formatTime } from "../../app/usePlayer";

export default function TrackRow({ t, active, isPlaying, onPick }) {
  return (
    <button
      onClick={() => onPick(t.id)}
      className={[
        "relative w-full rounded-2xl px-3 py-2 text-left",
        "transition-all duration-300 ease-out",
        "hover:translate-x-1",
        active
          ? "bg-white/15 shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-md"
          : "hover:bg-white/10",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        {/* COVER */}
        <img
          src={t.cover}
          alt=""
          className={[
            "h-10 w-10 rounded-xl object-cover transition-all duration-500",
            active && isPlaying ? "animate-pulseSoft" : "",
            active ? "scale-105" : "",
          ].join(" ")}
        />

        {/* TEXT */}
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

        {/* RIGHT SIDE */}
        <div className="w-12 flex justify-end">
          {active ? (
            isPlaying ? (
              <div className="flex items-end gap-[3px] h-5">
                <span className="w-[3px] bg-emerald-400 rounded-full animate-equalize"></span>
                <span className="w-[3px] bg-emerald-400 rounded-full animate-equalize [animation-delay:0.2s]"></span>
                <span className="w-[3px] bg-emerald-400 rounded-full animate-equalize [animation-delay:0.4s]"></span>
              </div>
            ) : (
              <div className="text-xs text-white/70">
                {formatTime(t.duration)}
              </div>
            )
          ) : (
            <div className="text-xs text-white/55">
              {formatTime(t.duration)}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

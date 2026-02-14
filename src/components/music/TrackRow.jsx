import { formatTime } from "../../app/usePlayer";

export default function TrackRow({ t, active, onPick }) {
  return (
    <button
      onClick={() => onPick(t.id)}
      className={[
        "w-full rounded-2xl px-3 py-2 text-left transition",
        active ? "bg-white/14" : "hover:bg-white/8",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <img src={t.cover} alt="" className="h-10 w-10 rounded-xl object-cover" />

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-white/90">{t.title}</div>
          <div className="truncate text-xs text-white/55">{t.artist} • {t.album}</div>
        </div>

        <div className="w-12 text-right text-xs text-white/55">
          {formatTime(t.duration)}
        </div>
      </div>
    </button>
  );
}
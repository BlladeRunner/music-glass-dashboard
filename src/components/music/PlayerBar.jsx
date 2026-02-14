import { GlassPanel } from "../ui/Glass";
import { formatTime } from "../../app/usePlayer";

export default function PlayerBar({
  track,
  isPlaying,
  onToggle,
  onPrev,
  onNext,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolume,
}) {
  if (!track) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-6">
      <div className="mx-auto max-w-6xl">
        <GlassPanel className="px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <img src={track.cover} alt="" className="h-11 w-11 rounded-2xl object-cover" />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-white/90">{track.title}</div>
                <div className="truncate text-xs text-white/60">{track.artist}</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button onClick={onPrev} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs hover:bg-white/12 transition">⟵</button>
              <button onClick={onToggle} className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs hover:bg-white/14 transition">
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button onClick={onNext} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs hover:bg-white/12 transition">⟶</button>
            </div>

            <div className="hidden w-[420px] items-center gap-3 lg:flex">
              <div className="w-10 text-right text-xs text-white/60">{formatTime(currentTime)}</div>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={Math.min(duration || 0, currentTime)}
                onChange={(e) => onSeek(Number(e.target.value))}
                className="w-full accent-white/70"
              />
              <div className="w-10 text-xs text-white/60">{formatTime(duration)}</div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <div className="text-xs text-white/60">🔊</div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => onVolume(Number(e.target.value))}
                className="w-24 accent-white/70"
              />
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
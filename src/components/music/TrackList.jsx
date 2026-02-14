import { GlassCard } from "../ui/Glass";
import TrackRow from "./TrackRow";

export default function TrackList({ tracks, currentId, onPick }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs text-white/55">Playlist</div>
          <div className="mt-1 text-lg font-semibold text-white/90">Daily Mix</div>
        </div>
        <div className="text-xs text-white/55">{tracks.length} songs</div>
      </div>

      <div className="mt-4 space-y-2">
        {tracks.map((t) => (
          <TrackRow
            key={t.id}
            t={t}
            active={t.id === currentId}
            onPick={onPick}
          />
        ))}
      </div>
    </GlassCard>
  );
}
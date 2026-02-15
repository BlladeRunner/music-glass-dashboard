import TrackRow from "./TrackRow";

export default function TrackList({ tracks, currentId, isPlaying, onPick }) {
  return (
    <div className="flex flex-col gap-2">
      {tracks.map((t) => (
        <TrackRow
          key={t.id}
          t={t}
          active={t.id === currentId}
          isPlaying={isPlaying && t.id === currentId}
          onPick={onPick}
        />
      ))}
    </div>
  );
}
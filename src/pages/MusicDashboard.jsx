import { useEffect, useState } from "react";
import { tracks } from "../data/tracks";
import { usePlayer } from "../app/usePlayer";

import { GlassPanel, GlassCard } from "../components/ui/Glass";
import TrackList from "../components/music/TrackList";
import PlayerBar from "../components/music/PlayerBar";
import ToggleTheme from "../components/ui/ToggleTheme.jsx";

const THEME_KEY = "glass-music-theme";

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function MusicDashboard() {
  const {
    audioRef,
    track,
    isPlaying,
    togglePlay,
    prev,
    next,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    setTrackById,
    play,
  } = usePlayer(tracks);

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-app">
      <div className="min-h-screen bg-black/35 text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 pb-28">
          <GlassPanel className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">Glass Music</div>

              <ToggleTheme
                theme={theme}
                onToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <GlassCard className="overflow-hidden">
                  <div className="relative h-[380px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url("${track?.cover}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                    <div className="absolute left-5 top-5">
                      <div className="text-xs text-white/70">Now playing</div>
                      <div className="mt-1 text-2xl font-semibold text-white">
                        {track?.title}
                      </div>
                      <div className="mt-1 text-sm text-white/70">{track?.artist}</div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="lg:col-span-7">
                <TrackList
                  tracks={tracks}
                  currentId={track?.id}
                  onPick={(id) => {
                    setTrackById(id);
                    play();
                  }}
                />
              </div>
            </div>

            <audio ref={audioRef} />
          </GlassPanel>
        </div>

        <PlayerBar
          track={track}
          isPlaying={isPlaying}
          onToggle={togglePlay}
          onPrev={prev}
          onNext={next}
          currentTime={currentTime}
          duration={duration}
          onSeek={seek}
          volume={volume}
          onVolume={setVolume}
        />
      </div>
    </div>
  );
}
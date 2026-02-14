import { useEffect, useRef, useState, useCallback } from "react";

export function usePlayer(tracks = []) {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1 >= tracks.length ? 0 : i + 1));
  }, [tracks.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 < 0 ? tracks.length - 1 : i - 1));
  }, [tracks.length]);

  const togglePlay = () => setIsPlaying((p) => !p);
  const play = () => setIsPlaying(true);

  const seek = (time) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const setTrackById = (id) => {
    const idx = tracks.findIndex((t) => t.id === id);
    if (idx >= 0) setCurrentIndex(idx);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !tracks[currentIndex]) return;
    audio.src = tracks[currentIndex].src;
    audio.load();
    if (isPlaying) audio.play();
  }, [currentIndex, tracks, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => next();

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [next]);

  return {
    audioRef,
    currentIndex,
    track: tracks[currentIndex],
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    play,
    next,
    prev,
    seek,
    volume,
    setVolume,
    setCurrentIndex,
    setTrackById,
  };
}

export const formatTime = (s = 0) => {
  if (!s || Number.isNaN(s)) return "0:00";
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  const min = Math.floor(s / 60);
  return `${min}:${sec}`;
};

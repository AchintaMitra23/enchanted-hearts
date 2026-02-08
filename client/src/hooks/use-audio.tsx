import { useEffect, createContext, useContext, ReactNode } from "react";
import DEFAULT_AUDIO_SRC from "../../public/Die-With-A-Smile.wav";

const AudioContext = createContext<{
  isPlaying: boolean;
  toggle: () => void;
} | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const isPlaying = false;
  const audio = new Audio(DEFAULT_AUDIO_SRC);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";
  }, []);

  const toggle = async () => {
    await audio.play();
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider");
  return ctx;
}

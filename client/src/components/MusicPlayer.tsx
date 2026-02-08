import { useAudio } from "@/hooks/use-audio";

export function MusicPlayer() {
  const { isPlaying } = useAudio();

  return <>{isPlaying}</>;
}

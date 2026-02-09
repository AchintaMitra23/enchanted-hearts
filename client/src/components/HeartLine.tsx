import { Heart } from "lucide-react";
import React from "react";

export default function HeartLine() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-rose-300" />
      <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-rose-300" />
      <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-rose-300" />
    </div>
  );
}

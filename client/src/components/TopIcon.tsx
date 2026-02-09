import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import React from "react";

export default function TopIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex items-center gap-2 sm:gap-3"
    >
      <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-200" />
      <div className="h-px w-5 sm:w-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-200" />
      <div className="h-px w-5 sm:w-10 bg-gradient-to-l from-transparent via-red-500 to-transparent" />
      <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-200" />
    </motion.div>
  );
}

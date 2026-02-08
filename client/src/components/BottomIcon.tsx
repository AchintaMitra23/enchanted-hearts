import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import React from "react";

const BottomIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex items-center gap-2"
    >
      <div className="h-px w-5 sm:w-15 bg-gradient-to-r from-transparent to-red-500" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-300" />
      <div className="h-px w-10 sm:w-15 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-300" />
      <div className="h-px w-10 sm:w-15 bg-gradient-to-l from-red-500 via-rose-500 to-pink-500" />
      <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-pink-300" />
      <div className="h-px w-5 sm:w-15 bg-gradient-to-l from-transparent to-red-500" />
    </motion.div>
  );
};

export default BottomIcon;

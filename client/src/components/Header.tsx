import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import React from "react";

interface HeaderProps {
  heading: string;
  subHeading: string;
}

export default function Header(props: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="text-center mb-10 space-y-5"
    >
      <motion.h1
        animate={{
          textShadow: [
            "0 0 15px rgba(244, 114, 182, 0.1)",
            "0 0 22px rgba(244, 114, 182, 0.15)",
            "0 0 15px rgba(244, 114, 182, 0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-purple-500 leading-tight px-8"
      >
        {props.heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-md text-white font-mono font-bold max-w-2xl mx-auto px-8"
      >
        {props.subHeading}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-center gap-2 mt-6"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="will-change-transform"
          >
            <Heart className="w-5 h-5 sm:w-5 sm:h-5 text-red-500 fill-amber-100" />
          </motion.div>
        ))}
      </motion.div>
    </motion.header>
  );
}

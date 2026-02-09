import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "wouter";

interface FooterProps {
  upperText: string;
  buttonText: string;
  lowerText: string;
  href: string;
}

export default function Footer(props: FooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center py-10 relative"
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-50 h-50 bg-gradient-to-br from-red-500 to-purple-500 rounded-full blur-[60px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 space-y-6 sm:space-y-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-handwriting text-lg text-red-500 px-8 font-bold"
        >
          {props.upperText}
        </motion.p>
        <br />
        <Link href={props.href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white rounded-full font-mono text-md shadow-xl shadow-red-300 overflow-hidden will-change-transform touch-manipulation font-bold"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/20 rounded-full"
            />

            <span className="relative flex items-center gap-2">
              {props.buttonText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="will-change-transform"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </Link>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-md text-gray-300 italic px-8 font-bold"
        >
          🥰 {props.lowerText} 🥰
        </motion.p>
      </div>
    </motion.div>
  );
}

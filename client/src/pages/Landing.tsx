import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useAudio } from "@/hooks/use-audio";
import { usePartner } from "@/hooks/use-partner";
import { useCallback } from "react";
import TopIcon from "@/components/TopIcon";
import BottomIcon from "@/components/BottomIcon";

export default function Landing() {
  const [, setLocation] = useLocation();
  const { toggle } = useAudio();
  const { name } = usePartner();

  const handleStart = useCallback(async () => {
    toggle();
    setLocation("/timeline");
  }, [toggle, setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-200/20 via-transparent to-transparent" />
      <motion.div className="z-10 flex flex-col items-center text-center space-y-8 sm:space-y-12 md:space-y-14 max-w-2xl will-change-transform">
        <TopIcon />

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.span className="font-mono text-lg text-pink-500 font-semibold">
            I've been carrying this in my heart for so long…
          </motion.span>

          <motion.div
            animate={{
              textShadow: [
                "0 0 15px rgba(244, 114, 182, 0.1)",
                "0 0 20px rgba(244, 114, 182, 0.15)",
                "0 0 15px rgba(244, 114, 182, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <h1
              className="font-mono text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-red-500 to-purple-600"
              style={{ height: "80px" }}
            >
              {name || "Kutus"}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-md text-rose-400 font-semibold italic">
              Every moment since you walked into my life,
              <br />
              <span className="text-red-400 italic">
                the universe feels a little more magical.
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Heart Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="relative group cursor-pointer"
            aria-label="Start the journey"
          >
            <div className="relative z-10 bg-gradient-to-br from-pink-500 via-red-500 to-purple-500 p-4 rounded-full shadow-xl transition-all duration-500">
              <motion.div className="will-change-transform">
                <div
                  className="w-20 h-20"
                  style={{ fontSize: "50px" }}
                >
                  🤍
                </div>
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-2 sm:space-y-3"
        >
          <p className="text-rose-400 font-mono font-semibold text-lg">
            Punch the heart, Start the journey
          </p>
        </motion.div>

        <BottomIcon />
      </motion.div>
    </div>
  );
}

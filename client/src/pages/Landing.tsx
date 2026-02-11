import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { usePartner } from "@/hooks/use-partner";
import TopIcon from "@/components/TopIcon";
import BottomIcon from "@/components/BottomIcon";
import { useEffect, useState } from "react";

export default function Landing() {
  const [, setLocation] = useLocation();
  let { name } = usePartner();
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    let index = 0;
    const typingSpeed = 200;

    if (name == undefined || name == null || name == "") {
      name = "Kutus";
    }

    const timer = setInterval(() => {
      if (index >= name.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
        return;
      }

      setDisplayedText(name.slice(0, index + 1));
      index++;
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [name]);

  const handleStart = () => {
    setLocation("/timeline");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-200/20 via-transparent to-transparent" />
      <motion.div className="z-10 flex flex-col items-center text-center space-y-12 max-w-2xl will-change-transform">
        <TopIcon />

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
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
            <h1 className="font-mono text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-red-500 to-purple-600">
              Hi Love,
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative"
          >
            <h1
              className="font-mono text-6xl sm:text-2xl md:text-4xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-red-500 to-purple-600"
              style={{ height: "110px" }}
            >
              {displayedText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 sm:h-6 md:h-7 bg-rose-400 ml-1"
                />
              )}
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
                <div className="w-20 h-20" style={{ fontSize: "50px" }}>
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

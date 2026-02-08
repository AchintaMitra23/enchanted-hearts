import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePartner } from "@/hooks/use-partner";
import solo10 from "../../public/Nil_Solo_1.jpg";
import HeartLine from "@/components/HeartLine";

export default function FinalNote() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { name, signature } = usePartner();

  const fullText =
    "Kutus, loving you is my favorite feeling—soft, deep, and endlessly beautiful. You are the calm in my heart, the warmth in my soul, and the love I choose with care, respect, and devotion, today and always.";
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    let index = 0;
    const typingSpeed = 35;

    const timer = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
        return;
      }

      setDisplayedText(fullText.slice(0, index + 1));
      index++;
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-rose-100/50 rounded-2xl shadow-2xl border-2 border-amber-200 p-6 relative overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative z-10 space-y-6 sm:space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              <motion.div className="inline-block">
                <img
                  src={solo10}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </motion.div>

              <HeartLine />

              <h1 className="font-handwriting text-2xl text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-red-700 to-purple-900">
                My Dearest {name || "Love"}
              </h1>

              <HeartLine />
            </motion.div>

            {/* Typing Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="relative"
            >
              <p
                className="font-handwriting text-lg text-gray-800 leading-relaxed sm:leading-loose text-center"
                style={{ lineHeight: "30px" }}
              >
                {displayedText}
                {!isTypingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 sm:h-6 md:h-7 bg-rose-400 ml-1"
                  />
                )}
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTypingComplete ? 1 : 0,
                y: isTypingComplete ? 0 : 20,
              }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-right space-y-3 sm:space-y-4 mt-3 mb-3"
            >
              <div className="flex items-center justify-end gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="will-change-transform"
                  >
                    💖
                  </motion.div>
                ))}
              </div>

              <p className="font-handwriting text-xl text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-red-700 to-purple-900 text-bold">
                Forever Yours <br /> {signature || "Love"}{" "}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Final floating message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isTypingComplete ? 1 : 0,
            y: isTypingComplete ? 0 : 20,
          }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-6 sm:mt-8 space-y-2 sm:space-y-3"
        >
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="font-handwriting text-lg text-red-400 font-bold"
          >
            🥰 Happy Valentine's Day 🥰
          </motion.p>
          <p className="text-md font-mono text-gray-300 italic">
            Made with love, just for you
          </p>
        </motion.div>
      </div>
    </div>
  );
}

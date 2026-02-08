import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Gift } from "lucide-react";
import request from "../../public/request.gif";
import together from "../../public/2020.jpg";

export default function SecretQuestion() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    const end = Date.now() + 5000;

    (function frame() {
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const surpriseQuestion =
    "Hey kutus, you’re the most beautiful gift my life has ever received… tell me honestly, am I your favorite gift too?";
  const noTexts = ["Don't click, No 😭", "Are you sure? No 😭"];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="w-full max-w-lg relative z-10"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer group mx-auto relative"
            >
              {/* Envelope container */}
              <div className="relative w-full max-w-sm mx-auto">
                <motion.div
                  transition={{ duration: 0.3 }}
                  className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden"
                  style={{ transformStyle: "preserve-3d", height: "225px" }}
                >
                  {/* Envelope pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      opacity: 0.25,
                    }}
                  >
                    <img src={together} />
                  </div>

                  {/* Center content area */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={handleOpen}
                  >
                    {/* Seal */}
                    <motion.div
                      animate={{
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative z-40 w-35 h-35 md:w-25 md:h-25 p-5 rounded-full flex items-center justify-center shadow-2xl border-2 border-pink-300 bg-gradient-to-br from-pink-500 via-red-500 to-purple-500 text-white"
                    >
                      <Gift className="w-35 h-35 md:w-25 md:h-25" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Tap to open text */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-8 text-center"
                >
                  <motion.div className="mt-5 flex justify-center">
                    👆👆👆
                  </motion.div>
                  <p className="font-mono text-lg text-bold text-pink-400 mt-3">
                    Tap to reach the end...
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="p-6 md:p-6 rounded-3xl shadow-2xl border-2 border-red-500 text-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-red-50"
            >
              <div className="absolute top-0 left-0 w-full h-2" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-8 flex justify-center relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="p-2 rounded-full shadow-lg relative bg-gradient-to-br from-amber-300 via-rose-300 to-red-300"
                >
                  <img src={request} width={150} className="rounded-full" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6 mb-10 relative z-10"
              >
                <p className="text-lg text-gray-700 leading-relaxed font-body px-4 text-bold">
                  {surpriseQuestion}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Link href="/final">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full px-4 py-4 text-black-800 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-green-500"
                  >
                    {" "}
                    <span className="relative flex items-center justify-center gap-2">
                      {count !== noTexts.length
                        ? "Please say, Yes 🥺"
                        : "Yay! Only option, Yes 🥰"}
                    </span>
                  </motion.button>
                </Link>
                {count !== noTexts.length && (
                  <button onClick={() => setCount(count + 1)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full px-4 py-4 text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-red-500"
                    >
                      {" "}
                      <span className="relative flex items-center justify-center gap-2">
                        {noTexts[count]}
                      </span>
                    </motion.button>
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

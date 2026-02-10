import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import request from "../../public/request.gif";
import sendEmail from "@/helper/EmailHelper";

export default function SecretQuestion() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const send = async () => {
      try {
        const message = await sendEmail();
        if (message != null) {
          setMsg(message);
        }
      } catch (err) {
        setMsg(String(err));
      }
    };
    send();
  }, []);

  const surpriseQuestion =
    "Kutus, you’re the most beautiful gift my life has ever received… tell me honestly, am I your favorite gift too?";
  const noTexts = ["Don't click, No 😭", "Are you sure? No 😭"];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="w-full max-w-lg relative z-10"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="p-6 md:p-6 rounded-3xl shadow-2xl border-2 border-red-500 text-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-red-50"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-3 mb-5 relative z-10"
            >
              <p className="text-lg text-pink-700 leading-relaxed font-body px-4 text-bold">
                {msg || "Love"}
              </p>
            </motion.div>
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
                className="p-1 rounded-full shadow-lg relative bg-gradient-to-br from-amber-300 via-rose-300 to-red-300"
              >
                <img src={request} width={125} className="rounded-full" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-3 mb-5 relative z-10"
            >
              <motion.a
                className="p-3 border-2 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-md text-white leading-relaxed font-body text-bold"
                download={true}
                href=""
              >
                🎁 Download Your Gift
              </motion.a>
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
              <motion.div>
                {count !== noTexts.length && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full px-4 py-4 text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-red-500"
                    onClick={() => setCount(count + 1)}
                  >
                    {" "}
                    <span className="relative flex items-center justify-center gap-2">
                      {noTexts[count]}
                    </span>
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

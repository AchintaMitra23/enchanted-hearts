import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useAudio } from "@/hooks/use-audio";

const SECRET_PASSWORD = "switzerland";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [lock, setLock] = useState(true);
  const [, setLocation] = useLocation();
  const { toggle } = useAudio();

  if (lock && password === SECRET_PASSWORD) {
    setLock(false);
  }

  if (!lock) {
    toggle();
    setLocation("/landing");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="w-full max-w-lg relative z-10"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="p-6 md:p-6 rounded-3xl shadow-2xl text-center relative overflow-hidden bg-image card-3d"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 my-5 relative z-10"
          >
            <p className="text-8xl">🔒</p>
            <p className="text-lg text-amber-400 leading-relaxed font-body px-4 text-bold">
              I've been carrying this in my heart for so long. This memories and
              journeys only for one heart. If that heart is yours, you already
              know the key.
              <br />
              <br />
              <span className="text-gray-400 font-mono italic text-sm">
                HINT: Place
              </span>
            </p>
          </motion.div>
          <motion.input
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            type="password"
            placeholder="Enter your place ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-3xl p-5 text-pink-600 font-semibold font-mono"
            style={{
              boxShadow: "0 0 2px 2px pink",
              outline: 0,
              border: 0,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

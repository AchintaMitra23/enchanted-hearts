import { useState } from "react";
import ValentineQNA from "./ValentineQNA";
import { motion } from "framer-motion";

const SECRET_PASSWORD = "switzerland";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [lock, setLock] = useState(true);

  if (lock && password === SECRET_PASSWORD) {
    setLock(false);
  }

  if (!lock) {
    return <ValentineQNA />;
  }

  const heading =
    "This memories and journeys only for one heart. If that heart is yours, you already know the key.";

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
          className="p-6 md:p-6 rounded-3xl shadow-2xl border-2 border-red-500 text-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-red-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 my-5 relative z-10"
          >
            <p className="text-8xl">🔒</p>
            <p className="text-lg text-amber-600 leading-relaxed font-body px-4 text-bold">
              {heading}
            </p>
            <p className="text-sm text-gray-400 font-mono italic font-semibold">
              <span>( HINT : The place, you dreamt of )</span>
            </p>
          </motion.div>
          <motion.input
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            type="password"
            placeholder="Enter our secret..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-3xl p-5 text-pink-600 font-semibold font-mono"
            style={{
              boxShadow: "2px 2px 2px 2px pink",
              outline: 0,
              border: 0,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

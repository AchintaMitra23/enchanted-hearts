import React, { useEffect, useState } from "react";
import SecretQuestion from "./SecretQuestion";
import { motion } from "framer-motion";

export const valentineQuestions = [
  {
    day: "Rose Day",
    emoji: "🌹",
    question:
      "Nilanjana, when you think about us, what feelings bloom in your heart like a rose?",
  },
  {
    day: "Propose Day",
    emoji: "💍",
    question:
      "What made you choose me and believe that our love was worth saying ‘yes’ to?",
  },
  {
    day: "Chocolate Day",
    emoji: "🍫",
    question:
      "Which sweet memory of ours still melts your heart whenever you think about it?",
  },
  {
    day: "Teddy Day",
    emoji: "🧸",
    question:
      "In which moments do you feel the safest, most comforted, and loved by me?",
  },
  {
    day: "Promise Day",
    emoji: "🤞",
    question:
      "What promise do you hope we always keep, no matter where life takes us?",
  },
  {
    day: "Hug Day",
    emoji: "🤗",
    question:
      "What do you feel when you imagine us holding each other after a long, tiring day?",
  },
  {
    day: "Kiss Day",
    emoji: "💋",
    question:
      "Which moment between us felt the most magical and full of unspoken love?",
  },
];

export default function ValentineQNA() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(
    Array(valentineQuestions.length).fill(""),
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    localStorage.setItem("valentineAns", JSON.stringify(answers));
  }, [answers]);

  const handleNext = () => {
    if (!answers[current].trim()) return;
    setCurrent(current + 1);
  };

  if (current === valentineQuestions.length) {
    return <SecretQuestion />;
  }

  const question = valentineQuestions[current];

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
          className="p-6 rounded-3xl shadow-2xl border-2 border-red-500 text-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-red-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative space-y-5"
          >
            <p className="text-8xl">{question.emoji}</p>
            <p className="text-3xl text-pink-900 leading-relaxed font-body text-bold">
              Happy {question.day} baby
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 my-5 relative z-10"
          >
            <p className="text-lg text-gray-800 leading-relaxed font-body px-4 text-bold">
              {question.question}
            </p>
          </motion.div>

          <motion.div>
            <motion.textarea
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              placeholder="Write from your heart..."
              value={answers[current]}
              onChange={(e) => {
                const updated = [...answers];
                updated[current] = e.target.value;
                setAnswers(updated);
              }}
              className="w-full rounded-3xl p-5 text-pink-600 font-semibold"
              style={{
                boxShadow: "2px 2px 2px 2px pink",
                outline: 0,
                border: 0,
              }}
            />
          </motion.div>

          {answers[current].trim() && (
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-half px-10 py-3 text-black-800 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-rose-300 mt-5"
              onClick={handleNext}
            >
              <span className="relative flex items-center justify-center gap-2 text-bold text-lg">
                {current === 7 ? "Finish ❤️" : "Next"}
              </span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

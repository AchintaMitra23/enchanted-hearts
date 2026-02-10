import { PolaroidCard } from "@/components/PolaroidCard";
import { motion } from "framer-motion";
import { useEffect } from "react";
import eyes from "../../public/eyes1.jpg";
import birthdayPhoto from "../../public/birthday.jpg";
import smile from "../../public/smile.jpg";
import catFace from "../../public/cat-face.jpg";
import look from "../../public/Nil_Solo_10.jpg";
import saree from "../../public/saree.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePartner } from "@/hooks/use-partner";

export default function Gallery() {
  const { birthday } = usePartner();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const displayMemories = [
    {
      id: 1,
      url: eyes,
      type: "image",
      caption: "Silent Magic",
      date: "AK47",
      rotation: 5,
    },
    {
      id: 2,
      url: birthdayPhoto,
      type: "image",
      caption: "Special Day",
      date: birthday,
      rotation: -5,
    },
    {
      id: 3,
      url: smile,
      type: "image",
      caption: "Radiant Joy",
      date: "SMILE",
      rotation: 5,
    },
    {
      id: 4,
      url: catFace,
      type: "image",
      caption: "Playful Whiskers",
      date: "CAT FACES",
      rotation: -5,
    },
    {
      id: 5,
      url: look,
      type: "image",
      caption: "Mesmerizing Gaze",
      date: "TENDER LOOKS",
      rotation: 5,
    },
    {
      id: 6,
      url: saree,
      type: "image",
      caption: "Timeless Elegance",
      date: "SAREE",
      rotation: -5,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-200/20 via-transparent to-transparent pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-r from-red-300/25 to-purple-300/25 rounded-full blur-[100px] will-change-transform"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <Header
          heading="The Muse Art Gallery"
          subHeading="Nilanjana, the muse where every love story begins."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24"
        >
          {displayMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px", amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <PolaroidCard memory={memory} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <Footer
          upperText="Are you ready to open the gift box ?"
          buttonText="If Yes, My gift for you"
          lowerText="Feels you with me every moment, as if I'm always by your side."
          href="/secret-question"
        />
      </div>
    </div>
  );
}

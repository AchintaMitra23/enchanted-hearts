import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, memo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pandalhopping from "../../public/pandal-hopping.jpg";
import marriageAsCouple from "../../public/marriage_as_couple.jpg";
import longDistance from "../../public/long-distance.jpg";
import hydVisit from "../../public/hyd-visit.jpg";
import glimpse from "../../public/glimpse_1.jpg";

const StorySection = memo(
  ({ item, index, total }: { item: any; index: number; total: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      amount: 0.2,
      margin: "100px",
    });
    const [isImageHovered, setIsImageHovered] = useState(false);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center center"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
    const isEven = index % 2 === 0;

    return (
      <section
        ref={ref}
        className="flex items-center justify-center relative p-5 mt-5 mb-5 rounded-3xl"
        style={{ border: "5px solid rgba(255, 0, 200, 0.25)" }}
      >
        {/* Simplified floating decorations - only 2 sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        ></motion.div>

        <motion.div
          style={{ opacity, y }}
          className={cn(
            "max-w-6xl w-full grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10 will-change-transform",
            !isEven && "md:grid-flow-dense",
          )}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isEven ? -40 : 40 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className={cn(
              "space-y-4 sm:space-y-6",
              !isEven && "md:col-start-2",
            )}
          >
            {/* Chapter Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-100 to-rose-100 rounded-full text-rose-600 font-handwriting text-sm md:text-base shadow-sm border border-red-200/50"
            >
              💖 Chapter {index + 1} of {total} 💖
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-red-400 to-purple-200 leading-tight"
            >
              {item.title}
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "20rem" } : { width: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-full"
            />

            {/* Content */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-gray-300 font-bold font-body leading-relaxed md:leading-loose"
            >
              {item.content}
            </motion.p>

            {/* Quote Mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-2 text-red-400/50"
            >
              <Heart className="w-5 h-5 sm:w-5 sm:h-5 fill-red-300" />
              <div className="h-px flex-1 bg-gradient-to-r from-red-500 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Image - touch-friendly */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isEven ? 40 : -40 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn("relative group w-full", !isEven && "md:col-start-1")}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {/* Main image container */}
            <motion.div
              animate={{
                y: isImageHovered ? -5 : 0,
              }}
              transition={{ duration: 2 }}
              className="relative bg-white hover:bg-pink-500 p-3 rounded-2xl shadow-xl border-1 overflow-hidden aspect-[4/3] will-change-transform"
            >
              {item.imageUrl ? (
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  animate={{
                    scale: isImageHovered ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-50 to-rose-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <motion.span
                    animate={{
                      scale: isImageHovered ? [1, 1.15, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: isImageHovered ? Infinity : 0,
                    }}
                    className="text-6xl"
                  >
                    ❤️
                  </motion.span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
  },
);

StorySection.displayName = "StorySection";

export default function Timeline() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sortedStory = [
    {
      id: 1,
      title: "The First Pandal Hopping",
      content:
        "We didn’t slowly fall in love—we met there, at the same height, with the same intensity, where two hearts recognized each other instantly and chose to feel deeply, together. ❤️",
      imageUrl: pandalhopping,
      order: 1,
    },
    {
      id: 2,
      title: "Attending Marriage As Couple",
      content:
        "We didn’t just fall in love—we grew into it together, building something beautiful with love and care, respect and understanding, loyalty and affection, choosing each other every day as partners, companions, and hearts forever aligned. ❤️",
      imageUrl: marriageAsCouple,
      order: 2,
    },
    {
      id: 3,
      title: "Final Glimpse, Before New Journey",
      content:
        "We grew together even when destiny placed miles between us—holding on with love and care, trust and understanding, proving that distance could never weaken what two hearts truly chose to build together. ❤️",
      imageUrl: longDistance,
      order: 3,
    },
    {
      id: 4,
      title: "First Journey To My New City",
      content:
        "When you came to my new city, the distance finally gave way to love—every street felt warmer, every moment felt complete, because you crossed miles not just to see me, but to choose us all over again. ❤️",
      imageUrl: hydVisit,
      order: 4,
    },
    {
      id: 5,
      title: "Distance, Makes Stronger & Falling Deeper",
      content:
        "Our love didn’t just bring us closer—it made us stronger, teaching us to fall deeper into each other every day with unwavering respect, gentle care, and a bond that grows more beautiful with time. ❤️",
      imageUrl: glimpse,
      order: 5,
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
          heading="Glimpse Of Memories"
          subHeading="The journey that matters most, the memories that heal deepest."
        />

        <div className="space-y-5 mx-5">
          {sortedStory.map((segment, idx) => (
            <StorySection
              key={segment.id}
              item={segment}
              index={idx}
              total={sortedStory.length}
            />
          ))}
        </div>

        <Footer
          upperText="Are you ready to witness my precious item ?"
          buttonText="If Yes, My art gallery"
          lowerText="Every moment with you feels like a beautiful beginning."
          href="/gallery"
        />
      </div>
    </div>
  );
}

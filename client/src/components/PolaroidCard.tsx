import { motion } from "framer-motion";

interface PolaroidCardProps {
  memory: {
    id: number;
    url: string;
    type: string;
    caption: string;
    date: string;
    rotation: number;
  };
  index: number;
}

export function PolaroidCard({ memory, index }: PolaroidCardProps) {
  const rotation = memory.rotation || (memory.id % 10) - 5;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        zIndex: 10,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      className="relative group bg-rose-200 p-2 pb-10 shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto"
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="aspect-[1] overflow-hidden bg-gray-100 mb-10 border border-gray-500">
        <img
          src={memory.url}
          alt={memory.caption}
          className="w-full h-full object-cover filter sepia-[.2] contrast-105 group-hover:sepia-0 transition-all duration-500"
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className="font-mono text-xl text-gray-500 mt-1 italic">
          {memory.caption}
        </p>
        <p className="font-handwriting text-xl text-gray-700 leading-tight">
          {memory.date}
        </p>
      </div>

      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-25 h-10 bg-amber/40 backdrop-blur-[1px] shadow-sm transform -rotate-1 skew-x-12"></div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function LetterBlock({
  letter,
  index,
}: {
  letter: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: index * 0.1,
      }}
      className="inline-block bg-gradient-to-b from-yellow-400 to-yellow-500
      text-slate-900 px-1.5 py-0.5 sm:px-2 md:px-4 sm:py-1 md:py-2
      rounded-md sm:rounded-lg text-xs sm:text-sm md:text-2xl
      shadow-md sm:shadow-lg border-b-1 sm:border-b-2 md:border-b-4 border-yellow-600
      font-bold sm:font-black tracking-wide sm:tracking-wider
      transform hover:scale-110 transition-transform duration-200
      hover:shadow-yellow-400/20 hover:-translate-y-0.5"
    >
      {letter}
    </motion.span>
  );
}

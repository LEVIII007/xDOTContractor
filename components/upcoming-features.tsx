"use client";
import { motion } from "framer-motion";
import Blueprint from "@/components/blueprintbg";
import { Badge } from "@/components/ui/badge";
import { Ruler, HardHat } from "lucide-react";
import FeaturesSection from "./features";

const LetterBlock = ({ letter, index }: { letter: string; index: number }) => (
  <motion.span
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: index * 0.05, // Slightly reduced delay for better stacking
    }}
    className="inline-block bg-gradient-to-b from-yellow-400 to-yellow-500
      text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 m-1 rounded-lg text-lg sm:text-xl lg:text-2xl
      shadow-lg border-b-4 border-yellow-600 font-black tracking-wider
      transform hover:scale-105 transition-transform duration-200
      hover:shadow-yellow-400/20 hover:-translate-y-0.5"
  >
    {letter}
  </motion.span>
);

const UpcomingFeatures = () => {
  const title = "WORK IN PROGRESS";
  const subtitle = "AI-POWERED CONSTRUCTION SOLUTIONS";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full min-h-[80vh] md:min-h-screen">
        <Blueprint />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

        {/* Main Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            className="relative z-10 max-w-2xl mx-auto text-center px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <Badge
                className="bg-blue-500/20 text-blue-200 border border-blue-400/30
                  rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium tracking-wider"
              >
                <HardHat className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 inline-block" />
                SITE UNDER CONSTRUCTION
              </Badge>
            </motion.div>

            {/* Title Stack - Fixed for Proper Wrapping */}
            <motion.div
              className="mb-6 sm:mb-12 flex flex-wrap justify-center gap-1 sm:gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {title.split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex justify-center">
                  {word.split("").map((letter, letterIndex) => (
                    <LetterBlock
                      key={letterIndex}
                      letter={letter}
                      index={letterIndex + wordIndex * word.length}
                    />
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Subtitle - Fixed Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-lg sm:text-2xl font-bold text-white mb-6 sm:mb-8
                bg-slate-800/90 py-3 sm:py-4 px-6 sm:px-8 rounded-xl
                shadow-xl border border-slate-700/50 tracking-wide
                max-w-xs sm:max-w-md mx-auto"
            >
              {subtitle}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="space-y-6 sm:space-y-8 mb-8 sm:mb-12"
            >
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                We are a small team of developers crafting the future of
                construction software.
                <br />
                <span className="text-slate-400 text-sm sm:text-base">
                  Just like your buildings, we&apos;re taking time to build
                  something extraordinary.
                </span>
              </p>

              <div className="flex items-center justify-center gap-1 sm:gap-2 text-slate-400 text-xs sm:text-sm">
                <Ruler className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Measuring Progress</span>
              </div>
            </motion.div>

            {/* CTA Button - Centered & Responsive */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl
                bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-900
                font-bold border-b-4 border-yellow-700 shadow-xl
                transition-all duration-200 hover:shadow-yellow-400/20
                hover:border-b-[3px] hover:-translate-y-0.5 active:border-b-2 tracking-wide"
            >
              Learn More About Our Progress
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* AI Features Section - Now static below hero */}
      <div className="bg-slate-800 w-full min-h-[70vh] sm:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-full "
        >
          <FeaturesSection />
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;

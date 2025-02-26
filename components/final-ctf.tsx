"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AIConstructionCTA() {
  const dots = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    duration: 2 + i,
    delay: i * 0.5,
  }));

  return (
    <div className="relative w-full min-h-[400px] bg-[#F4F7F9] border-t border-black flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          AI-Driven Construction, Accelerated
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Leverage cutting-edge AI to streamline your construction workflows,
          reduce delays, and optimize project efficiency. Experience a smarter
          way to build with automation and precision.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="rounded-full px-8 sm:px-10 py-6 sm:py-8
              bg-[#a2b5c7] border border-black
              text-base sm:text-lg md:text-xl font-semibold
              hover:bg-[#8fa5b9] transition-all duration-200
              w-full sm:w-auto min-w-[220px] sm:min-w-[300px]
              shadow-md hover:shadow-lg"
            onClick={() => {
              alert("AI Construction Software: Transforming the Industry.");
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a2b5c7] to-transparent"
      />

      {/* Animated Dots */}
      {dots.map(({ id, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute w-2 h-2 rounded-full bg-[#a2b5c7] border border-black/20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.4,
            y: [-10, 10],
            x: [-10, 10],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: `${30 + id * 20}%`,
            left: `${20 + id * 30}%`,
          }}
        />
      ))}
    </div>
  );
}

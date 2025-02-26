"use client";

import { motion } from "framer-motion";

export default function RevealAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D363C] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      onAnimationComplete={() => (document.body.style.overflow = "auto")}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Top line */}
        <motion.div
          className="absolute top-[-50px] w-[300px] h-[3px] bg-[#D3F3C3]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Main text animation container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#D3F3C3] blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Text content */}
          <motion.div className="relative z-10 flex flex-col items-center space-y-2">
            <span className="text-6xl font-bold text-[#F4F7F9] tracking-wider">
              GDOT
            </span>
            <span className="text-xl text-[#D3F3C3] font-light tracking-[0.3em]">
              CONTRACTOR
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-[-50px] w-[300px] h-[3px] bg-[#D3F3C3]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D3F3C3] rounded-full"
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

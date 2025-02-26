"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { features } from "@/mockdata";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

export default function FeaturesSection() {
  return (
    <motion.div
      className="bg-[#0D363C] w-full min-h-[100vh] border border-black px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div variants={headerVariants}>
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-light text-center text-white pt-12 pb-6"
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span
            className="text-[#FFD700] text-2xl sm:text-3xl md:text-4xl block sm:inline
            bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
          >
            An Efficient
          </span>{" "}
          <span className="block sm:inline">
            Great and cool Software to Manage Your Business Need
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-center text-white/80 px-4 sm:px-6"
          variants={headerVariants}
        >
          Dont Worry about copy it will be improved
        </motion.p>
      </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <Card
                  className="bg-[#0D363C] border border-[#75746f]/20
                  shadow-[0_8px_16px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]
                  transition-all duration-300 h-full
                  hover:border-[#FFD700]/30"
                >
                  <CardHeader
                    className="flex flex-row items-start sm:items-center
                    space-x-3 sm:space-x-4 p-4 sm:p-6"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        size={20}
                        className="text-[#FFD700] flex-shrink-0 mt-1 sm:mt-0"
                      />
                    </motion.div>
                    <h2 className="text-base sm:text-lg font-light text-white">
                      {feature.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

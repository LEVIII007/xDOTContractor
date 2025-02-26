"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (width: string) => ({
    width: width,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const barChartVariants = {
  hidden: { height: 0 },
  visible: (height: number) => ({
    height: `${height}%`,
    transition: {
      duration: 1,
      ease: "circOut",
    },
  }),
};

export default function StatsSection() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Left Card - Stats */}
      <motion.div variants={cardVariants} className="w-full lg:w-1/2">
        <Card className="p-4 sm:p-6 lg:p-8 bg-white h-full hover:shadow-lg transition-shadow duration-300">
          <CardContent className="space-y-6 lg:space-y-8 h-full flex flex-col justify-between">
            {/* Stats Header with Counter Animation */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl text-gray-600">
                  Total Projects
                </h3>
                <motion.span
                  className="text-green-500 text-base sm:text-lg font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  ↑ 34%
                </motion.span>
              </div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                1,475
              </motion.h2>
            </motion.div>

            {/* Progress Bars with Improved Animation */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  label: "Finished",
                  value: "65%",
                  width: "w-[65%]",
                  color: "bg-green-400",
                },
                {
                  label: "In Progress",
                  value: "45%",
                  width: "w-[45%]",
                  color: "bg-blue-400",
                },
                {
                  label: "Rejected",
                  value: "25%",
                  width: "w-[25%]",
                  color: "bg-red-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600 font-medium">
                      {item.label}
                    </span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      custom={item.width}
                      variants={progressVariants}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Monthly Growth Chart with Enhanced Animation */}
            <motion.div
              className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-inner"
              variants={cardVariants}
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Monthly Growth
                  </h3>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
                    1,951+
                  </p>
                  <p className="text-xs sm:text-sm text-green-500 font-medium mt-1">
                    +126 from last month
                  </p>
                </div>
                <div className="text-green-500 text-lg sm:text-xl font-bold">
                  ↑ 18%
                </div>
              </div>
              <div className="flex items-end gap-2 sm:gap-3 h-[80px] sm:h-[120px]">
                {[65, 85, 55, 90, 75, 95].map((height, index) => (
                  <motion.div
                    key={index}
                    custom={height}
                    variants={barChartVariants}
                    className="w-full bg-teal-600 rounded-t-lg"
                    style={{ minWidth: "20px", maxWidth: "40px" }}
                  />
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Section - Benefits with Staggered Animation */}
      <motion.div
        variants={cardVariants}
        className="w-full lg:w-1/2 space-y-6 lg:space-y-8 mt-4 lg:mt-0 p-4 sm:p-6 lg:p-8 bg-white rounded-lg"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Key Benefits of Our System
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Our systems boost productivity, cut costs, and drive business
            growth.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {[
            {
              title: "Boosting Quality with Tech",
              description:
                "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.",
            },
            {
              title: "Optimization Production Process",
              description:
                "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.",
            },
            {
              title: "AI-Driven Production",
              description:
                "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          {/* <Image
            src="https://c.ndtvimg.com/2019-12/5hf2349g_pm-modi-solar-eclipse-tweet_625x300_26_December_19.jpg?downsize=773:435"
            alt="Solar Eclipse"
            width={300}
            height={280}
            className="w-full rounded-lg"
          /> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

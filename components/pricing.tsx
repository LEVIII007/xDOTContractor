"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
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
      stiffness: 80,
      damping: 20,
      duration: 0.8,
    },
  },
};

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:p-12">
      <motion.div
        className="max-w-6xl mx-auto space-y-8 sm:space-y-16 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="text-center space-y-6 sm:space-y-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F7F9] p-2">
            Building Plans for Every Project Scale
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400">
            From residential builds to commercial complexes
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-8">
          {[
            {
              title: "Foundation Plan",
              description:
                "Perfect for small contractors and renovation specialists",
              price: "$39",
              features: [
                "Manage up to 5 construction projects",
                "Real-time material tracking",
                "Basic project timeline tools",
                "Site safety compliance checklist",
              ],
            },
            {
              title: "Skyscraper Plan",
              description: "For large construction firms and developers",
              price: "$99",
              features: [
                "Unlimited construction projects",
                "Advanced BIM integration",
                "Multi-site resource management",
                "AI-powered project forecasting",
              ],
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50
                rounded-3xl hover:border-zinc-700/50 transition-all duration-300
                hover:shadow-2xl hover:shadow-teal-500/10 h-full"
              >
                <CardHeader className="p-6 sm:p-8">
                  <h2
                    className="text-xl sm:text-2xl font-semibold
                    bg-gradient-to-r from-white to-gray-400
                    bg-clip-text text-transparent"
                  >
                    {plan.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8 p-6 sm:p-8 text-white">
                  <div className="flex items-baseline relative overflow-hidden">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent m-3 p-3">
                      Coming Soon
                    </span>
                    {/* Shiny overlay animation */}
                    <div
                      className="absolute inset-0 w-full h-full animate-shine"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transform: "translateX(-100%)",
                        animation: "shine 2s infinite",
                      }}
                    />
                  </div>
                  <style jsx>{`
                    @keyframes shine {
                      100% {
                        transform: translateX(100%);
                      }
                    }
                  `}</style>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl h-10 sm:h-12
                      text-base sm:text-lg
                      bg-zinc-800 text-white hover:bg-zinc-700
                      border-zinc-600 hover:border-zinc-500
                      transition-all duration-300"
                    onClick={() =>
                      alert("Site under Construction work in progress. ")
                    }
                  >
                    Get Started
                  </Button>
                  <div className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" />
                        <span className="text-sm sm:text-base text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Master Builder Plan - Full Width */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <Card
            className="bg-[#0D363C]/90 border-none rounded-3xl
            hover:shadow-2xl hover:shadow-teal-500/10
            transition-all duration-300"
          >
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6">
                <h2
                  className="text-2xl sm:text-3xl font-semibold
                  bg-gradient-to-r from-teal-400 to-emerald-400
                  bg-clip-text text-transparent"
                >
                  Master Builder Plan
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Complete construction management suite with advanced tools for
                  blueprint analysis, resource optimization, and AI-powered
                  project scheduling.
                </p>
                <Button
                  className="bg-gradient-to-r from-teal-400 to-emerald-400
                    text-slate-900 font-bold hover:opacity-90
                    rounded-2xl h-10 sm:h-12 px-6 sm:px-8
                    text-base sm:text-lg
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    w-full sm:w-auto"
                  onClick={() =>
                    alert("Site under Construction work in progress. ")
                  }
                >
                  Start Building
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { icons } from "@/mockdata";

interface IconType {
  Icon: React.ElementType;
  label: string;
}

interface RevolvingIconProps {
  icon: IconType;
  index: number;
  total: number;
  radius: number;
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const RevolvingIcon = ({ icon, index, total, radius }: RevolvingIconProps) => {
  const angle = (index * 2 * Math.PI) / total;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: 1,
        rotate: 360,
      }}
      transition={{
        scale: {
          duration: 0.5,
          delay: index * 0.1,
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="absolute"
      style={{
        width: 48,
        height: 48,
        x: x - 24,
        y: y - 24,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="bg-white p-2 rounded-xl shadow-lg"
      >
        <motion.div
          className="w-10 h-10 bg-[#D3F3C3] rounded-lg flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <icon.Icon className="text-gray-700" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
          whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, y: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon.label}
      </motion.div>
    </motion.div>
  );
};

// Updated copy in the RevolvingSection component

export default function RevolvingSection() {
  const iconCount = icons.length;
  const radius = 120;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 min-h-[600px] bg-white">
      <motion.div
        className="md:w-1/2 space-y-6 md:pr-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Streamlined Construction Management Solutions
        </motion.h1>
        <motion.p variants={textVariants} className="text-gray-600 text-lg">
          XConstructor delivers an integrated suite of AI-powered tools that
          optimize every aspect of your construction workflow. From bidding to
          completion, our platform reduces complexity, minimizes costly errors,
          and provides real-time insights that drive better decision-making
          across your organization.
        </motion.p>
        <motion.div
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-[#D3F3C3] text-black hover:bg-[#bfe0af]
            font-semibold text-lg px-8 py-6 rounded-full
            transition-all duration-300 transform-gpu"
          >
            Request Product Demo
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative md:w-1/2 h-[400px] mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icons.map((icon, index) => (
            <RevolvingIcon
              key={index}
              icon={icon}
              index={index}
              total={iconCount}
              radius={radius}
            />
          ))}
          <motion.div
            className="absolute inset-0 bg-[#D3F3C3] rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

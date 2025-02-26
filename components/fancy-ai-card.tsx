"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Brain,
  ArrowRightLeft,
  Scale,
  ClipboardList,
  Users,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const features = [
  {
    title: "Automated Construction Executive",
    description:
      "AI-driven business insights and performance tracking for road construction companies.",
    backContent: {
      title: "Key Benefits",
      points: [
        "Real-time KPIs and insights",
        "Revenue and cost breakdowns",
        "EOS implementation",
        "Employee recognition system",
      ],
    },
    icon: Brain,
    color: "text-blue-400",
    connectionPoint: "top",
  },
  {
    title: "AI Construction Law Assistant",
    description:
      "One-of-a-kind AI legal assistant to help small construction businesses handle legal matters.",
    backContent: {
      title: "Smart Features",
      points: [
        "Contract and compliance guidance",
        "Dispute resolution support",
        "Permit navigation",
        "Reduced legal costs",
      ],
    },
    icon: Scale,
    color: "text-red-400",
    connectionPoint: "top",
  },

  {
    title: "Automated Project Engineer & Field Engineer",
    description:
      "AI-powered task and compliance tracking to ensure projects stay on schedule.",
    backContent: {
      title: "Project Advantages",
      points: [
        "Smart scheduling",
        "Compliance tracking",
        "Predictive insights",
        "Team collaboration tools",
      ],
    },
    icon: ClipboardList,
    color: "text-yellow-400",
    connectionPoint: "top",
  },
];

const bottomFeatures = [
  {
    title: "Automated Resource Manager",
    description:
      "AI-powered fleet and workforce management for maximum efficiency.",
    backContent: {
      title: "AI Assistants",
      points: [
        "Fleet optimization",
        "Streamlined onboarding",
        "Automated scheduling",
        "Cost-effective allocation",
      ],
    },
    icon: Users,
    color: "text-indigo-400",
    connectionPoint: "bottom",
  },
  {
    title: "AI Safety & Compliance Assistant",
    description:
      "AI-driven safety monitoring and compliance enforcement to reduce risks.",
    backContent: {
      title: "Safety Features",
      points: [
        "Real-time hazard alerts",
        "PPE monitoring",
        "Emergency response",
        "Safety training tracker",
      ],
    },
    icon: ShieldCheck,
    color: "text-teal-400",
    connectionPoint: "bottom",
  },
  {
    title: "AI Administrative Assistant",
    description:
      "Automates paperwork, document processing, and compliance workflows.",
    backContent: {
      title: "Administrative Benefits",
      points: [
        "Digital document management",
        "Automated approvals",
        "Cross-department comms",
        "Reduced admin workload",
      ],
    },
    icon: FileText,
    color: "text-orange-400",
    connectionPoint: "bottom",
  },
];

const FeatureCard = ({
  feature,
  index,
  isActive,
  onHover,
}: {
  feature: (typeof features)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={onHover}
      className="relative"
    >
      {/* Connection elements remain unchanged */}
      <div
        className={`absolute ${
          feature.connectionPoint === "top"
            ? "top-full left-1/2 h-10 -translate-x-1/2"
            : "bottom-full left-1/2 h-10 -translate-x-1/2"
        } w-[1.5px] ${
          isActive
            ? "bg-gradient-to-b from-transparent via-cyan-400/80 to-cyan-400/40"
            : "bg-gradient-to-b from-transparent via-teal-800/40 to-teal-800/20"
        } transition-all duration-700`}
      />

      <div
        className={`absolute ${
          feature.connectionPoint === "top"
            ? "top-full left-1/2 -translate-x-1/2 mt-[2px]"
            : "bottom-full left-1/2 -translate-x-1/2 mb-[2px]"
        } w-2 h-2 rounded-full ${
          isActive ? "bg-cyan-400/80" : "bg-teal-800/40"
        } transition-all duration-500 z-10`}
      />

      {isActive && (
        <div
          className={`absolute ${
            feature.connectionPoint === "top"
              ? "top-full left-1/2 -translate-x-1/2 mt-[2px]"
              : "bottom-full left-1/2 -translate-x-1/2 mb-[2px]"
          }`}
        >
          <span className="absolute w-2 h-2 bg-cyan-400/80 rounded-full animate-ping opacity-30"></span>
        </div>
      )}

      {/* Card Container */}
      <div className="relative h-[300px] perspective-1000">
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            // Front of card
            <motion.div
              key="front"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Card
                className={`
                  bg-[#0D363C]/80 border-zinc-800/50
                  backdrop-blur-lg transition-all duration-700
                  hover:shadow-xl hover:shadow-cyan-500/20
                  h-full
                  ${
                    isActive
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/30"
                      : "hover:border-zinc-700/50"
                  }
                `}
              >
                <CardHeader className="space-y-2 pb-3">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`
                        p-3 rounded-lg
                        ${isActive ? "bg-blue-500/20" : "bg-zinc-800/50"}
                        transition-colors duration-500
                      `}
                    >
                      <feature.icon
                        className={`w-8 h-8 ${feature.color} ${
                          isActive ? "animate-pulse" : ""
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white tracking-tight">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`w-fit ${
                      isActive
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-zinc-800/50 text-zinc-300"
                    } transition-colors duration-500 px-3 py-1 text-sm`}
                  >
                    AI Enhanced
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <button
                    onClick={handleFlip}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                    <span className="text-sm">View Details</span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            // Back of card
            <motion.div
              key="back"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full h-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Card
                className={`
                  bg-[#0D363C]/80 border-zinc-800/50
                  backdrop-blur-lg transition-all duration-700
                  hover:shadow-xl hover:shadow-cyan-500/20
                  h-full
                  ${
                    isActive
                      ? "border-cyan-500/50 shadow-lg shadow-cyan-500/30"
                      : "hover:border-zinc-700/50"
                  }
                `}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.backContent.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {feature.backContent.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-zinc-400"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleFlip}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                    <span className="text-sm">Back to Overview</span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function AIConstructionFeatures() {
  // State to track which card is active in the sequence
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [manualActivation, setManualActivation] = useState(false);

  useEffect(() => {
    if (manualActivation) return;

    const allFeatures = [...features, ...bottomFeatures];
    const totalFeatures = allFeatures.length;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalFeatures);
    }, 2000);
    return () => clearInterval(interval);
  }, [manualActivation]);

  const handleCardHover = (index: number) => {
    setManualActivation(true);
    setActiveCardIndex(index);
    // Reset automated sequence after some time of inactivity
    setTimeout(() => setManualActivation(false), 5000);
  };

  interface ConnectionPoint {
    x: number;
    y: number;
  }

  const connectionPoints = useMemo<ConnectionPoint[]>(() => {
    const topPoints = features.map((_, i) => ({
      x: 349 + ((i + 0.5) * 198) / features.length,
      y: 96,
    }));

    const bottomPoints = bottomFeatures.map((_, i) => ({
      x: 349 + ((i + 0.5) * 198) / bottomFeatures.length,
      y: 184,
    }));

    return [...topPoints, ...bottomPoints];
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0D363C]">
      <div className="w-full h-full py-8">
        {/* Top Row Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                isActive={activeCardIndex === index}
                onHover={() => handleCardHover(index)}
              />
            ))}
          </div>
        </div>

        {/* Center SVG Animation - Full Width Container */}
        <div className="w-full bg-[#0D363C]/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 891 264"
                width="891"
                height="264"
                fill="none"
                className="w-full"
              >
                {/* All Circuit Paths with Animation */}
                <g className="circuit-paths">
                  {[
                    // Horizontal and curved paths
                    "M388 96L388 68C388 65.7909 386.209 64 384 64L310 64",
                    "M349 150L73 150C70.7909 150 69 151.791 69 154L69 174",
                    "M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264",
                    "M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264",
                    "M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264",
                    "M412 263.5L412 184",
                    // Vertical paths
                    "M412 96L412 0",
                    "M436 96L436 0",
                    "M436 214L436 184",
                    "M460 96L460 64",
                    "M460 239L460 184",
                    "M484 96L484 24C484 21.7909 485.791 20 488 20L554 20",
                    "M484 184L484 210C484 212.209 485.791 214 488 214L560 214",
                    "M508 184L508 193C508 195.209 509.791 197 512 197L560 197",
                  ].map((d, i) => (
                    <g key={`circuit-path-${i}`}>
                      <g>
                        {/* Base path with glow */}
                        <path
                          d={d}
                          stroke="#4cd5f7"
                          strokeOpacity="0.15"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        {/* Animated energy flow */}
                        <path
                          d={d}
                          stroke="url(#refined-energy-flow-gradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="transition-opacity duration-500"
                          strokeDasharray="6,3"
                        >
                          <animate
                            attributeName="strokeDashoffset"
                            from={`${20 + i * 10}`}
                            to="0"
                            dur={`${1 + (i % 3) * 0.5}s`}
                            repeatCount="indefinite"
                          />
                        </path>
                        {/* Subtle glow effect */}
                        <path
                          d={d}
                          stroke="#4cd5f7"
                          strokeOpacity="0.1"
                          strokeWidth="4"
                          filter="blur(4px)"
                          className="transition-all duration-300"
                        />
                      </g>
                    </g>
                  ))}
                </g>

                {/* Enhanced Nodes/Connection Points */}
                {[
                  { cx: 460, cy: 64 },
                  { cx: 308, cy: 64 },
                  { cx: 69, cy: 173 },
                  { cx: 436, cy: 214 },
                  { cx: 460, cy: 240 },
                  { cx: 560, cy: 214 },
                  { cx: 560, cy: 197 },
                ].map((circle, idx) => (
                  <g key={`node-${idx}`}>
                    {/* Core */}
                    <circle
                      cx={circle.cx}
                      cy={circle.cy}
                      r="3"
                      fill="#4cd5f7"
                      className="transition-all duration-300"
                    >
                      <animate
                        attributeName="fillOpacity"
                        values="0.8;1;0.8"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Inner glow */}
                    <circle
                      cx={circle.cx}
                      cy={circle.cy}
                      r="4"
                      fill="transparent"
                      stroke="#4cd5f7"
                      strokeWidth="2"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="strokeOpacity"
                        values="0.6;0.8;0.6"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Outer pulse */}
                    <circle
                      cx={circle.cx}
                      cy={circle.cy}
                      r="6"
                      fill="transparent"
                      stroke="#4cd5f7"
                      strokeWidth="1"
                    >
                      <animate
                        attributeName="r"
                        values="4;6;4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="strokeOpacity"
                        values="0.4;0.1;0.4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}

                {/* Connection Points */}
                {connectionPoints.map((point, idx) => (
                  <g key={`connection-${idx}`}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="1.5"
                      fill={activeCardIndex === idx ? "#4cd5f7" : "#2c6cb0"}
                      fillOpacity={activeCardIndex === idx ? "0.9" : "0.5"}
                      className="transition-all duration-300"
                    />
                    {activeCardIndex === idx && (
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="none"
                        stroke="#4cd5f7"
                        strokeOpacity="0.4"
                        strokeWidth="1"
                      >
                        <animate
                          attributeName="r"
                          values="3;6;3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-opacity"
                          values="0.4;0.1;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                ))}

                {/* Brain glow effect */}
                <rect
                  x="339"
                  y="86"
                  width="218"
                  height="108"
                  rx="12"
                  fill="url(#brain-glow)"
                  filter="url(#glow)"
                  className="transition-opacity duration-500 opacity-60"
                >
                  <animate
                    attributeName="opacity"
                    values="0.6;0.8;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* Center "Brain" */}
                <g>
                  <rect
                    x="349"
                    y="96"
                    width="198"
                    height="88"
                    rx="8"
                    fill={
                      activeCardIndex !== -1
                        ? "url(#active-center-gradient)"
                        : "#3182ce"
                    }
                    fillOpacity={activeCardIndex !== -1 ? "0.2" : "0.1"}
                    stroke={activeCardIndex !== -1 ? "#4cd5f7" : "#3182ce"}
                    strokeOpacity={activeCardIndex !== -1 ? "0.6" : "0.3"}
                    strokeWidth="1"
                    className="transition-all duration-500 cursor-pointer"
                    onClick={() => {
                      setManualActivation(true);
                      setTimeout(() => {
                        setManualActivation(false);
                      }, 3000);
                    }}
                  />
                  <text
                    x="448"
                    y="124"
                    fontFamily="Arial, sans-serif"
                    fontSize="18"
                    fill={activeCardIndex !== -1 ? "#4cd5f7" : "#3182ce"}
                    textAnchor="middle"
                    className="transition-all duration-500"
                  >
                    Next with
                  </text>
                  <text
                    x="448"
                    y="154"
                    fontFamily="Arial, sans-serif"
                    fontSize="22"
                    fontWeight="bold"
                    fill={activeCardIndex !== -1 ? "#4cd5f7" : "#3182ce"}
                    textAnchor="middle"
                    className="transition-all duration-500"
                  >
                    GxDOTContractor
                  </text>
                </g>

                {/* New Pulse Effect around center box */}
                <rect
                  x="347"
                  y="94"
                  width="202"
                  height="92"
                  rx="10"
                  fill="none"
                  stroke="#4cd5f7"
                  strokeOpacity="0"
                  strokeWidth="1"
                  className={activeCardIndex !== -1 ? "" : "hidden"}
                >
                  <animate
                    attributeName="stroke-opacity"
                    values="0.6;0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="width"
                    values="202;220"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    values="92;110"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x"
                    values="347;338"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="94;85"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </rect>

                {/* Additional Gradients & Definitions */}
                <defs>
                  <linearGradient
                    id="refined-energy-flow-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4cd5f7" stopOpacity="0" />
                    <stop offset="20%" stopColor="#4cd5f7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#4cd5f7" stopOpacity="1" />
                    <stop offset="80%" stopColor="#4cd5f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4cd5f7" stopOpacity="0" />
                  </linearGradient>

                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="active-center-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0a2a3f" />
                    <stop offset="50%" stopColor="#3182ce" />
                    <stop offset="100%" stopColor="#4cd5f7" />
                  </linearGradient>

                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear"
                    x1="412.5"
                    x2="412.5"
                    y1="0"
                    y2="96"
                  >
                    <stop stopColor="#3182ce" stopOpacity="0" />
                    <stop offset="1" stopColor="#3182ce" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear"
                    x1="436.5"
                    x2="436.5"
                    y1="0"
                    y2="96"
                  >
                    <stop stopColor="#3182ce" stopOpacity="0" />
                    <stop offset="1" stopColor="#3182ce" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear"
                    x1="554"
                    x2="484"
                    y1="20"
                    y2="96"
                  >
                    <stop stopColor="#3182ce" stopOpacity="0" />
                    <stop offset="1" stopColor="#3182ce" />
                  </linearGradient>

                  <linearGradient
                    id="subtle-linear-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3182ce" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3182ce" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#3182ce" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient
                    id="brain-glow"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    fx="0.5"
                    fy="0.5"
                  >
                    <stop offset="0%" stopColor="#4cd5f7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#4cd5f7" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Row Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {bottomFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index + features.length}
                isActive={activeCardIndex === index + features.length}
                onHover={() => handleCardHover(index + features.length)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

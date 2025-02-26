"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Compass, Hammer, Ruler, Shovel, Wrench, HardHat } from "lucide-react";

export default function Blueprint() {
  const tools = useMemo(
    () => [
      { Icon: Compass, rotation: 15, scale: 0.9 },
      { Icon: Ruler, rotation: 45, scale: 0.8 },
      { Icon: Hammer, rotation: -15, scale: 0.85 },
      { Icon: Wrench, rotation: 30, scale: 0.8 },
      { Icon: HardHat, rotation: 0, scale: 0.9 },
      { Icon: Shovel, rotation: -30, scale: 0.85 },
    ],
    []
  );

  const toolPositions = useMemo(() => {
    return tools.map((tool, index) => {
      const angle = (index * 60) % 360;
      const radius = 35;
      const x =
        Math.round((50 + radius * Math.cos((angle * Math.PI) / 180)) * 1000) /
        1000;
      const y =
        Math.round((50 + radius * Math.sin((angle * Math.PI) / 180)) * 1000) /
        1000;

      return {
        ...tool,
        transform: `
          translate(${x}, ${y})
          scale(${tool.scale})
          rotate(${tool.rotation + angle})
          translate(-12, -12)
        `.trim(),
      };
    });
  }, [tools]);

  return (
    <motion.div
      className="absolute inset-0 bg-[#102841]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="circle"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3"
            markerHeight="3"
          >
            <circle cx="5" cy="5" r="4" className="fill-blue-200/20" />
          </marker>
        </defs>

        <pattern
          id="blueprint"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Fine grid */}
          <path
            d="M 10,0 V 100 M 20,0 V 100 M 30,0 V 100 M 40,0 V 100 M 50,0 V 100 M 60,0 V 100 M 70,0 V 100 M 80,0 V 100 M 90,0 V 100"
            stroke="currentColor"
            className="text-blue-300/10"
            strokeWidth="0.5"
          />
          <path
            d="M 0,10 H 100 M 0,20 H 100 M 0,30 H 100 M 0,40 H 100 M 0,50 H 100 M 0,60 H 100 M 0,70 H 100 M 0,80 H 100 M 0,90 H 100"
            stroke="currentColor"
            className="text-blue-300/10"
            strokeWidth="0.5"
          />

          {/* Main grid */}
          <path
            d="M 0,0 V 100 M 50,0 V 100 M 100,0 V 100"
            stroke="currentColor"
            className="text-blue-200/30"
            strokeWidth="1"
          />
          <path
            d="M 0,0 H 100 M 0,50 H 100 M 0,100 H 100"
            stroke="currentColor"
            className="text-blue-200/30"
            strokeWidth="1"
          />

          {/* Measurement dots */}
          <circle cx="0" cy="0" r="1" className="fill-blue-200/40" />
          <circle cx="50" cy="50" r="1" className="fill-blue-200/40" />
          <circle cx="100" cy="100" r="1" className="fill-blue-200/40" />

          {/* Dimension lines */}
          <path
            d="M 10,10 L 90,90"
            stroke="currentColor"
            className="text-blue-200/20"
            strokeWidth="0.75"
            strokeDasharray="4 2"
          />
          <path
            d="M 90,10 L 10,90"
            stroke="currentColor"
            className="text-blue-200/20"
            strokeWidth="0.75"
            strokeDasharray="4 2"
          />

          {/* Tool placement with memoized transforms */}
          {toolPositions.map((tool, index) => (
            <g
              key={index}
              transform={tool.transform}
              className="text-blue-200/25"
            >
              {React.createElement(tool.Icon, {
                size: 24,
                className: "stroke-current",
              })}
            </g>
          ))}
        </pattern>

        <motion.rect
          width="100%"
          height="100%"
          fill="url(#blueprint)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.001, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Overlay gradient for depth */}
        <rect
          width="100%"
          height="100%"
          fill="url(#gradient)"
          style={{ mixBlendMode: "overlay" }}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 40, 65, 0.1)" />
            <stop offset="50%" stopColor="rgba(16, 40, 65, 0)" />
            <stop offset="100%" stopColor="rgba(16, 40, 65, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

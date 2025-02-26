"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import RevealAnimation from "./reveal-animation";
// import { Tab } from "@/components/ui/tab";

// // Lifecycle stages data
// const lifecycleStages = [
//   {
//     id: "pre-construction",
//     title: "Pre-Construction",
//     description: "Plan and prepare before breaking ground",
//     items: [
//       { name: "Project Tracking", href: "#" },
//       { name: "Estimating", href: "#" },
//       { name: "Proposals", href: "#" },
//     ]
//   },
//   {
//     id: "construction",
//     title: "Construction",
//     description: "Execute projects efficiently and safely",
//     items: [
//       { name: "Project Management", href: "#" },
//       { name: "Job Costing", href: "#" },
//       { name: "Safety", href: "#" },
//       { name: "Plans", href: "#" },
//     ]
//   },
//   {
//     id: "fleet-management",
//     title: "Fleet Management",
//     description: "Optimize your equipment and resources",
//     items: [
//       { name: "Fleet Management", href: "#" },
//       { name: "Fleet Maintenance", href: "#" },
//       { name: "Telematics", href: "#" },
//       { name: "Fuel Tracking", href: "#" },
//     ]
//   },
//   {
//     id: "construction-support",
//     title: "Construction Support",
//     description: "Streamline operations and documentation",
//     items: [
//       { name: "Document Management", href: "#" },
//       { name: "Skills & Certifications", href: "#" },
//       { name: "Smart Forms", href: "#" },
//       { name: "Cloud Hosting", href: "#" },
//     ]
//   }
// ];

// // Project Lifecycle Component
// const ProjectLifecycle = () => {
//   const [activeStage, setActiveStage] = useState(0);

//   // Auto cycle through stages
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStage((prev) => (prev + 1) % lifecycleStages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 4.5 }}
//       className="w-full max-w-7xl mx-auto mt-4 px-4 sm:px-0"
//     >
//       <div className="text-center mb-10">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//           The End-to-End Solution for Automating Civil Construction tasks
//         </h2>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 mb-10">
//         {lifecycleStages.map((stage, index) => (
//           <button
//             key={stage.id}
//             onClick={() => setActiveStage(index)}
//             onMouseEnter={() => setActiveStage(index)}
//             className={`
//               px-6 py-4 text-base sm:text-lg md:text-xl font-medium rounded-lg transition-all duration-200 
//               flex-grow sm:flex-grow-0 
//               ${activeStage === index 
//                 ? "bg-[#0D363C] text-white shadow-md" 
//                 : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}
//             `}
//           >
//             {stage.title}
//           </button>
//         ))}
//       </div>

//       {/* Active Tab Content */}
//       <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
//         <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0D363C] to-[#a2b5c7]"></div>
        
//         <div className="p-6 sm:p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <motion.h3 
//                 key={`title-${activeStage}`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
//               >
//                 {lifecycleStages[activeStage].title}
//               </motion.h3>
//               <motion.p
//                 key={`desc-${activeStage}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="text-lg sm:text-xl text-gray-600 mb-6"
//               >
//                 {lifecycleStages[activeStage].description}
//               </motion.p>
              
//               <motion.div 
//                 key={`items-${activeStage}`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="grid grid-cols-1 sm:grid-cols-2 gap-3"
//               >
//                 {lifecycleStages[activeStage].items.map((item, i) => (
//                   <a 
//                     key={i} 
//                     href={item.href}
//                     className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
//                   >
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#0D363C]"></span>
//                     <span className="text-base sm:text-lg text-gray-800">{item.name}</span>
//                   </a>
//                 ))}
//               </motion.div>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="h-full flex items-center justify-center">
//                 <div className="rounded-lg bg-gray-50 p-4 w-full h-[180px] flex items-center justify-center">
//                   <motion.div
//                     key={`image-${activeStage}`}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-6xl text-center"
//                   >
//                     {/* Icon or illustration for each stage */}
//                     {activeStage === 0 && "🏗️"}
//                     {activeStage === 1 && "🚧"}
//                     {activeStage === 2 && "🚚"}
//                     {activeStage === 3 && "📋"}
//                     <p className="text-xs mt-2 text-gray-500">Illustration</p>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center p-4 border-t border-gray-100">
//           <span className="text-sm sm:text-base text-gray-500">Our integrated platform</span>
//           <Button
//             variant="ghost"
//             size="sm"
//             className="text-[#0D363C] hover:text-[#0D363C]/80 text-base sm:text-lg"
//             onClick={() => window.location.href = '#solutions'}
//           >
//             Explore all solutions
//           </Button>
//         </div>
//       </div>
//       <div className="pb-8"></div>
//     </motion.div>
//   );
// };

export default function HeroSection() {
  const [showReveal, setShowReveal] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShowReveal(false);
      document.body.style.overflow = "auto";
    }, 4000); // Increased to match new animation duration

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      emoji: "📊",

      label: "Estimating Public Bid",
      description: "Using Our Custom ML models",
      color: "bg-[#F4F7F9]",
    },
    {
      emoji: "⏱️",

      label: "Labour and Fleet Management",
      description: "Optimized and streamlined workflows.",
      color: "bg-[#0D363C]",
    },
    {
      emoji: "🤖",

      label: "AIxLawyer",
      description: "A lawyer to manage your Legalities on your fingertips",
      color: "bg-[#D3F3C3]",
    },
    {
      emoji: "🛠️",

      label: "Scheule Manage and track Projects ",
      description: "Our management Your returns.",
      color: "bg-[#F4F7F9]",
    },
  ];

  return (
    <>
      {showReveal && <RevealAnimation />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <div className="bg-[#F4F7F9] w-full border border-black text-black px-4 sm:px-6 lg:px-8 relative">
          {/* Main Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 4,
              type: "spring",
              duration: 1,
              stiffness: 100,
            }}
            className="flex flex-col justify-center items-center w-full min-h-[80vh] py-12"
          >
            {/* Title with larger font sizes */}
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
                <span className="text-gray-800 block sm:inline">
                  The Digital
                </span>{" "}
                <span className="text-gray-900 block sm:inline">
                  Construction Company
                </span>
              </h1>
            </div>

            {/* Subtitle with larger font */}
            <div className="w-full max-w-3xl px-4 sm:px-6">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center leading-relaxed">
                <span className="text-gray-800">
                  Digital workers, AI automation & Machine Learning 
                </span>
                <span className="text-gray-800">
                  Models for Georgia DOT Contractors
                </span>
                <span className="text-gray-800"> for modern builders</span>
              </p>
            </div>

            {/* AI tag with larger font */}
            <div className="text-center mt-4">
              <span className="text-sm sm:text-base md:text-lg text-gray-500 font-bold bg-white/50 px-4 py-2 rounded-full">
                powered by predictive AI technology
              </span>
            </div>

            {/* CTA Button with larger text */}
            <div className="w-full sm:w-auto px-4 sm:px-0 mt-8 sm:mt-12">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-8 sm:px-10 py-6 sm:py-8
                  bg-[#a2b5c7] border border-black
                  text-base sm:text-lg md:text-xl font-semibold
                  hover:bg-[#8fa5b9] transition-all duration-200
                  w-full sm:w-auto min-w-[220px] sm:min-w-[300px]
                  shadow-md hover:shadow-lg"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>

          {/* Project Lifecycle Section - Added to replace the commented cards */}
          {/* <ProjectLifecycle /> */}
        </div>
      </motion.div>
    </>
  );
}

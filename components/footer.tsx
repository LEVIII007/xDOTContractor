"use client";

import React from "react";
import { LinkedinIcon, YoutubeIcon, FacebookIcon } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0D1117] text-gray-300 py-6 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div className="md:col-span-2" variants={columnVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-8 h-8 bg-[#D3F3C3] rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-xl font-semibold text-white">
                XConstructor
              </span>
            </motion.div>
            <p className="text-gray-400">
              Delivering advanced AI-powered solutions for the modern
              construction industry. Streamlined workflows, improved efficiency,
              and enhanced project outcomes.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Client Portfolio",
                "Industry Insights",
                "Events & Webinars",
              ].map((item, i) => (
                <motion.li key={i} variants={linkVariants}>
                  <a href="#" className="hover:text-[#D3F3C3]">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Links */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {[
                "Commercial Construction",
                "Infrastructure Projects",
                "Industrial Facilities",
                "Residential Development",
              ].map((item, i) => (
                <motion.li key={i} variants={linkVariants}>
                  <a href="#" className="hover:text-[#D3F3C3]">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <p className="mb-4">contact@xconstructor.com</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#D3F3C3]">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#D3F3C3]">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#D3F3C3]">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2024 XConstructor, Inc. All rights reserved
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-[#D3F3C3]">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#D3F3C3]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

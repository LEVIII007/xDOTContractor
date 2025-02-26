"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Import icons
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F4F7F9] hover:shadow-sm hover:border-b border-gray-400 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-green-500 rounded-full text-center font-bold text-sm flex items-center justify-center">
              <span>X</span>
              <span className="text-yellow-400">C</span>
            </div>
            <div className="ml-3 font-bold text-base sm:text-xl text-gray-800">
              <Link href="/">
                <span>XDOT</span>
                <span className="text-yellow-400">CONTRACTOR</span>
              </Link>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {["Home", "About", "Upcoming features"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Upcoming features"
                    ? "/upcoming-features"
                    : `/${item.toLowerCase()}`
                }
                className="text-gray-600 hover:text-gray-900 font-semibold text-sm lg:text-base"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex w-[200px] justify-end">
            <Button
              variant={"secondary"}
              size={"lg"}
              className="rounded-full px-4 py-2 bg-[#0D363C] text-white hover:bg-[#124b53] hover:text-gray-100"
              onClick={() => {
                alert("Site under Construstion work in progress. ");
              }}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#124b53]"
      >
        <div className="px-4 py-2 space-y-2">
          {["Home", "About", "Upcoming features"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : item === "Upcoming features"
                  ? "/upcoming-features"
                  : `/${item.toLowerCase()}`
              }
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0D363C] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

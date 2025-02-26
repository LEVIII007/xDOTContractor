"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// UI Components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Icons
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Globe,
} from "lucide-react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#0D363C] to-[#072024] text-white py-24 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,32,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(7,32,36,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-3 px-3 py-1 bg-cyan-500/20 text-cyan-300 border-none"
            >
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
              Contact xdotcontractor
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about implementing AI in your construction workflow? We're here to help transform your processes.
            </p>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 w-8 h-1 rounded mr-3"></span>
                Reach Out to Us
              </h3>
              <p className="text-gray-300 mb-8">
                Interested in implementing AI solutions for your construction
                projects? Our team is ready to assist you with any questions.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[#0A2A2F] border border-[#1B4750]">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:info@xdotcontractor.ai"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      info@xdotcontractor.ai
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[#0A2A2F] border border-[#1B4750]">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[#0A2A2F] border border-[#1B4750]">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Office</p>
                    <address className="not-italic text-white">
                      101 Innovation Drive<br />
                      Suite 500<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-lg bg-[#0A2A2F] border border-[#1B4750] text-gray-300 hover:text-cyan-400 hover:border-cyan-800 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0A2A2F]/80 rounded-xl border border-[#1B4750] p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 w-8 h-1 rounded mr-3"></span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      className="bg-[#072024] border-[#1B4750] focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      className="bg-[#072024] border-[#1B4750] focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-gray-300">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className="bg-[#072024] border-[#1B4750] focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-300">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className="bg-[#072024] border-[#1B4750] focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className="bg-[#072024] border-[#1B4750] focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 text-white resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Services of Interest (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Cost Estimation",
                      "Project Management",
                      "Risk Analysis",
                      "Resource Planning",
                    ].map((service, i) => (
                      <label
                        key={i}
                        className="flex items-center space-x-2 p-2 rounded bg-[#072024] border border-[#1B4750] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="accent-cyan-500"
                          disabled={formStatus === "submitting" || formStatus === "success"}
                        />
                        <span className="text-sm text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className={`
                      w-full px-6 py-5 font-medium flex items-center justify-center
                      ${formStatus === "success" ? "bg-green-600" : "bg-gradient-to-r from-cyan-600 to-blue-600"}
                      transition-all duration-300 rounded-lg
                    `}
                  >
                    <AnimatePresence mode="wait">
                      {formStatus === "idle" && (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </motion.div>
                      )}

                      {formStatus === "submitting" && (
                        <motion.div
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </motion.div>
                      )}

                      {formStatus === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <CheckCircle2 className="mr-2 w-4 h-4" /> Message Sent
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </div>

                <div className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    Terms of Service
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

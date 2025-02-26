"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="bg-gradient-to-b from-[#0D363C] to-[#072024] text-white min-h-screen">
      {/* Hero Section with Circuit Animation Background */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="circuit-grid"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h5 className="text-cyan-400 font-mono tracking-wider mb-3">
              ABOUT xdotcontractor
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Revolutionizing Construction with{" "}
              <span className="text-cyan-400">Intelligent AI</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We&apos;re building the future of construction by melding advanced
              artificial intelligence with decades of industry expertise.
            </p>
          </motion.div>
        </div>

        {/* Animated Tech Element */}
        <div className="absolute -bottom-20 right-0 w-64 h-64 lg:w-96 lg:h-96">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <path
              d="M40,80 L20,40 L60,20 L120,40 L160,20 L180,60 L160,100 L180,140 L140,180 L100,160 L60,180 L20,140 L40,80 Z"
              fill="none"
              stroke="#4cd5f7"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="#4cd5f7"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#4cd5f7"
              strokeWidth="0.5"
              strokeDasharray="2,4"
            />
          </svg>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref} className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At xdotcontractor, we envision a construction industry
                  transformed by intelligent systems that reduce waste, increase
                  precision, and empower human creativity. We believe AI will be
                  the catalyst that propels construction into a new era of
                  efficiency and sustainability.
                </p>

                <div className="p-4 bg-[#0A2A2F] border-l-2 border-cyan-400 rounded">
                  <p className="italic text-cyan-100 font-light">
                    &quot;Our mission is to bridge the gap between cutting-edge
                    technology and practical construction applications, creating
                    solutions that work in the real world&quot;.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video bg-[#072024] rounded-lg overflow-hidden border border-[#1B4750] shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-transparent">
                      <div className="p-8 h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                          AI-Powered Construction
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Predictive project planning",
                            "Real-time resource optimization",
                            "Automated compliance checks",
                            "Risk analysis and mitigation",
                            "Supply chain optimization",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-cyan-400 mr-2">⬢</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech element decoration */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-60">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#4cd5f7"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="#4cd5f7"
                      strokeWidth="0.5"
                      strokeDasharray="1 3"
                    />
                    <path
                      d="M50,5 L50,95 M5,50 L95,50"
                      stroke="#4cd5f7"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-[#072024]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-300">
              We combine proprietary AI algorithms with deep construction domain
              knowledge to create solutions that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Data-Driven Insights",
                description:
                  "Our AI systems analyze millions of data points from previous projects to predict outcomes and identify optimization opportunities.",
                icon: (
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4,2 L20,2 L20,20 L4,20 L4,2 Z M8,12 L8,16 M12,8 L12,16 M16,4 L16,16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
              },
              {
                title: "Continuous Adaptation",
                description:
                  "Our systems learn from each project, continuously improving recommendations and insights for future work.",
                icon: (
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21,12 C21,16.9706 16.9706,21 12,21 C7.02944,21 3,16.9706 3,12 C3,7.02944 7.02944,3 12,3 C16.9706,3 21,7.02944 21,12 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="1 3"
                    />
                    <path
                      d="M12,8 L12,12 L15,15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Human-Centered Design",
                description:
                  "We build technology that amplifies human capabilities rather than replacing them, creating intuitive tools that construction professionals love using.",
                icon: (
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12,3 C14.7614,3 17,5.23858 17,8 C17,10.7614 14.7614,13 12,13 C9.23858,13 7,10.7614 7,8 C7,5.23858 9.23858,3 12,3 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20,21 C20,17.134 16.4183,14 12,14 C7.58172,14 4,17.134 4,21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#0A2A2F] p-6 rounded-lg border border-[#1B4750] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle
                      cx="90"
                      cy="10"
                      r="40"
                      stroke="#4cd5f7"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M10,90 L90,10"
                      stroke="#4cd5f7"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Journey
            </h2>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0D363C] via-cyan-800/30 to-[#0D363C] transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              {[
                {
                  year: "2018",
                  title: "The Foundation",
                  description:
                    "xdotcontractor was founded by a team of construction engineers and AI specialists with a vision to solve the industry's biggest challenges.",
                },
                {
                  year: "2019",
                  title: "First AI Prototype",
                  description:
                    "Launched our first predictive scheduling tool that reduced project delays by 27% in pilot tests.",
                },
                {
                  year: "2021",
                  title: "Series A Funding",
                  description:
                    "Secured $12M in funding to expand our AI capabilities and grow our engineering team.",
                },
                {
                  year: "2023",
                  title: "Industry Recognition",
                  description:
                    "Won 'Most Innovative Construction Technology' at the Global ConTech Awards.",
                },
                {
                  year: "Today",
                  title: "Scaling Impact",
                  description:
                    "Our solutions are now used on over 500 construction sites worldwide, saving an estimated $300M in prevented delays and optimized resources.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex items-center mb-12 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Content */}
                  <div
                    className={`w-5/12 ${
                      i % 2 === 0 ? "text-right pr-8" : "pl-8"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>

                  {/* Year Circle */}
                  <div className="w-2/12 flex justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-[#0A2A2F] border border-cyan-700 flex items-center justify-center z-10">
                      <span className="text-cyan-400 font-mono">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Glimpse */}
      <section className="py-16 bg-[#072024]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            A diverse group of engineers, construction experts, and AI
            specialists united by a passion to transform the construction
            industry.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-md hover:bg-cyan-900/20 transition-colors"
          >
            Meet the Team →
          </motion.button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-t from-[#051518] to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to revolutionize the construction industry with us? Let&apo;s
            build the future together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md transition-colors">
              Contact Us
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors">
              Explore Careers
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .circuit-grid {
          background-image: linear-gradient(
              to right,
              #1b4750 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #1b4750 1px, transparent 1px);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

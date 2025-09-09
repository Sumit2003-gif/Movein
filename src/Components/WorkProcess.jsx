import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Fold slide-in variants for main image
const foldSlideVariants = {
  hidden: { x: -100, scaleX: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Get A Quote",
      description:
        "Start by contacting us for a free, personalized quote. Share your moving details.",
      icon: (
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-work-process-1.svg"
          className="w-10 h-10"
          alt="Get A Quote Icon"
        />
      ),
    },
    {
      id: 2,
      title: "Plan Your Move",
      description:
        "Our team works with you to create a customized moving plan. From packing to logistics.",
      icon: (
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-work-process-2.svg"
          className="w-10 h-10"
          alt="Plan Your Move Icon"
        />
      ),
    },
    {
      id: 3,
      title: "Safe & Secure Moving",
      description:
        "Our expert movers handle your belongings with care, using high-quality packing materials.",
      icon: (
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-work-process-3.svg"
          className="w-10 h-10"
          alt="Safe & Secure Moving Icon"
        />
      ),
    },
    {
      id: 4,
      title: "Unpack & Settle In",
      description:
        "Once we’ve delivered your items, we’ll help with unpacking and setting up, so you can enjoy.",
      icon: (
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-work-process-4.svg"
          className="w-10 h-10"
          alt="Unpack & Settle In Icon"
        />
      ),
    },
  ];

  return (
    <section
      className="relative text-white py-16"
      style={{
        backgroundImage:
          "url('https://demo.awaikenthemes.com/html-preview/movein/images/work-process-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#032c36]/95 z-[-10]"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.p
          className="text-orange-500 uppercase font-semibold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Work Process
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Reliable moving services built{" "}
          <span className="text-orange-500">around you</span>
        </motion.h2>

        <div
          className="flex flex-col md:flex-row items-center justify-between relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className={`relative flex flex-col items-center text-center max-w-xs ${
                  index === 0 || index === 2 ? "mt-[15%]" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {/* Outer dashed circle */}
                <div className="rounded-full border-4 border-dashed border-white flex items-center justify-center w-48 h-48">
                  {/* Inner orange circle */}
                  <div className="bg-orange-500 rounded-full w-36 h-36 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Step Number */}
                <div className="mt-4 bg-white text-orange-500 font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                  {step.id}
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{step.description}</p>
              </motion.div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block mx-4"
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.5 * (index + 1), duration: 0.4 }}
                >
                  <img
                    src="https://demo.awaikenthemes.com/html-preview/movein/images/work-process-arrow.svg"
                    alt="Arrow"
                    className="w-60 h-40"
                    style={{ transform: index === 1 ? "scaleY(-1)" : "none" }}
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

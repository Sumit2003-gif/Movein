import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants for Text and Image Animations
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MoversSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-24 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT - CREATIVE IMAGE COLLAGE */}
        <motion.div
          className="relative flex justify-center items-center group"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
        >
          {/* Background Glow */}
          <div className="absolute w-96 h-96 bg-gradient-to-tr from-orange-300 to-red-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

          {/* Main Image with 3D hover tilt */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/our-skill-image-1.jpg"
            alt="Warehouse Worker"
            className="rounded-2xl object-cover w-72 h-80 md:w-80 md:h-96 shadow-2xl animate-spin-slow transform-gpu group-hover:rotate-3 group-hover:scale-105 transition-all duration-500"
            variants={imageVariants}
          />

          {/* Secondary Image - reverse rotation */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/our-skill-image-2.jpg"
            alt="Packing Worker"
            className="absolute bottom-[-48px] right-[-20px] md:bottom-[-60px] md:right-[-60px] w-48 h-56 md:w-56 md:h-64 rounded-2xl border-8 border-white shadow-xl animate-spin-reverse transform-gpu group-hover:-rotate-3 group-hover:scale-105 transition-all duration-500"
            variants={imageVariants}
          />

          {/* Decorative Circle Icon - floating spin */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/contact-us-circle.svg"
            alt="Decorative Circle"
            className="absolute top-[40%] left-[65%] w-20 h-20 opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* RIGHT - TEXT & SKILLS */}
        <motion.div
          className="px-2 md:px-6"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
        >
          {/* Skill Title */}
          <motion.h5
            className="text-orange-600 font-semibold mb-4 tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Skill
          </motion.h5>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experienced movers with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              passion & precision
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-600 mb-10 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            From meticulous packing to careful transportation, our team ensures
            every step of your move is handled with the highest level of care,
            professionalism, and expertise.
          </motion.p>

          {/* Skills with animated gradient bars */}
          {[{ label: "Real-Time Tracking", value: "85%" }, { label: "Specialized Handling", value: "90%" }, { label: "Customer-Centered Approach", value: "94%" }].map(
            (skill, idx) => (
              <motion.div key={idx} className="mb-6">
                <div className="flex justify-between mb-2 font-semibold text-gray-800">
                  <span>{skill.label}</span>
                  <span>{skill.value}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full shadow-md"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            )
          )}

          {/* CTA Button */}
          <Link to="/contact">          <motion.button
            className="mt-10 bg-gradient-to-r cursor-pointer bg-[#F54A00] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
           Book Service Now
          </motion.button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default MoversSection;

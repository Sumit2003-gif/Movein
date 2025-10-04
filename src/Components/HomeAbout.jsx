import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants for Animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const foldSlideVariants = {
  hidden: { x: -100, scaleX: 0.8, opacity: 0 },
  visible: {
    x: 0,
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <div className="relative bg-white">
      {/* Background shape */}
      <motion.img
        src="https://demo.awaikenthemes.com/html-preview/movein/images/section-bg-shape-1.png"
        className="hidden lg:block absolute right-0 w-64 top-[-140px] pointer-events-none select-none"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Left & Right Sections */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-24 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
          variants={foldSlideVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/about-image.jpg"
            alt="Moving Boxes"
            className="w-full h-auto object-cover block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: 0, y: 0, opacity: 0.5 }}
            whileHover={{ x: "100%", y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-8"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
              alt="Icon"
              className="w-6 h-6"
            />
            <p className="text-lg text-gray-800 font-semibold tracking-wide">About Us</p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Setting new standards in the{" "}
            <span className="text-orange-500">moving industry</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Redefining the moving experience with unmatched professionalism, reliability, and care. We combine innovative solutions, personalized service, and a commitment to excellence to set new benchmarks.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12 mt-6">
            <div>
              <h3 className="text-4xl font-extrabold text-orange-500">92%</h3>
              <p className="text-gray-600 max-w-xs">
                Our customer satisfaction rate stands at an impressive
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-orange-500">1082+</h3>
              <p className="text-gray-600 max-w-xs">
                Helping families and businesses to their new destinations
              </p>
            </div>
          </div>
            <Link to='/about'>
          <button className="mt-8 flex justify-center cursor-pointer items-center gap-3 md:w-1/2  bg-[#F54A00] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white border-2 hover:text-[#F54A00] transition duration-300 shadow-lg">
            More About Us
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/arrow-white.svg"
              alt="Arrow"
              className="w-5 h-5"
            />
          </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto gap-12 bg-gray-50 rounded-t-lg shadow-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="w-full md:w-1/2 flex flex-col space-y-6" variants={itemVariants}>
          <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
            “Moving isn't just about transporting items, it's about embracing change and starting fresh. We're dedicated to ensuring your journey is seamless, so you can focus on settling into your new beginning.”
          </p>

          <div className="flex items-center space-x-4">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/about-owner-signature.png"
              alt="Signature"
              className="w-24 h-auto"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Savannah Nguyen</h3>
              <p className="text-sm text-gray-500">CEO Website</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden" variants={itemVariants}>
          <img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/about-owner-image.jpg"
            alt="Owner"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;

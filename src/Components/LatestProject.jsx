import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Typing animation for the project name text
const typingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
      duration: 2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "auto",
    transition: { duration: 0.5 },
  },
};

const LatestProject = () => {
  const data = [
    { name: "Urban Retreat Relocation", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-1.jpg" },
    { name: "Cityscape Transitions", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-2.jpg" },
    { name: "Luxury Living Moves", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-3.jpg" },
    { name: "Seamless Office Relocation", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-4.jpg" },
    { name: "Suburban Dream Shifts", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-5.jpg" },
    { name: "Corporate Move", image: "https://demo.awaikenthemes.com/html-preview/movein/images/project-6.jpg" },
  ];

  return (
    <div className="px-4 sm:px-6 py-8 md:py-12 max-w-screen-xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-start">
        <div className="w-full md:w-1/2">
          <p className="text-xs sm:text-sm uppercase text-gray-600 flex items-center justify-start gap-1 mb-2">
            <img 
              src="https://demo.awaikenthemes.com/html-preview/movein/images/loader.svg" 
              alt="loader" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" 
            />
            Latest Projects
          </p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[270%] font-bold text-start text-gray-900 -mt-2 -ml-1 md:-mt-3 md:-ml-2"
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Every move counts discover{" "}
            <p className="-mt-2 md:-mt-3">
              our <span className="text-orange-500">latest work</span>
            </p>
          </motion.h1>
        </div>
        <p className="mt-4 md:mt-10 px-0 md:px-10 text-sm sm:text-base text-gray-600 max-w-full md:max-w-2xl mx-auto">
          Take a closer look at our recent projects and see how we turn every move into a seamless experience. From small
          local moves to large-scale relocations, we're proud to showcase the care.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" } },
        }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map((item, index) => (
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-md group"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Image with rotation on hover */}
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6"
            />

            {/* Black shade animation on hover */}
            <motion.div
              className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            />

            {/* Button & Text in center */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Link to="/contact">
                <motion.button
                  className="bg-orange-500 text-white py-2 px-4 rounded-full hover:text-orange-500 cursor-pointer transition duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <img src="https://demo.awaikenthemes.com/html-preview/movein/images/arrow-white.svg" className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Bottom text with typing animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-3 md:p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-white text-sm md:text-lg font-semibold"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {item.name}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestProject;
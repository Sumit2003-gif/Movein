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

const Card = ({ title, description, icon }) => {
  return (
    <motion.div
      className="rounded-lg shadow-xl py-6 flex flex-col items-center space-y-4 w-72 bg-white relative overflow-hidden z-20"
      variants={itemVariants}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="bg-orange-100 p-6 rounded-full transition-all duration-300 ease-in-out">
        <img src={icon} alt="icon" className="w-12 h-12 text-orange-500" />
      </div>

      {/* Title with hover animation */}
      <motion.h3
        className="text-xl font-semibold text-gray-800"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      {/* Description with hover animation */}
      <motion.p
        className="text-center text-gray-600"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Hover effect for button */}
      <motion.button
        className="inline-flex items-center bg-orange-500 hover:bg-white hover:text-orange-500 text-white py-2 px-6 rounded-full mt-4 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Read More
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/arrow-white.svg"
          alt="arrow"
          className="ml-2"
        />
      </motion.button>

      {/* Hover effect for the card */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-orange-500 origin-bottom"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

const HomeService = () => {
  const data = [
    {
      image: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-service-item-1.svg",
      name: "Residential Moving",
      title: "Hassle-free home relocation services tailored to your needs.",
    },
    {
      image: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-service-item-2.svg",
      name: "Commercial Moving",
      title:
        "Professional moving services tailored to business ensuring efficient timely relocations.",
    },
    {
      image: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-service-item-3.svg",
      name: "Specialty Item Moving",
      title:
        "Expert handling for fragile and valuable items, ensuring safe transport of antiques.",
    },
    {
      image: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-service-item-4.svg",
      name: "Eco-Friendly Moving",
      title:
        "Sustainable moving solutions using eco-friendly materials and practices to reduce environmental impact.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-12 lg:px-24 bg-[#062E39] relative">
      {/* Overlay for background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://demo.awaikenthemes.com/html-preview/movein/images/services-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Main Content */}
      <motion.p
        className="flex justify-center items-center text-gray-600 z-20 relative text-xl font-semibold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <img
          src="https://demo.awaikenthemes.com/html-preview/movein/images/loader.svg"
          alt="loader"
          className="mr-2"
        />
        OUR SERVICES
      </motion.p>

      <motion.h1
        className="text-center text-4xl font-semibold text-white mb-10 z-20 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Reliable moving services built
        <br />
        <span className="text-orange-500">around you</span>
      </motion.h1>

      {/* Flex container for the cards */}
      <motion.div
        className="flex justify-center gap-8 z-20 relative flex-wrap sm:flex-nowrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            icon={item.image}
            description={item.title}
            title={item.name}
          />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-10 grid justify-center items-center relative z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="text-lg font-semibold text-white mb-4">
          Expert packing for your move.
        </div>

        <Link
          to="/contact"
          className="text-orange-500 cursor-pointer hover:underline text-lg font-semibold"
        >
          Contact Us Now
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeService;

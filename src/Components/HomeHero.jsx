import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from './Form'; // Import the Form component
import { Link } from 'react-router-dom';

const letterAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const AnimatedText = ({ text, className }) => (
  <motion.span
    aria-label={text}
    role="heading"
    initial="hidden"
    animate="visible"
    className={className}
    style={{
      letterSpacing: '0.03em',
      lineHeight: 1.3, // increased line height for vertical spacing
      display: 'block',
      marginBottom: '0.3em', // space below each line
    }}
  >
    {Array.from(text).map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterAnimation}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.span>
);

const HomeHero = () => {
  const [open, setOpen] = useState(false); // State for form modal visibility

  const images = [
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-1.jpg' },
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-2.jpg' },
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-3.jpg' },
  ];

  const handleGetStartedClick = () => {
    setOpen(true); // Open the modal when button is clicked
  };

  const closeModal = () => {
    setOpen(false); // Close the modal when clicking on close button
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-28 sm:pt-40 text-white"
      style={{
        backgroundImage: `url('https://demo.awaikenthemes.com/html-preview/movein/images/hero-bg.jpg')`,
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#123038] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left Section - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight border-r-4 border-orange-500 pr-6 inline-block mb-6">
            <AnimatedText
              text="Effortless moving"
              className="block text-white whitespace-nowrap text-end"
            />
            <AnimatedText
              text="experiences"
              className="block text-white text-end"
            />
            <AnimatedText
              text="Experts in Hassle-Free"
              className="block mt-4 text-xl text-end sm:text-2xl font-semibold"
            />
            <AnimatedText
              text="Relocation"
              className="block mt-5 text-xl text-end sm:text-2xl font-semibold"
            />
          </h1>
        </motion.div>

        {/* Right Section - Customer Review */}
        <motion.div
          className="md:w-1/2 mt-20 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-md">
            Experience a stress-free move with our professional services. From careful packing to seamless transportation and timely delivery.
          </p>
          <Link to="/blog"> 
          <div className="flex items-center mb-6 space-x-3">
            {images.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={`Customer ${index + 1}`}
                className={`rounded-full border-2 border-orange-500 w-14 h-14 ${
                  index !== 0 ? '-ml-4' : ''
                }`}
              />
            ))}
            <div className="text-left ml-6">
              <p className="font-semibold">Customer Satisfied</p>
              <p className="text-orange-500 font-bold text-lg">4.8 (15K Reviews)</p>
            </div>
          </div>
          </Link>

          <motion.button
            onClick={handleGetStartedClick}
            className="flex items-center bg-orange-500 cursor-pointer hover:bg-orange-600 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Request A Quote
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/arrow-white.svg"
              alt="arrow"
              className="ml-3 w-5 h-5"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for Form */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Get Started with Us</h2>
            <Form />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold cursor-pointer text-gray-600 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Form from './Form';
import { Link } from 'react-router-dom';
import { FiStar, FiCheck } from 'react-icons/fi';

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
      lineHeight: 1.3,
      display: 'block',
      marginBottom: '0.3em',
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
  const [open, setOpen] = useState(false);

  const images = [
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-1.jpg' },
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-2.jpg' },
    { url: 'https://demo.awaikenthemes.com/html-preview/movein/images/author-3.jpg' },
  ];

  const handleGetStartedClick = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 md:py-32 lg:py-40 text-white"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Section - Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-block border-r-4 border-orange-500 pr-4 lg:pr-6 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <AnimatedText
                  text="Effortless moving"
                  className="block text-white whitespace-nowrap text-end"
                />
                <AnimatedText
                  text="experiences"
                  className="block text-white text-end"
                />
              </h1>
            </div>
            
            <div className="mt-4 lg:mt-6 hidden lg:block">
              <AnimatedText
                text="Experts in Hassle-Free"
                className="block text-xl sm:text-2xl font-semibold text-end"
              />
              <AnimatedText
                text="Relocation"
                className="block mt-2 text-xl sm:text-2xl font-semibold text-end"
              />
            </div>

            {/* Mobile CTA Button */}
            <motion.button
              onClick={handleGetStartedClick}
              className="mt-8 lg:hidden w-full max-w-xs mx-auto flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FiCheck className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Right Section - Customer Review */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md lg:max-w-lg">
              Experience a stress-free move with our professional services. From careful packing to seamless transportation and timely delivery.
            </p>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl shadow-xl w-full max-w-md">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current text-xl" />
                ))}
              </div>
              
              <div className="flex items-center justify-center mb-4 space-x-2 sm:space-x-3">
                {images.map((item, index) => (
                  <img
                    key={index}
                    src={item.url}
                    alt={`Customer ${index + 1}`}
                    className={`rounded-full border-2 border-orange-500 w-12 h-12 sm:w-14 sm:h-14 ${
                      index !== 0 ? '-ml-3 sm:-ml-4' : ''
                    }`}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-lg">Customer Satisfied</p>
                <p className="text-orange-400 font-bold text-xl">4.8 (15K Reviews)</p>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              onClick={handleGetStartedClick}
              className="hidden lg:flex mt-8 items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FiCheck className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal for Form */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Get Started with Us</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <Form />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeHero;
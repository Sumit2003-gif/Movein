import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const AboutHeader = ({ name, nametxt }) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://demo.awaikenthemes.com/html-preview/movein/images/page-header-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#0a1929]/70 to-[#123038]"></div>
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#123038] to-transparent"></div>
      
      {/* Floating shapes for visual interest */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-teal-500/10 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* Title with enhanced animation */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 capitalize tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          {name}
        </motion.h1>

        {/* Animated underline */}
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-800 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>

        {/* Enhanced Breadcrumb */}
        <motion.div
          className="flex items-center justify-center gap-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link 
            to="/"
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <FiHome className="text-blue-300 group-hover:text-blue-200 transition-colors" />
            <span className="text-blue-300 group-hover:text-blue-200 transition-colors">Home</span>
          </Link>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 px-3 py-1 bg-blue-500/20 rounded-lg font-medium">{nametxt}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = ({ name, nametxt }) => {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, 
            #123038 20%, 
            transparent 40%, 
            #123038 60%
          ),
          url('https://demo.awaikenthemes.com/html-preview/movein/images/page-header-bg.jpg')
        `,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white top-5">
        {/* Title Animation */}
        <motion.h1
          className="text-5xl font-bold mb-4 capitalize"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {name}
        </motion.h1>

        {/* Breadcrumb Animation */}
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-white/70">Home</span> / <span>{nametxt}</span>
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHeader;

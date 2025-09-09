import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const teamMembers = [
  {
    id: 1,
    src: 'https://demo.awaikenthemes.com/html-preview/movein/images/team-1.jpg',
    alt: 'Man in navy blue suit smiling',
  },
  {
    id: 2,
    src: 'https://demo.awaikenthemes.com/html-preview/movein/images/team-2.jpg',
    alt: 'Man in navy blue suit with arms crossed',
  },
  {
    id: 3,
    src: 'https://demo.awaikenthemes.com/html-preview/movein/images/team-3.jpg',
    alt: 'Woman in black blazer with city background',
  },
  {
    id: 4,
    src: 'https://demo.awaikenthemes.com/html-preview/movein/images/team-4.jpg',
    alt: 'Woman in black blazer and mustard shirt with city background',
  },
];

export default function TeamSection() {
  return (
    <section
      className="bg-[#042C33] py-12 px-4 md:px-12 text-white bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage:
          "url('https://demo.awaikenthemes.com/html-preview/movein/images/team-bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <div className="inline-flex items-center justify-center space-x-2 text-orange-500 text-sm uppercase font-semibold mb-3">
          <img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
            alt="icon"
          />
          <span>Team Member</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Professionals making your{' '}
          <span className="text-orange-500">move seamless</span>
        </h2>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {teamMembers.map(({ id, src, alt }) => (
          <motion.div
            key={id}
            className="relative rounded-3xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-3xl transition-all duration-300 group-hover:scale-105"
            />

            {/* Social Media Buttons */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex space-x-4">
                {/* Facebook Button */}
                <a
                  href="#"
                  className="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition duration-300"
                  aria-label="Facebook"
                >
                  <FiFacebook/>
                </a>

                {/* Instagram Button */}
                <a
                  href="#"
                  className="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition duration-300"
                  aria-label="Instagram"
                >
                  {/* <i className="fab fa-instagram"></i> */}
                  <FiInstagram/>
                </a>

                {/* LinkedIn Button */}
                <a
                  href="#"
                  className="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition duration-300"
                  aria-label="LinkedIn"
                >
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <FiLinkedin/>
                </a>

                {/* Twitter Button */}
                <a
                  href="#"
                  className="text-white bg-orange-500 hover:bg-orange-600 p-2 rounded-full transition duration-300"
                  aria-label="Twitter"
                >
                  {/* <i className="fab fa-twitter"></i> */}
                  <FiTwitter/>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

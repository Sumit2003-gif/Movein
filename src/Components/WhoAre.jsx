import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const features = [
  {
    icon: 'https://demo.awaikenthemes.com/html-preview/movein/images/icon-who-we-are-1.svg',
    text: 'We simplify your move with seamless, efficient services.',
  },
  {
    icon: 'https://demo.awaikenthemes.com/html-preview/movein/images/icon-who-we-are-2.svg',
    text: 'From careful packing to secure delivery, we handle all your needs.',
  },
  {
    icon: 'https://demo.awaikenthemes.com/html-preview/movein/images/icon-who-we-are-3.svg',
    text: 'Our dedicated team ensures safe and reliable transportation services.',
  },
];

const WhoWeAre = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase mb-2">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
              alt="Truck"
              className="w-5 h-5"
            />
            Who We Are
          </div>

          <motion.h2
            className="text-4xl font-bold text-[#123038] leading-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Redefining Relocation <br />
            <span className="text-orange-500">Excellence</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We specialize in delivering seamless moving solutions, tailored to meet your needs
            and designed to exceed expectations. Our dedicated team ensures every detail is
            managed with care, making your relocation experience smooth and hassle-free.
          </motion.p>

          {/* Feature List */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white border rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.3, duration: 0.8 }}
              >
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <img src={item.icon} alt="icon" className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium text-[#123038]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN (Images) */}
        <motion.div
          className="relative grid grid-cols-2 gap-6 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Top Left Image */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/who-we-are-img-1.jpg"
            alt="Moving 1"
            className="rounded-xl object-cover h-72 w-full shadow-xl transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Top Right Image */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/who-we-are-img-2.jpg"
            alt="Moving 2"
            className="rounded-xl object-cover h-72 w-full shadow-xl transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Bottom Left Image */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/who-we-are-img-3.jpg"
            alt="Moving 3"
            className="rounded-xl object-cover h-72 w-full shadow-xl transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Bottom Right Image */}
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/who-we-are-img-4.jpg"
            alt="Moving 4"
            className="rounded-xl object-cover h-56 w-full shadow-xl transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />

          {/* CONTACT US CIRCLE */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/contact-us-circle-dark.svg"
              alt="Contact Us"
              className="w-24 h-24 md:w-28 md:h-28"
              whileHover={{
                scale: 1.1,
                rotate: 360, // Rotate 360 degrees when hovered
              }}
              animate={{
                rotate: [0, 360], // Continuous rotation effect
              }}
              transition={{
                duration: 2, // Controls how long each rotation cycle lasts
                repeat: Infinity, // Makes the animation repeat infinitely
                ease: 'linear', // Smooth, constant speed rotation
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;

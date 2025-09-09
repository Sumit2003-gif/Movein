import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import AboutHeader from '../Components/AboutHero';
import WhoWeAre from '../Components/WhoAre';
import QuoteSection from '../Components/QuteoSection';
import TeamSection from '../Components/TeamSection';
import ServicesSection from '../Components/ServiceSectoion';
import MissionSection from '../Components/MissionSection';

const About = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section>
        <AboutHeader
          name="ABOUT"
          nametxt="About"
        />
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Left Text */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase">
              <img
                src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
                alt="Icon"
                className="w-5 h-5"
              />
              About Us
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Setting new standards in the <span className="text-orange-500">moving industry</span>
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Redefining the moving experience with unmatched professionalism, reliability, and care. We combine innovative solutions, personalized service, and a commitment to excellence to set new benchmarks.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-8 mt-8">
              <div className="text-center sm:text-left">
                <h3 className="text-4xl font-bold text-orange-500">92%</h3>
                <p className="text-gray-600 mt-2">Our customer satisfaction rate stands at impressive</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-4xl font-bold text-orange-500">1082+</h3>
                <p className="text-gray-600 mt-2">Helping families and businesses to their new destinations</p>
              </div>
            </div>

           
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/about-image.jpg"
              alt="About Us"
              className="rounded-3xl shadow-2xl w-full md:w-[90%] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section>
        <QuoteSection />
      </section>

    

      {/* Owner Section */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Left Quote */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-800 italic">
              “Moving isn't just about transporting items, it's about embracing change and starting fresh. We're dedicated to ensuring your journey is seamless, so you can focus on settling into your new beginning.”
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                src="https://demo.awaikenthemes.com/html-preview/movein/images/about-owner-signature.png"
                alt="Signature"
                className="w-24 h-auto"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">Savannah Nguyen</h1>
                <p className="text-sm text-gray-500">CEO Website</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/about-owner-image.jpg"
              alt="Owner"
              className="rounded-3xl shadow-2xl w-full md:w-[90%] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

    

      {/* Team Section */}
      <section>
        <TeamSection />
      </section>

      {/* Who We Are Section */}
      <section>
        <WhoWeAre />
      </section>
    </div>
  );
};

export default About;

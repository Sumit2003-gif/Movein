import React from 'react';
import AboutHeader from '../Components/AboutHero';
import ContactForm from '../Components/ontactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      {/* About Header with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutHeader
          name="CONTACT"
          nametxt="Contact Us"
        />
      </motion.div>

      {/* Contact Form with animation */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </section>

      {/* Map Section with animation */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001215347338!2d-77.03687008464687!3d38.89767617957056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b8e7c00001%3A0x9f6f1e7b8e4c690c!2sWhite%20House!5e0!3m2!1sen!2sus!4v1693324846453!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

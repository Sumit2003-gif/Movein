import React, { useState } from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: { width: "85%", transition: { duration: 1 } },
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    distance: '',
    moveType: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., sending it to an API
    console.log('Form Submitted:', formData);
    alert('Request Submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      date: '',
      distance: '',
      moveType: '',
      serviceType: '',
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textVariants}
      className="bg-white text-black p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Request A Quote
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />

          {/* Email */}
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Phone */}
          <motion.input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Date */}
          <motion.input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          {/* Distance */}
          <motion.input
            type="text"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Distance (km)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />

          {/* Move Type */}
          <motion.select
            name="moveType"
            value={formData.moveType}
            onChange={handleChange}
            className="w-full p-4 border cursor-pointer border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <option value="" disabled>Move Type</option>
            <option value="Local">Local</option>
            <option value="Long Distance">Long Distance</option>
          </motion.select>
        </div>

        {/* Service Type */}
        <motion.select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <option value="" disabled>Service Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </motion.select>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full p-4 bg-orange-500 text-white cursor-pointer  rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Contact Us Now →
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;

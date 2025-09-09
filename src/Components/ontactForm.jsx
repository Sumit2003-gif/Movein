import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    existingMessages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(existingMessages));

    alert("Message submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-white pt-12 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Info Section */}
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          <div className="flex items-center gap-3 text-orange-500 font-semibold text-sm uppercase tracking-wide">
            <FaPhoneAlt className="text-lg" />
            <span>Contact Form</span>
          </div>

          {/* Call To Question */}
          <div className="bg-[#072E39] rounded-2xl p-6 flex items-center gap-6">
            <div className="bg-white rounded-full p-4">
              <img src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-phone.svg" alt="Phone Icon" />
            </div>
            <div className="text-white">
              <p className="text-sm mb-1">Call To Question</p>
              <p className="font-bold text-lg">+91 123 456 789</p>
            </div>
          </div>

          {/* Send E-Mail */}
          <div className="bg-[#072E39] rounded-2xl p-6 flex items-center gap-6">
            <div className="bg-white rounded-full p-4">
              <img src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-mail.svg" alt="Email Icon" />
            </div>
            <div className="text-white">
              <p className="text-sm mb-1">Send E-Mail</p>
              <p className="font-bold text-lg">info@domain.com</p>
            </div>
          </div>

          {/* Visit Anytime */}
          <div className="bg-[#072E39] rounded-2xl p-6 flex items-center gap-6">
            <div className="bg-white rounded-full p-4">
              <img src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-location.svg" alt="Location Icon" />
            </div>
            <div className="text-white">
              <p className="text-sm mb-1">Visit Anytime</p>
              <p className="font-bold text-lg">6391, Elgin ST Delaware</p>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800">Send message <span className="text-orange-500">with us</span></h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Email and Phone Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <FaEnvelopeOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition flex items-center gap-2"
            >
              Submit Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from './Form';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    distance: '',
    moveType: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const Datas = [
    "Timely service with no hidden fees.",
    "Safe, secure transport for your belongings.",
    "Customized moving plans to fit your needs.",
    "Eco-friendly practices for a sustainable move."
  ];

  // Split the title into words to animate each word individually
  const titleWords = [
    "Why we're the preferred",
    "choice",
    "for moving"
  ];

  return (
    <section
      className="relative py-16 px-4 md:px-20 text-white"
      style={{
        backgroundImage: "url('https://demo.awaikenthemes.com/html-preview/movein/images/why-choose-us-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#032c36]/95 z-[-10]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="text-start"
        >
          <h5 className="text-orange-500 font-semibold flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-label="Truck"><img src='https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg'/></span> WHY CHOOSE US
          </h5>

          {/* Header with staggered word animation */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1 } },
            }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h2>

          <ul className="space-y-4 text-base text-white">
            {Datas.map((item, index) => (
              <li className="flex items-start gap-2" key={index}>
                <img
                  src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
                  alt=""
                  aria-hidden="true"
                  className="mt-1"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Form */}
        <Form/>
             </div>
    </section>
  );
};

export default QuoteSection;

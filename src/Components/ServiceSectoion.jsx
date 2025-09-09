import React from 'react';

const ServicesSection = () => {
  const data = [
    { number: 768, name: "residential masterpieces" },
    { number: 970, name: "renovation completed" },
    { number: 98, name: "commercial successes" },
    { number: 46, name: "sustainable construction" },
  ];

  const services = [
    { icon: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-what-we-1.svg", title: "Full Services", desc: "Our services cover every aspect of your need ensuring seamless." },
    { icon: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-what-we-2.svg", title: "Maintenance", desc: "We ensure continuous support and maintenance for your projects." },
    { icon: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-what-we-3.svg", title: "Consultation", desc: "Expert guidance to help you plan and execute efficiently." },
    { icon: "https://demo.awaikenthemes.com/html-preview/movein/images/icon-what-we-4.svg", title: "Safety", desc: "Prioritizing safety and reliability in every service." },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#123038] via-[#045762] to-[#0d262c] relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/what-we-do-image.jpg"
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 rounded-3xl p-10 md:p-16 shadow-2xl bg-white/10 backdrop-blur-md -mt-12 md:mt-0">
          <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase mb-4">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
              alt="Truck Icon"
              className="w-5 h-5"
            />
            What We Do
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Get premium <span className="text-orange-500">services</span>
          </h2>

          <p className="text-white/90 mb-8">
            Discover top-notch services designed to meet your needs with excellence. From tailored
            solutions to expert support, we ensure a seamless and satisfying experience every step
            of the way.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition duration-300">
                <div className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-full">
                  <img src={service.icon} alt={service.title} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">{service.title}</h4>
                  <p className="text-white/80 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Numbers Row */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {data.map((item, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-orange-500">{item.number}+</h1>
            <p className="capitalize text-gray-700 mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

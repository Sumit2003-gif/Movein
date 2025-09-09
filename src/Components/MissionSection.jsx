import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-900 to-teal-800 text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="relative w-full h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/our-approach-image-1.jpg"
              alt="Man with box"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/our-approach-image-2.jpg"
              alt="Man holding box with globe"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Subheading */}
          <h6 className="text-orange-500 flex items-center gap-2 uppercase font-semibold text-sm">
            <img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-sub-heading.svg"
              alt="icon"
              className="w-5 h-5"
            />
            Our Approach
          </h6>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Discover the heart of <span className="text-orange-600">our mission</span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-relaxed text-white/90">
            We provide seamless, stress-free moving experiences tailored to your needs. Every step of your relocation is handled with care, efficiency, and professionalism.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Mission */}
            <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl shadow-md hover:bg-opacity-20 transition duration-300">
              <div className="bg-white w-30 h-10  flex items-center justify-center rounded-full">
                <img
                  src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-our-mission.svg"
                  alt="mission icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1 text-white">Our Mission</h4>
                <p className="text-white/80">Hassle-free, customized moving services with care and efficiency.</p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl shadow-md hover:bg-opacity-20 transition duration-300">
              <div className="bg-white w-30 h-10  flex items-center justify-center rounded-full">
                <img
                  src="https://demo.awaikenthemes.com/html-preview/movein/images/icon-our-mission.svg"
                  alt="vision icon"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1 text-white">Our Vision</h4>
                <p className="text-white/80">Redefine the moving experience by prioritizing customer satisfaction.</p>
              </div>
            </div>
          </div>

          {/* Trusted Box */}
          <div className="mt-8 bg-orange-600 text-white text-center font-bold px-6 py-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
            Trusted by 3500+ Clients for Reliable Moves
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

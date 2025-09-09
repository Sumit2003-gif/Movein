import React from "react";
import { PhoneIcon } from "@heroicons/react/outline"; // For phone icon (install @heroicons/react)
import { TruckIcon } from "@heroicons/react/solid";   // For truck icon

const MovingSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
      {/* Left side - Images */}
      <div className="relative flex-shrink-0">
        {/* Big image */}
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80"
          alt="Man handling box"
          className="rounded-3xl w-[320px] h-[400px] object-cover"
        />
        {/* Small image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
          alt="Couple carrying boxes"
          className="rounded-3xl w-[240px] h-[320px] object-cover absolute top-[220px] left-[-60px] shadow-lg border-4 border-white"
        />
        {/* Call us box */}
        <div className="absolute bottom-8 left-0 bg-[#052C36] text-white px-6 py-5 rounded-xl flex items-center gap-5 shadow-lg border-2 border-white">
          <PhoneIcon className="h-10 w-10" />
          <div>
            <p className="font-semibold text-lg">Call Us Now</p>
            <p className="text-sm">+91 123 456 789</p>
          </div>
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 font-semibold uppercase">
          <TruckIcon className="h-5 w-5 text-orange-500" />
          <span>Real Stories, Real Moves</span>
        </div>

        <h2 className="text-4xl font-extrabold text-[#042f42] mb-5">
          Transforming moves into{" "}
          <span className="text-orange-500">success stories</span>
        </h2>

        <p className="text-gray-700 mb-8">
          At MoveIn, we take pride in delivering seamless moving experiences
          that lead to happy clients. Read the success stories of those who
          trusted us to handle their relocations with care and efficiency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-orange-500" />
            <span>See how we simplify moves.</span>
          </div>
          <div className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-orange-500" />
            <span>Effortless moving with experts.</span>
          </div>
          <div className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-orange-500" />
            <span>Explore our stress moving process.</span>
          </div>
          <div className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5 text-orange-500" />
            <span>Making relocation simple.</span>
          </div>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2">
          Contact Us <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default MovingSection;

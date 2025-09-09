import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#02272f] text-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://demo.awaikenthemes.com/html-preview/movein/images/footer-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className=" p-2">
              <img src="https://demo.awaikenthemes.com/html-preview/movein/images/logo.svg" alt="logo" className="w-40 h-20" />
            </div>
            
          </div>
          <p className="text-sm text-gray-300">
            Reliable. Professional. Hassle-Free Moving Solutions. From start to finish, we're here to make it smooth.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Latest Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-500"><img src='https://demo.awaikenthemes.com/html-preview/movein/images/icon-location.svg'/></span>
              3891 Ranchview Dr. Richardson, California 62639
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500"><img src='https://demo.awaikenthemes.com/html-preview/movein/images/icon-mail.svg'/></span>
              <div>
                <p>support@domainname.com</p>
                <p>info@domain.com</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500"><img src='https://demo.awaikenthemes.com/html-preview/movein/images/icon-phone.svg'/></span>
              +91 123 456 789
            </li>
          </ul>
        </div>

        {/* Column 4 - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm text-gray-300 mb-4">
            Sign up for alerts, our latest blogs, thoughts, and insights
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-sm focus:outline-none text-black"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300 flex items-center justify-center gap-2">
              Subscribe <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-sm text-gray-400 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative z-10">
        <p>Copyright © 2025 All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition">
            🌐
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition">
            f
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition">
            📷
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

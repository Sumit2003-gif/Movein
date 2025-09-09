import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Form from "../Components/Form";

const Navbar = () => {
  const menu = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // State for modal visibility
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const handleGetStartedClick = () => {
    setOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setOpen(false); // Close modal
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const activeItem = menu.findIndex((item) => item.path === location.pathname);
    setActiveIndex(activeItem === -1 ? null : activeItem);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-400 ${
        isScrolled ? 'bg-orange-600 shadow-md text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <Link to="/" onClick={() => setActiveIndex(0)} aria-label="Homepage">
          <motion.img
            src="https://demo.awaikenthemes.com/html-preview/movein/images/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 font-semibold tracking-wide relative">
          {menu.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li key={index} className="relative">
                <Link
                  to={item.path}
                  onClick={() => handleLinkClick(index)}
                  className={`py-2 transition-colors duration-300 ${
                    isActive ? 'text-white font-extrabold' : 'hover:text-orange-300'
                  }`}
                >
                  {item.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded bg-orange-300"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Get Started Button */}
        <div className="hidden md:flex">
          <motion.button
            onClick={handleGetStartedClick}
            className="flex items-center border cursor-pointer border-white text-white px-6 py-2 rounded-md font-semibold tracking-wide hover:bg-white hover:text-orange-600 transition-colors duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <motion.img
              src="https://demo.awaikenthemes.com/html-preview/movein/images/arrow-white.svg"
              alt="arrow"
              className="inline-block ml-3 w-5 h-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none z-50 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 rounded transition-transform duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : 'bg-white'
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100 bg-white'
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-transform duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`md:hidden shadow-lg border-t ${
              isScrolled
                ? 'bg-orange-600 border-orange-700 text-white'
                : 'bg-transparent border-white text-white'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col space-y-5 px-6 py-8 font-semibold tracking-wide">
              {menu.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(index)}
                      className={`block py-2 transition-colors duration-300 ${
                        isActive ? 'font-extrabold underline' : 'hover:underline'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <motion.button
                  onClick={handleGetStartedClick}
                  className="w-full py-3 rounded-md font-semibold cursor-pointer tracking-wide transition-colors duration-300 shadow-sm border border-white text-white hover:bg-white hover:text-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Form */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-2 rounded-md shadow-lg max-w-lg w-full relative">
            <h2 className="text-2xl font-semibold ">Get Started with Us</h2>
            <Form />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl cursor-pointer font-bold text-gray-600 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

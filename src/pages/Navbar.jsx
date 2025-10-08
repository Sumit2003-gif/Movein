import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Form from "../Components/Form";
import { FiShoppingBag, FiSearch, FiX, FiMenu } from 'react-icons/fi';

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
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const modalRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback((index) => {
    setActiveIndex(index);
    setMobileMenuOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const handleGetStartedClick = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => {
      if (!prev) {
        // Focus on search input when opening
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      return !prev;
    });
  }, []);

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
    setSearchOpen(false);
    setSearchQuery('');
  }, [searchQuery]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        setSearchOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open, closeModal]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const activeItem = menu.findIndex((item) => item.path === location.pathname);
    setActiveIndex(activeItem === -1 ? null : activeItem);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, handleScroll, menu]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          isScrolled ? 'bg-orange-600 shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link to="/" onClick={() => setActiveIndex(0)} aria-label="Homepage" className='m-4'>
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
                      isActive ? 'text-white font-extrabold' : 'text-white hover:text-orange-200'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
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

          {/* Right side: Search, Cart, Get Started */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-orange-500 transition-colors duration-300"
              aria-label="Toggle search"
            >
              <FiSearch className="text-white text-xl" />
            </button>

            {/* Cart */}
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-orange-500 transition-colors duration-300"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <FiShoppingBag className="text-white text-xl" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Get Started Button */}
            <motion.button
              onClick={handleGetStartedClick}
              className="flex items-center border border-white text-white px-6 py-2 rounded-md font-semibold tracking-wide hover:bg-white hover:text-orange-600 transition-colors duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get started"
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:block hidden bg-orange-700 px-6 md:px-10 py-4"
            >
              <form onSubmit={handleSearchSubmit} className="max-w-7xl mx-auto flex">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-400 transition-colors duration-300"
                  aria-label="Submit search"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-orange-600 shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 py-4 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-400 transition-colors duration-300"
                    aria-label="Submit search"
                  >
                    Search
                  </button>
                </form>

                {/* Mobile Navigation */}
                <ul className="flex flex-col space-y-3 font-semibold tracking-wide">
                  {menu.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <li key={index}>
                        <Link
                          to={item.path}
                          onClick={() => handleLinkClick(index)}
                          className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
                            isActive 
                              ? 'bg-orange-700 text-white font-extrabold' 
                              : 'text-white hover:bg-orange-700'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile Cart */}
                <div className="flex items-center justify-between py-3 px-4 border-t border-orange-500">
                  <div className="flex items-center">
                    <FiShoppingBag className="text-white text-xl mr-2" />
                    <span className="text-white">
                      Cart: {cartCount} items
                    </span>
                  </div>
                  <Link
                    to="/cart"
                    className="text-orange-200 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View Cart
                  </Link>
                </div>

                {/* Mobile Get Started Button */}
                <motion.button
                  onClick={handleGetStartedClick}
                  className="w-full py-3 rounded-md font-semibold tracking-wide transition-colors duration-300 shadow-sm border border-white text-white hover:bg-white hover:text-orange-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal for Form */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Get Started with Us</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Close modal"
                  >
                    <FiX className="text-gray-600 text-xl" />
                  </button>
                </div>
                <Form />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
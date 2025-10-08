import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogData from './BlogData';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 sm:mb-12">
          <div className="mb-6 md:mb-0 md:max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#032c36]">
              Expert Advice for Stress– <span className="text-orange-500">Free Moves</span>
            </h2>
          </div>
          <div className="md:max-w-xl">
            <p className="text-gray-600 text-base sm:text-lg">
              Stay informed with our expert moving advice and practical insights. Whether you're relocating locally or long-distance, our blog has everything you need to make your journey seamless.
            </p>
            <Link 
              to="/blog" 
              className="mt-4 inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
            >
              View All Articles
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogData.slice(0, 3).map((post, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="overflow-hidden rounded-2xl sm:rounded-[30px] w-full h-48 sm:h-56 md:h-64">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <div className="mt-4 sm:mt-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {post.date || 'May 15, 2023'}
                    </span>
                    <span className="flex items-center">
                      <FiUser className="mr-1" />
                      {post.author || 'Admin'}
                    </span>
                  </div>
                  
                  <motion.h3
                    className="text-lg sm:text-xl font-semibold text-[#032c36] line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                  >
                    {post.title}
                  </motion.h3>
                  
                  <p className="mt-2 text-gray-600 text-sm sm:text-base line-clamp-3">
                    {post.excerpt || 'Discover essential tips and tricks to make your moving experience smooth and hassle-free.'}
                  </p>
                  
                  <div className="mt-3 flex items-center text-orange-500 font-medium text-sm">
                    <span>Read More</span>
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
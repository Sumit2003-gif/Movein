import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // For navigation
import blogData from './BlogData'; // Assuming BlogData is an array of blog objects

const BlogSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#032c36]">
            Expert Advice for Stress– <span className="text-orange-500">Free Moves</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 max-w-xl text-gray-600 text-base md:text-lg">
          Stay informed with our expert moving advice and practical insights. Whether you're relocating locally or long-distance, our blog has everything you need to make your journey seamless.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogData.slice(0, 3).map((post, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <Link to={`/blog/${post.id}`} className="block">
              <div className="overflow-hidden rounded-[30px] w-full h-64">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <motion.h3
                className="mt-4 text-lg md:text-xl font-semibold text-[#032c36]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                {post.title}
              </motion.h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

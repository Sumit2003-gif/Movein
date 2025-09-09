import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import blogData from './BlogData'; // Assuming the blog data is imported here

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog)
    return (
      <div className="p-10 text-center text-red-600 font-semibold text-xl">
        Blog not found.
      </div>
    );

  return (
    <div className="text-gray-900 bg-white">
      {/* Top Header Section */}
      <motion.div
        className="w-full h-[400px] flex flex-col justify-center items-center text-white text-center relative shadow-md"
        style={{
          backgroundImage: `url("https://demo.awaikenthemes.com/html-preview/movein/images/page-header-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold z-10 drop-shadow-lg max-w-4xl px-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {blog.title}
        </motion.h1>
        <div className="z-10 flex items-center gap-6 mt-4 text-sm md:text-base font-medium opacity-90">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            {blog.author}
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm-.5-13h1v6h-1v-6zm0 8h1v2h-1v-2z" />
            </svg>
            {blog.date}
          </span>
        </div>
      </motion.div>

      {/* Blog Content with Larger Side Image */}
      <motion.article
        className="max-w-6xl mx-auto px-6 md:px-0 py-16 flex flex-col md:flex-row md:items-start gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Image */}
        <motion.div
          className="flex-shrink-0 w-full md:w-[40%] rounded-3xl overflow-hidden shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={blog.fullImage}
            alt="Full blog visual"
            className="w-full h-auto object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-gray-800 md:w-[60%]">
          <motion.p
            className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-700 font-serif mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {blog.intro}
          </motion.p>
          <motion.p
            className="text-base md:text-lg leading-relaxed tracking-wide text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {blog.content}
          </motion.p>
        </div>
      </motion.article>

      {/* Comments Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-0 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-gray-800 border-b border-gray-300 pb-3">
          Comments ({blog.comments.length})
        </h3>
        <div className="space-y-8">
          {blog.comments.length ? (
            blog.comments.map((comment, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="font-semibold text-orange-700 mb-2">{comment.user}</p>
                <p className="text-gray-700 leading-relaxed">{comment.message}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 italic">No comments yet. Be the first!</p>
          )}
        </div>
      </motion.section>

      {/* Final Thoughts */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-0 pb-20 pt-12 border-t border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h3 className="text-3xl font-bold mb-6 text-gray-900">Final Thoughts</h3>
        <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-700 font-serif">
          {blog.conclusion}
        </p>
      </motion.section>
    </div>
  );
};

export default BlogDetail;

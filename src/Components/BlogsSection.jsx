import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const BlogCard = ({ image, title, id }) => {
  return (
    <motion.div
      className="rounded-2xl shadow-lg hover:shadow-xl duration-300 overflow-hidden bg-white"
      initial={{ opacity: 0, y: 30 }} // Start from below and hidden
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide to original position
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Image Section */}
      <div className="w-full h-60 sm:h-72 md:h-80">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        
        {/* Read More Link */}
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline"
        >
          Read More <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;

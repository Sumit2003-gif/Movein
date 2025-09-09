import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import AboutHeader from '../Components/AboutHero';
import BlogCard from '../Components/BlogsSection'; // ✅ Import BlogCard
import blogData from '../Components/BlogData';

const Blog = () => {
  return (
    <div>
      <section>
        <AboutHeader name="BLOGS" nametxt="Blogs" />
      </section>

      <section>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Stagger the animations of the children (BlogCards)
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          {blogData.map((item) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Final state when the card is in view
              transition={{ duration: 0.8 }}
            >
              <BlogCard
                id={item.id}
                image={item.image}
                title={item.title}
                link={`/blog/${item.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;

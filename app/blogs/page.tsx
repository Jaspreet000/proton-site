"use client"
import React from 'react';
import Layout from '@/components/main_comps/BlogLay';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Enhancing the Privacy in AI',
    description: 'Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...',
    image: '/assets/images/privacy.jpeg',
    link: '/blog/ai-machine-learning',
  },
  {
    id: 2,
    title: 'The Rise of Custom Generative AI',
    description: 'In the ever-evolving landscape of artificial intelligence (AI), custom generative AI solutions are emerging...',
    image: '/assets/images/genai.png',
    link: '/blog/data-science-best-practices',
  },
  // Add more blog objects here
  {
    id: 3,
    title: 'Pi 2.5: The Next Leap in Personal AI Evolution',
    description: 'In the ever-evolving landscape of artificial intelligence, the quest for creating smarter, more capable language models...',
    image: '/assets/images/aiimg.jpg',
    link: '/blog/business-intelligence-solutions',
  },
];

const BlogPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Latest Insights</h1>
          <p className="text-lg md:text-xl mb-10">Stay informed with our expert blog articles on AI, data science, and business intelligence.</p>
          <a href="/blog" className="inline-block bg-black text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
            Explore More
          </a>
        </motion.div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <motion.a
              key={blog.id}
              href={blog.link}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: blog.id * 0.1 }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full object-cover h-56"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{blog.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{blog.description}</p>
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                  Read More
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

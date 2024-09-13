"use client"
import React from 'react';
import Layout from '@/components/main_comps/BlogLay';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useBlogContext } from '@/context/BlogContext';

const blogs = [
  {
    id: 1,
    title: 'Enhancing the Privacy in AI',
    description: 'Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...',
    image: '/assets/images/privacy.jpeg',
    link: '/blogs/ai-machine-learning',
  },
  {
    id: 2,
    title: 'The Rise of Custom Generative AI',
    description: 'In the ever-evolving landscape of artificial intelligence (AI), custom generative AI solutions are emerging...',
    image: '/assets/images/genai.png',
    link: '/blogs/data-science-best-practices',
  },
  // Add more blog objects here
  {
    id: 3,
    title: 'Pi 2.5: The Next Leap in Personal AI Evolution',
    description: 'In the ever-evolving landscape of artificial intelligence, the quest for creating smarter, more capable language models...',
    image: '/assets/images/aiimg.jpg',
    link: '/blogs/business-intelligence-solutions',
  },
  {
    id: 4,
    title: 'Advantages of small large language models',
    description: 'In a landscape where ‘bigger is better’ often takes center stage, it’s worth exploring the advantages that smaller Language...',
    image: '/assets/images/llm.jpg',
    link: '/blogs/business-intelligence-solutions',
  },
  {
    id: 5,
    title: 'Evolving Landscape of Data Orchestration',
    description: 'When it comes to the dynamic world of data orchestration, one open-source tool has stood the test of time: Apache Airflow. Its...',
    image: '/assets/images/dataorc.png',
    link: '/blogs/business-intelligence-solutions',
  },
  {
    id: 6,
    title: 'Mastering the Data Modeling',
    description: 'Privacy in AI has become a paramount concern in today’s digital landscape. As artificial intelligence (AI) continues...',
    image: '/assets/images/bigdata.jpg',
    link: '/blogs/business-intelligence-solutions',
  },
];

const BlogPage = () => {
  const { setSelectedBlog } = useBlogContext();

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
            src="/assets/slack/brain.jpg"
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
            <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            onClick={() => setSelectedBlog(blog)} // Set the selected blog in context
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
            </Link>
          ))}
        </div>
      </section>
    </Layout>

  );
};

export default BlogPage;

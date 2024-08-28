"use client"
import React from 'react'
import Layout from '@/components/main_comps/BlogLay';
import { motion } from 'framer-motion';
import Image from 'next/image';


const blogs = [
  {
    id: 1,
    title: 'Understanding AI & Machine Learning',
    description: 'A comprehensive guide to understanding the basics and advancements in AI and Machine Learning.',
    image: '/images/blog1.jpg',
    link: '/blog/ai-machine-learning',
  },
  {
    id: 2,
    title: 'Data Science Best Practices',
    description: 'Learn the best practices in data science to ensure accurate and actionable insights.',
    image: '/images/blog2.jpg',
    link: '/blog/data-science-best-practices',
  },
  // Add more blog objects here
  {
    id: 3,
    title: 'Data Science Best Practices',
    description: 'Learn the best practices in data science to ensure accurate and actionable insights.',
    image: '/images/blog2.jpg',
    link: '/blog/data-science-best-practices',
  },
    {
      id: 4,
      title: 'Data Science Best Practices',
      description: 'Learn the best practices in data science to ensure accurate and actionable insights.',
      image: '/images/blog2.jpg',
      link: '/blog/data-science-best-practices',
    },
    {
      id: 5,
      title: 'Data Science Best Practices',
      description: 'Learn the best practices in data science to ensure accurate and actionable insights.',
      image: '/images/blog2.jpg',
      link: '/blog/data-science-best-practices',
    },
    {
      id: 6,
      title: 'Data Science Best Practices',
      description: 'Learn the best practices in data science to ensure accurate and actionable insights.',
      image: '/images/blog2.jpg',
      link: '/blog/data-science-best-practices',
    },
];

const page = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg mb-8">Stay updated with the latest trends, insights, and tips from the world of technology, AI, and more.</p>
          <a href={blogs[0].link} className="inline-block bg-accent text-lg font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-primary transition">
            Read Featured Post
          </a>
        </motion.div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-10 bg-lightBg dark:bg-darkBg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <motion.a
              key={blog.id}
              href={blog.link}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: blog.id * 0.1 }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{blog.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{blog.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default page


// pages/blog.js





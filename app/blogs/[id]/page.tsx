"use client";
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useBlogContext } from '@/context/BlogContext';
import Layout from '@/components/main_comps/BlogLay';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams(); // Get the dynamic route id
  const { selectedBlog } = useBlogContext();
  const router = useRouter();

  // Redirect if no blog is selected in context
  useEffect(() => {
    if (!selectedBlog) {
      router.push('/blogs'); // Redirect back to blogs list if no selected blog
    }
  }, [selectedBlog, router]);

  if (!selectedBlog) return null; // Render nothing while redirecting

  const { title, content, image, by, bydesc, pubon } = selectedBlog;

  const formattedContent = content.split('<br/>').map((item: string, index: number) => (
    <p key={index}>
      {item}
      <br />
    </p>
  ));

  // Feedback state
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real-world apps, you would send feedback to your server here.
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative bg-gray-100 dark:bg-gray-900 text-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto"
        >
          <div className="relative">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={500}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h1 className="text-5xl text-white font-bold">{title}</h1>
            </div>
          </div>

          <div className="mt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-300"
            >
              {formattedContent}
            </motion.p>
          </div>

          {/* Author Section */}
          <div className="mt-16 flex items-center space-x-4">
            <Image
              src="/assets/images/author-avatar.jpeg" // Replace with correct author image path
              alt={by}
              width={100}
              height={100}
              className="rounded-full shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{by}</h2>
              <p className="text-md text-gray-600 dark:text-gray-400">{bydesc}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Published on: {pubon}</p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">We'd love your feedback!</h3>
            {submitted ? (
              <p className="text-lg text-green-600">Thank you for your feedback!</p>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                  placeholder="Share your thoughts on this blog..."
                  rows={6}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default BlogDetail;

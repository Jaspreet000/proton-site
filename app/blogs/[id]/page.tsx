"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useBlogContext } from '@/context/BlogContext';
import Layout from '@/components/main_comps/BlogLay';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const { title, content, image } = selectedBlog;

  const formattedContent = content.split('<br/>').map((item: string, index: number) => (
    <p key={index}>
      {item}
      <br />
    </p>
  ));

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
        </motion.div>
      </section>
    </Layout>
  );
};

export default BlogDetail;

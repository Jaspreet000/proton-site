"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useBlogContext } from "@/context/BlogContext";
import Layout from "@/components/main_comps/BlogLay";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageTimeTracking } from "@/hooks/usePageTimeTracking";

const BlogDetail = () => {
  usePageTimeTracking("Blog Detail Page");

  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();
  const { selectedBlog } = useBlogContext();
  const router = useRouter();

  useEffect(() => {
    if (!selectedBlog) {
      router.push("/blogs"); // Redirect if no selected blog
    }
  }, [selectedBlog, router]);

  if (!selectedBlog) return null;

  const { title, content, image, by, bydesc, pubon, avatar } = selectedBlog;

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
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
              <h1 className="text-5xl text-center text-white font-bold">{title}</h1>
            </div>
          </div>

          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-300 prose prose-lg dark:prose-dark w-full m-0 p-0 max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Author Section */}
          <div className="mt-16 flex flex-col md:flex-row lg:flex-row sm:flex-row items-center space-x-4">
            <Image
              src={avatar}
              alt={by}
              width={100}
              height={100}
              className="rounded-full shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                {by}
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-400">
                {bydesc}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Published on:{" "}
                {new Date(pubon).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              We&apos;d love your feedback!
            </h3>
            {submitted ? (
              <p className="text-lg text-green-600">
                Thank you for your feedback!
              </p>
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
                  className="mt-4 px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition"
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

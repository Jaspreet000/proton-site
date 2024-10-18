"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/main_comps/Navbar";
import Lottie from "react-lottie"; 
import loadingAnimation from '@/public/loading.json';
import mammoth from 'mammoth'; // For DOCX content conversion
import dynamic from 'next/dynamic'; // Dynamically load ReactQuill

// Dynamically load ReactQuill for text editing
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // ReactQuill styles

const EditBlogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]); // Store all blogs
  const [selectedBlog, setSelectedBlog] = useState(null); // Store the selected blog to edit
  const [step, setStep] = useState(0); // Track the current step
  const [loading, setLoading] = useState(true);
  const [newImageFile, setNewImageFile] = useState(null); // For new image upload
  const [newAvatarFile, setNewAvatarFile] = useState(null); // For avatar upload
  const [editableHtmlContent, setEditableHtmlContent] = useState(""); // Blog content from database (HTML)
  const [docxFile, setDocxFile] = useState(null); // DOCX file upload

  // Fetch all blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.data); // Assuming response returns { success: true, data: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Handle selecting a blog for editing
  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
    setEditableHtmlContent(blog.content || ""); // Load content from the database (HTML)
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBlog({ ...selectedBlog, [name]: value });
  };

  // Handle new image upload
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewImageFile(e.target.files[0]);
    }
  };

  // Handle new avatar upload
  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewAvatarFile(e.target.files[0]);
    }
  };

  // Handle DOCX upload and conversion to HTML
  const handleDocxChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setDocxFile(file);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setEditableHtmlContent(result.value); // Set HTML content for editing
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Handle saving the edited blog
  const handleSave = async () => {
    // Create form data and save the edited blog with the new image/avatar if provided
    const formData = new FormData();
    formData.append("title", selectedBlog.title);
    formData.append("pubon", selectedBlog.pubon);
    formData.append("content", editableHtmlContent);
    formData.append("by", selectedBlog.by);
    formData.append("bydesc", selectedBlog.bydesc);

    if (newImageFile) formData.append("image", newImageFile);
    if (newAvatarFile) formData.append("avatar", newAvatarFile);

    try {
      const response = await fetch(`/api/blogs/${selectedBlog.id}`, {
        method: "PUT",
        body: formData,
      });
      if (response.ok) {
        alert("Blog updated successfully!");
        setSelectedBlog(null); // Clear form after saving
        router.push("/blogs"); // Redirect to blogs list
      } else {
        alert("Error updating blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Lottie options={loadingOptions} height={200} width={200} />
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <>
        <nav className="flex justify-center"> <Navbar /> </nav>
        <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 mt-11">
          <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-md">
            {/* Step 1: Blog Title and Publication Date */}
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Blog Title & Publication Date</h2>
                <input
                  type="text"
                  name="title"
                  value={selectedBlog.title}
                  onChange={handleChange}
                  placeholder="Enter Blog Title"
                  className="w-full p-3 border rounded-md shadow-sm"
                />
                <input
                  type="date"
                  name="pubon"
                  value={selectedBlog.pubon}
                  onChange={handleChange}
                  placeholder="Select Publication Date"
                  className="w-full p-3 mt-4 border rounded-md shadow-sm"
                />
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setStep(step + 1)}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Image Upload and Preview */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Blog Image</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3>Old Image:</h3>
                    <Image src={selectedBlog.image} alt="Old Image" width={150} height={100} />
                  </div>
                  <div>
                    {newImageFile && (
                      <div>
                        <h3>New Image Preview:</h3>
                        <Image src={URL.createObjectURL(newImageFile)} alt="New Image" width={150} height={100} />
                      </div>
                    )}
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-4"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(step - 1)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                    Previous
                  </button>
                  <button onClick={() => setStep(step + 1)} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Author Information and Avatar */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Author Information & Avatar</h2>
                <input
                  type="text"
                  name="by"
                  value={selectedBlog.by}
                  onChange={handleChange}
                  placeholder="Enter Author Name"
                  className="w-full p-3 border rounded-md shadow-sm"
                />
                <textarea
                  name="bydesc"
                  value={selectedBlog.bydesc}
                  onChange={handleChange}
                  placeholder="Enter Author Description"
                  className="w-full p-3 mt-4 border rounded-md shadow-sm"
                />
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3>Old Avatar:</h3>
                    <Image src={selectedBlog.avatar} alt="Old Avatar" width={100} height={100} />
                  </div>
                  <div>
                    {newAvatarFile && (
                      <div>
                        <h3>New Avatar Preview:</h3>
                        <Image src={URL.createObjectURL(newAvatarFile)} alt="New Avatar" width={100} height={100} />
                      </div>
                    )}
                    <input
                      type="file"
                      onChange={handleAvatarChange}
                      className="mt-4"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(step - 1)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                    Previous
                  </button>
                  <button onClick={() => setStep(step + 1)} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                    Preview
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Content Preview and DOCX Upload */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Content & Preview</h2>
                <ReactQuill
                  value={editableHtmlContent}
                  onChange={setEditableHtmlContent}
                  className="mb-4"
                />
                <input
                  type="file"
                  onChange={handleDocxChange}
                  className="mb-4"
                  accept=".docx"
                />
                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(step - 1)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                    Previous
                  </button>
                  <button onClick={handleSave} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition">
                    Save Changes
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Render the blogs as cards with fixed dimensions
  return (
    <>
      <nav className="flex justify-center"> <Navbar /> </nav>
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              onClick={() => handleSelectBlog(blog)}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full object-cover h-56"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {blog.title.length > 37 ? blog.title.substring(0, 37) + "..." : blog.title}
                </h3>
                <p className="text-gray-700 text-justify dark:text-gray-400">
                  {stripHtmlTags(blog.content).substring(0, 120) + "..."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

// Utility to remove HTML tags from content
const stripHtmlTags = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};

export default EditBlogs;

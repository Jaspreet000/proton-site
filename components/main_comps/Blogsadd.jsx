"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Blogsadd = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    content: "",
    by: "Harsh Gupta",
    bydesc: "Harsh Gupta has more than 8 years of experience...",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.title || !formData.description || !formData.content) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        alert("Blog added successfully!");
        setFormData({
          title: "",
          description: "",
          image: "",
          link: "",
          content: "",
          by: "Harsh Gupta",
          bydesc: "Harsh Gupta has more than 8 years of experience...",
        });
        router.push("/blogs");
      } else {
        const errorData = await response.json();
        console.log('Response error:', errorData); // Log the detailed error message
        alert(`Error adding blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Error adding blog.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              id="image"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Link (optional)</label>
            <input
              id="link"
              name="link"
              placeholder="Link"
              value={formData.link}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              value={formData.content}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-3 rounded-md"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blogsadd;

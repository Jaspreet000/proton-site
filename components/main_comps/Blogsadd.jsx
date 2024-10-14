"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

const Blogsadd = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Check session status

  // Loader state to show while waiting for authentication
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    id: "", // Add ID field as per schema
    title: "",
    description: "",
    image: "",
    link: "",
    content: "",
    pubon: "", // Publication date field
    by: "",
    bydesc: "",
  });

  // Check authentication status and redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // Redirect to login page
    } else if (status === "authenticated") {
      setLoading(false); // Stop loader once authenticated
    }
  }, [status]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id || !formData.title || !formData.description || !formData.content || !formData.pubon) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Blog added successfully!");
        setFormData({
          id: "",
          title: "",
          description: "",
          image: "",
          link: "",
          content: "",
          pubon: "",
          by: "Harsh Gupta",
          bydesc: "Harsh Gupta has more than 8 years of experience...",
        });
        router.push("/blogs"); // Redirect to blogs page
      } else {
        const errorData = await response.json();
        console.log("Response error:", errorData);
        alert(`Error adding blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Error adding blog.");
    }
  };

  // Show a loading spinner while waiting for authentication check
  if (loading || status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  // Render the form if authenticated
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              Blog ID
            </label>
            <input
              id="id"
              name="id"
              placeholder="Unique Blog ID"
              value={formData.id}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
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
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
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
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link (optional)
            </label>
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
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
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
          <div>
            <label htmlFor="by" className="block text-sm font-medium text-gray-700">
              Author Name
            </label>
            <textarea
              id="by"
              name="by"
              placeholder="Author Name"
              value={formData.by}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="bydesc" className="block text-sm font-medium text-gray-700">
              Author Description
            </label>
            <textarea
              id="bydesc"
              name="bydesc"
              placeholder="Author Description"
              value={formData.bydesc}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="pubon" className="block text-sm font-medium text-gray-700">
              Publication Date
            </label>
            <input
              type="date"
              id="pubon"
              name="pubon"
              value={formData.pubon}
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

"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';

// Metadata for SEO optimization
export const metadata = {
  title: "Add Blog | Proton Datalabs",
  description: "Create and add new blogs to Proton Datalabs platform. Share your knowledge on AI, Data Science, and Business Intelligence.",
  keywords: "Add blog, Proton Datalabs, blog creation, AI blog, Data Science blog, Business Intelligence blog, create blog post, blog platform, publish blog",
};

const AddBlog = () => {
  const { data: session } = useSession(); // Fetch the session data

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    content: '',
    by: 'Harsh Gupta',
    bydesc: 'Harsh Gupta has more than 8 years of experience...',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.content) {
      alert('Please fill out all required fields.');
      return;
    }

    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Blog added successfully!');
    } else {
      alert('Error adding blog.');
    }
  };

  // Check if the user is authenticated
  if (!session) {
    return <p>Please log in to add a blog.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <label htmlFor="link">Link (optional)</label>
      <input
        id="link"
        name="link"
        placeholder="Link"
        value={formData.link}
        onChange={handleChange}
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default AddBlog;

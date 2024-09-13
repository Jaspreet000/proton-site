"use client"
import { createContext, useContext, useState } from 'react';

// Create the context
const BlogContext = createContext();

// Create the provider component
export const BlogProvider = ({ children }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// Create a hook to use the BlogContext
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Lottie from "react-lottie"; 
import successAnimation from "@/public/success.json";
import loadingAnimation from "@/public/loading.json";
import { Navbar } from "@/components/main_comps/Navbar";

const Blogsadd = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    link: "",
    content: "",
    pubon: "",
    by: "",
    bydesc: "",
  });

  const [step, setStep] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false); 

  useEffect(() => {
    if (status === "unauthenticated") signIn();
    else if (status === "authenticated") setLoading(false);
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);
  const jumpToStep = (targetStep: number) => setStep(targetStep);

  const handleSubmit = async () => {
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
        setIsSuccess(true); 
        setTimeout(() => router.push("/blogs"), 2000); 
      } else {
        alert("Error adding blog. Please click again on the Save Blog button.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  // Define the combined steps
  const steps = [
    {
      label: "Basic Information",
      fields: [
        { label: "Blog ID", name: "id", type: "text", placeholder: "Unique Blog ID" },
        { label: "Title", name: "title", type: "text", placeholder: "Blog Title" },
        { label: "Description", name: "description", type: "textarea", placeholder: "Description" },
      ],
    },
    {
      label: "Media and Content",
      fields: [
        { label: "Image URL", name: "image", type: "text", placeholder: "Image URL" },
        { label: "Link", name: "link", type: "text", placeholder: "Link (optional)" },
        { label: "Content", name: "content", type: "textarea", placeholder: "Content" },
      ],
    },
    {
      label: "Author and Publication",
      fields: [
        { label: "Author Name", name: "by", type: "text", placeholder: "Author Name" },
        { label: "Author Description", name: "bydesc", type: "textarea", placeholder: "Author Description" },
        { label: "Publication Date", name: "pubon", type: "date", placeholder: "Publication Date" },
      ],
    },
  ];

  const successOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
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

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Lottie options={successOptions} height={200} width={200} />
      </div>
    );
  }

  return (
    <>
      <nav className="flex justify-center"> <Navbar/> </nav>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 mt-11">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-md">
          <div className="flex items-center mb-4">
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="ml-2 text-sm">{step + 1} / {steps.length}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={step} 
          >
            <h2 className="text-2xl font-bold mb-4">{steps[step].label}</h2>
            {steps[step].fields.map((field) => (
              <div key={field.name} className="mb-4">
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  />
                )}
              </div>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-between">
            {step > 0 && (
              <button
                onClick={handlePrevious}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Previous
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition"
              >
                Save Blog
              </button>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Jump to Step:</label>
            <select
              value={step}
              onChange={(e) => jumpToStep(Number(e.target.value))}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            >
              {steps.map((_, index) => (
                <option key={index} value={index}>
                  Step {index + 1}: {steps[index].label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogsadd;

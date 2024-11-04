// components/ApplyPage.tsx
"use client";
import { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/main_comps/Navbar";
import { usePageTimeTracking } from "@/hooks/usePageTimeTracking";

const ApplyPage = ({ params }) => {
  usePageTimeTracking("Apply Page");
  const { titleee } = params;

  const [selectedPosition, setSelectedPosition] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [motivation, setMotivation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Position:", selectedPosition);
    console.log("Resume:", resumeFile);
    console.log("Motivation:", motivation);
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  return (
    <>
      <Navbar />
      <div className="pt-[74px]">
        <AuroraBackground>
          <div className="bg-white shadow-xl rounded-2xl p-8 top-6 max-w-xl w-full sm:w-[95%] h-[90%] backdrop-blur-md z-10">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Apply for Position {titleee}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="position"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Select Position
                </label>
                <select
                  id="position"
                  name="position"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out"
                >
                  <option value="" disabled>
                    Choose a position
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="relative">
                <label
                  htmlFor="resume"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="motivation"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Why are you applying for this position?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out"
                  placeholder="Your response here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-950 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Submit Application
              </button>
            </form>
          </div>
        </AuroraBackground>
      </div>
    </>
  );
};

export default ApplyPage;

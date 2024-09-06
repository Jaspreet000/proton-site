"use client";
import Layout from "../../../components/main_comps/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaAws,
  FaCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRobot,
  FaChartLine,
  FaCog,
  FaBrain,
  FaPython,
  FaChartPie,
  FaJs,
  FaDatabase,
  FaTable,
  FaLightbulb,
  FaDocker,
  FaCloud,
} from "react-icons/fa";
import { EvervaultCard, Icon } from "../../../components/ui/evervault-card";
import {
  SiMongodb,
  SiFlutter,
  SiPostgresql,
  SiKubernetes,
  SiDjango,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

interface TechCategory {
  name: string;
  icon: IconType;
  color: string;
}

interface TechCategories {
  Languages: TechCategory[];
  Frameworks: TechCategory[];
  Databases: TechCategory[];
  DevOps: TechCategory[];
}

export default function AI() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const techCategories: TechCategories = {
    Languages: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    Frameworks: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
    Databases: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: FaDatabase, color: "#00758F" },
    ],
    DevOps: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" }
    ],
  };

  useEffect(() => {
    // Reduce the playback speed to 0.5x (50% of the normal speed)
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).playbackRate = 0.5;
    }
  }, []);
  return (
    <Layout title="Digital Product Development">
      {/* Intro Section */}

      {/* AI Overview Section with Video */}
      {/* <div className="relative w-full h-[400px] md:h-[600px] mb-16">
        <motion.video
          ref={videoRef} // Attach the ref to the video element
          src="/assets/dpdev.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter blur-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-2 flex flex-col gap-4 items-center justify-center h-full"
        >
          <h2 className="text-6xl font-bold mb-4 text-white">
          Digital Product Development
          </h2>
          <div className="max-w-4xl bg-gray-100 bg-opacity-70 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
            We bring your digital product ideas to life with innovative, custom-built solutions that align with your business goals. Our team of designers and developers collaborates with you from concept to deployment, ensuring that your product is user-friendly, market-ready, and designed to drive growth and customer satisfaction.
            </p>
          </div>
        </motion.div>
      </div> */}

<div className="relative w-full h-[400px] md:h-[600px] mb-16">
        <motion.video
          ref={videoRef}
          src="/assets/dpdev.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-2 flex flex-col gap-4 items-center justify-center h-full px-4 md:px-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white text-center">
          Digital Product Development
          </h2>
          <div className="max-w-lg md:max-w-4xl bg-gray-100 bg-opacity-70 p-4 md:p-8 rounded-lg shadow-lg">
            <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
            We bring your digital product ideas to life with innovative, custom-built solutions that align with your business goals. Our team of designers and developers collaborates with you from concept to deployment, ensuring that your product is user-friendly, market-ready, and designed to drive growth and customer satisfaction.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex md:flex flex-wrap md:justify-center">
        {[
          {
            icon: FaCode,
            title: "Custom Software Development",
            description:
              "Develop tailored software solutions that align with your business goals.",
          },
          {
            icon: FaMobileAlt,
            title: "Mobile App Development",
            description:
              "Create intuitive, user-friendly mobile apps that engage your customers.",
          },
          {
            icon: FaProjectDiagram,
            title: "End-to-End Project Management",
            description:
              "From concept to deployment, we manage every aspect of your digital product’s lifecycle.",
          },
        ].map((feature, index) => (
          <div key={index} className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[24rem] mb-4 sm:w-[80%]">

            <EvervaultCard text={<feature.icon className="h-12 w-12 text-primary-color" />} />

            <div className="text-center w-full font-bold flex justify-center items-center text-xl">
              {feature.title}
            </div>



            <h2 className="dark:text-white text-justify text-black mt-4 text-sm font-light">
              {feature.description}
            </h2>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Our Tech Stack</h3>
        <div className="flex justify-center sm:space-x-0 sm:flex-wrap space-x-4 mb-8">
          {Object.keys(techCategories).map((category) => (
            <motion.button
              key={category}
              className={`py-2 px-4 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-primary-color text-white bg-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {techCategories[selectedCategory as keyof TechCategories].map(
              (tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -50 }} // Changed y to x for left to right animation
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.0, delay: index * 0.0 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <tech.icon
                    size={48}
                    style={{ color: tech.color }}
                    className="mb-4"
                  />
                  <h4 className="text-xl font-semibold">{tech.name}</h4>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}


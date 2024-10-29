"use client";
import Layout from "../../../components/main_comps/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  FaChartLine,
  FaCog,
  FaBrain,
  FaPython,
  FaChartPie,
  FaJs,
  FaAws,
  FaDatabase,
  FaTable,
  FaLightbulb,
  FaDocker,
  FaCloud,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiPostgresql,
  SiKubernetes,
  SiGraphql,
  SiPytorch,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiAzuredevops,
} from "react-icons/si";
import { EvervaultCard, Icon } from "../../../components/ui/evervault-card";
import { IconType } from "react-icons/lib";
import { usePageTimeTracking } from '@/hooks/usePageTimeTracking';

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
  usePageTimeTracking("AI & Machine Learning Service Page");
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const techCategories: TechCategories = {
    Languages: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    Frameworks: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ],
    Databases: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: FaDatabase, color: "#00758F" },
    ],
    DevOps: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Azure DevOps", icon: SiAzuredevops, color: "#0078D7" },
    ],
  };

  useEffect(() => {
    // Reduce the playback speed to 0.5x (50% of the normal speed)
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).playbackRate = 0.5;
    }
  }, []);
  return (
    <Layout title="AI & Machine Learning">

<Head>
        <meta
          name="description"
          content="Explore AI & Machine Learning services including customized enterprise LLMs, AI-driven business process automation, and advanced RAG-based solutions tailored to enhance your organization's efficiency."
        />
        <meta
          name="keywords"
          content="AI, Machine Learning, Enterprise LLMs, AI Business Automation, RAG Solutions, GPT-4, LLaMA 2, Data Analytics"
        />
      </Head>

      <div className="relative w-full h-[400px] md:h-[600px] mb-16">
        <motion.img
          
          src="/assets/slack/advance.jpg"
          
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-2 flex flex-col gap-4 items-center justify-center h-full px-4 md:px-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white text-center">
            AI & Machine Learning
          </h2>
          <div className="max-w-lg md:max-w-4xl bg-gray-100 bg-opacity-70 p-4 md:p-8 rounded-lg shadow-lg">
            <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
              We leverage a range of leading foundation LLMs, including GPT-3.5,
              GPT-4, LLaMA 2, Claude, Mistral 7B, and more. By integrating these
              advanced models with your unique data and existing systems, we
              create bespoke solutions that enhance your organization&apos;s
              operations and provide a competitive edge to your products or
              services. Our team of AI automation specialists and business
              analysts collaborates with you to analyze and identify key areas
              where these powerful language models can drive significant
              improvements, ensuring tailored and impactful results.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-6 py-8 px-4">
        {[
          {
            icon: FaRobot,
            title: "Customized Enterprise LLMs",
            description:
              "We leverage leading foundation LLMs like GPT-4, LLaMA 2, and more, integrated with your unique data to create bespoke solutions. These tailored models give you a competitive edge, precisely crafted to meet your specific needs.",
          },
          {
            icon: FaCog,
            title: "AI Business Process Automation",
            description:
              "Automate repetitive tasks and streamline complex processes with our AI-driven automation solutions. These innovations not only save time and reduce costs but also enhance decision-making and overall productivity.",
          },
          {
            icon: FaBrain,
            title: "RAG-Based Solutions",
            description:
              "We utilize RAG technology, combining foundation LLMs with your proprietary data to deliver highly relevant and tailored responses. Our expertise in prompt engineering ensures outputs that offer a distinct competitive advantage.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative mb-4 sm:w-[80%]"
          >
            <EvervaultCard
              text={<feature.icon className="h-12 w-12 text-primary-color" />}
            />

            <div className="text-center w-full font-bold flex justify-center items-center text-xl">
              {feature.title}
            </div>

            <h2 className="dark:text-white text-justify text-gray-500 mt-4 text-base font-light">
              {feature.description}
            </h2>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Our Tech Stack</h3>
        <div className="flex justify-center flex-wrap gap-3 sm:gap-2 mb-8">
          {Object.keys(techCategories).map((category) => (
            <motion.button
              key={category}
              className={`py-2 px-4 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }} // Slight scale increase on hover for better UI experience
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

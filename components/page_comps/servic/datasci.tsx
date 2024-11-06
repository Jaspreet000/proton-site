"use client";
import Layout from "../../../components/main_comps/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  FaChartLine,
  FaBrain,
  FaAws,
  FaDocker,
  FaCloud,
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiPostgresql,
  SiKubernetes,
  SiGraphql,
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


const DIComponent: React.FC = () => {

  usePageTimeTracking("Data Science & Engineering Service Page");
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
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
    Databases: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiPostgresql, color: "#D82C20" },
    ],
    DevOps: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ],
  };

  useEffect(() => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).playbackRate = 0.5;
    }
  }, []);

  return (
    <Layout title="Data Science & Engineering">


      <div className="relative w-full h-[400px] md:h-[600px] mb-16">
        <motion.img
          
          src="/assets/slack/analysis.jpg"
          
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-2 flex flex-col gap-4 items-center justify-center h-full px-4 md:px-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white text-center">
            Data Science & Engineering
          </h2>
          <div className="max-w-lg md:max-w-4xl bg-gray-100 bg-opacity-70 p-4 md:p-8 rounded-lg shadow-lg">
            <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
              We specialize in harnessing the power of data to unlock growth and
              streamline operations for the businesses. Our team of data
              scientists and engineers craft tailored solutions that turn raw
              data into actionable insights, enabling your organization to make
              smarter, data-driven decisions and stay ahead in a competitive
              market.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-6 py-8 px-4">
        {[
          {
            icon: FaChartLine,
            title: "Predictive Analytics",
            description:
              "Harness the power of data to forecast trends, optimize operations, and drive strategic growth with our predictive analytics solutions. Our machine learning models transform your data into actionable insights, helping you stay ahead in a competitive market.",
          },
          {
            icon: FaCloud,
            title: "Cloud Services",
            description:
              "Our comprehensive cloud services create an all-inclusive, end-to-end data infrastructure. This infrastructure allows your organization to store, manage, and utilize your data to its maximum potential in a straightforward and scalable manner.",
          },
          {
            icon: FaBrain,
            title: "Tailored Data Pipeline Solutions",
            description:
              "We design and implement robust, customized data pipelines tailored to your organization's needs. Using advanced tools like Apache Spark, Kafka, Hadoop etc, we ensure efficient data flow and processing.",
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

export default DIComponent;
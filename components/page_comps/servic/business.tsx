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
} from "react-icons/fa";
import {
  SiMongodb,
  SiTableau,
  SiPostgresql,
  SiKubernetes,
  SiPowerbi,
  SiMicrosoftexcel,
  SiDatabricks,
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
  Analytics: TechCategory[];
  Databases: TechCategory[];
  DevOps: TechCategory[];
}



const BIComponent: React.FC = () => {

  usePageTimeTracking("Business Intelligence Solutions Service Page");
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const techCategories: TechCategories = {
    Languages: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    Analytics: [
      { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "#217346" },
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
    ],
    Databases: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: FaDatabase, color: "#00758F" },
    ],
    DevOps: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    ],
  };

  useEffect(() => {
    // Reduce the playback speed to 0.5x (50% of the normal speed)
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).playbackRate = 0.5;
    }
  }, []);
  return (
    <Layout title="Business Intelligence Solutions">

      {/* Intro Section */}

      <div className="relative w-full h-[400px] md:h-[600px] mb-16">
        <motion.img
          
          src="/assets/slack/graphs.jpg"
          
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-2 flex flex-col gap-4 items-center justify-center h-full px-4 md:px-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white text-center">
            Business Intelligence Solutions
          </h2>
          <div className="max-w-lg md:max-w-4xl bg-gray-100 bg-opacity-70 p-4 md:p-8 rounded-lg shadow-lg">
            <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
              Our BI solutions are designed to transform raw data into powerful,
              actionable insights that drive business growth and efficiency. We
              work closely with companies to develop custom BI strategies that
              provide real-time visibility into performance, KPI&apos;s,
              metrics, empowering you to make informed decisions with
              confidence.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-6 py-8 px-4">
        {[
          {
            icon: FaChartLine,
            title: "Custom BI Solutions",
            description:
              "Develop tailored BI strategies for real-time visibility into performance metrics.",
          },
          {
            icon: FaTable,
            title: "Dashboard & Reporting",
            description:
              "Design and implement dashboards that provide insights at a glance.",
          },
          {
            icon: FaLightbulb,
            title: "Real-time Analytics",
            description:
              "Empower decision-making with real-time insights into key business metrics.",
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

export default BIComponent;
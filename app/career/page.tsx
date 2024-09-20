"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBusinessTime,
  FaChalkboardTeacher,
  FaHeart,
} from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { Navbar } from "@/components/main_comps/Navbar";
import Image from "next/image";
import Footer from "@/components/main_comps/Footerr";
import Link from "next/link";

const page = () => {
  return (
    <>
      <nav className="flex justify-center">
        {" "}
        <Navbar />{" "}
      </nav>
      <div className="relative bg-gray-50 py-16 px-6 pt-[74px] sm:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/slack/threepplmeet.jpg"
            alt="Why Work With Us Background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          />
        </div>

        {/* Hero Section */}
        <motion.section
          className="relative text-center mb-24 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl font-extrabold text-gray-900 leading-[0px] mb-14 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Shape Your Future with Us
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-justify text-gray-500 w-[100%] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            ProtonDataLabs is at the forefront of AI and Data Science
            innovation. Our team, made up of top software engineers, seasoned
            business experts, and leading AI & Data engineers, brings over a
            decade of experience from different corners of the corporate world.
            We&apos;ve seen what works and what doesn&apos;t, and we&apos;ve built
            our company around the strategies that truly work.
            <br /> Our goal is simple: make our clients succeed. We focus on
            what really matters, turning big visions into reality by tackling
            the most crucial steps to solve business problems effectively.
            We&apos;re all about action that makes a real difference, not just
            busy work.
            <br /> Our team, spread across Canada, the USA, Europe, and India,
            embodies diversity and expertise. We pride ourselves on attracting
            and nurturing top-tier talent whose professional values resonate
            with our core principles.
          </motion.p>
        </motion.section>

        {/* Why Work With Us Section */}
        <section className="relative mb-24 grid grid-cols-1 lg:grid-cols-1 gap-16 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-justify text-gray-600">
              Here, you are not just part of a team; you are part of a vision to
              redefine the interplay between AI and human ingenuity. We are
              committed to creating AI solutions that automate the mundane,
              freeing up human intellect for creativity and innovation. This is
              your chance to be at the cutting edge of technology, developing
              solutions that not only address key business challenges but also
              set new benchmarks in technological advancement.
            </p>

            {/* Cards for the List
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🚀", text: "Cutting-Edge Projects" },
                { icon: "💼", text: "Competitive Compensation" },
                { icon: "🌍", text: "Global Opportunities" },
                { icon: "🎓", text: "Continuous Learning" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-2xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 + index * 0.2 }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-lg text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </section>

        {/* Positions Section with Accordion */}
        <section className="relative mb-24 z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Full-Stack Engineer",
                icon: FaLaptopCode,
                description:
                  "Develop cutting-edge software with a focus on scalability, reliability, and performance.",
                heading: "full-stack-engineer",
              },
              {
                title: "Data Scientist",
                icon: FaBusinessTime,
                description:
                  "Leverage data to derive actionable insights and drive strategic decisions.",
                heading: "data-scientist",
              },
              {
                title: "AI Researcher",
                icon: FaChalkboardTeacher,
                description:
                  "Push the boundaries of AI research and bring innovative solutions to real-world problems.",
                heading: "ai-researcher",
              },
            ].map((position, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 relative top-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-950 text-white p-5 rounded-full shadow-md">
                    <position.icon className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mt-10">
                  {position.title}
                </h3>
                <p className="mt-4 text-gray-600">{position.description}</p>
                <Link
                  href={`/career/${position.heading}`}
                  className="mt-8 inline-block bg-blue-950 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-900 transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;

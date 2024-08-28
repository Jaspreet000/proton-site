"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCogs,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our Expertise
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Explore the wide range of services we offer, tailored to meet the
          needs of a rapidly evolving digital landscape. We deliver solutions
          that drive innovation and success.
        </motion.p>
      </motion.section>

      {/* Services Section with Animated Cards */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: "AI & Machine Learning",
            icon: FaRobot,
            description:
              "Leverage AI and ML to automate processes and unlock valuable insights from your data.",
          },
          {
            title: "Cloud Computing",
            icon: FaCloud,
            description:
              "Scalable cloud solutions that enhance your IT infrastructure and reduce costs.",
          },
          {
            title: "Cybersecurity",
            icon: FaShieldAlt,
            description:
              "Comprehensive security services to protect your digital assets from threats.",
          },
          {
            title: "Data Analytics",
            icon: FaChartLine,
            description:
              "Transform data into actionable insights to drive business growth and innovation.",
          },
          {
            title: "Software Development",
            icon: FaLaptopCode,
            description:
              "Custom software solutions that meet your unique business requirements.",
          },
          {
            title: "DevOps",
            icon: FaCogs,
            description:
              "Automated and streamlined operations to accelerate your development cycle.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + index * 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 text-white p-5 rounded-full shadow-md">
                <service.icon className="text-4xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Parallax Section for Key Service Highlight */}
      <section
        className="relative bg-fixed bg-cover bg-center py-24 mb-24"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            At ProtonDataLabs, we combine cutting-edge technology with industry
            expertise to deliver solutions that drive your business forward. Our
            team is committed to excellence, innovation, and delivering
            measurable results.
          </motion.p>
        </div>
      </section>

      {/* Client Testimonials with Sliding Animation */}
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <motion.div
          className="flex flex-col lg:flex-row justify-center space-y-12 lg:space-y-0 lg:space-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              name: "Company A",
              testimonial:
                "ProtonDataLabs helped us streamline our operations with their AI solutions. The impact on our efficiency and bottom line has been phenomenal.",
            },
            {
              name: "Company B",
              testimonial:
                "Their cybersecurity services are top-notch. We feel secure knowing that our digital assets are protected by ProtonDataLabs.",
            },
            {
              name: "Company C",
              testimonial:
                "The data analytics insights provided by ProtonDataLabs have been invaluable in shaping our business strategy. We couldn&rsquo;t be happier with the results.",
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-md"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + index * 0.2 }}
            >
              <p className="text-gray-600 mb-4">&quot;{client.testimonial}&quot;</p>
              <h3 className="text-xl font-semibold text-gray-700">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-24">
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Discover how our services can transform your business. Get in touch
          with us today to discuss your needs.
        </motion.p>
        <motion.a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default page;

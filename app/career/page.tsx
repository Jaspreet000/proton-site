"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBusinessTime, FaChalkboardTeacher, FaHeart } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { Navbar } from '@/components/main_comps/Navbar';
import Image from 'next/image';
import Footer from '@/components/main_comps/Footerr';

const page = () => {
  return (
    <>
      <nav className="flex justify-center"> <Navbar /> </nav>
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
            Shape Your Future with Us
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            At Proton DataLabs, we&apos;re driven by innovation and a passion for AI and data science. Join us in creating impactful solutions that change the world.
          </motion.p>
        </motion.section>

        {/* Animated Grid for Why Work With Us */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-600">
              We foster a dynamic environment where creativity thrives, and your potential is unleashed. With a culture centered on learning, growth, and collaboration, ProtonDataLabs is the place where your ideas can flourish.
            </p>
            <ul className="mt-6 space-y-4 text-lg text-gray-600">
              <li>🚀 Cutting-Edge Projects</li>
              <li>💼 Competitive Compensation</li>
              <li>🌍 Global Opportunities</li>
              <li>🎓 Continuous Learning</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <Image
              src="/images/careers-why-us.png"
              alt="Why Work With Us"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              width={500} // adjust width and height as needed
              height={300}
            />
          </motion.div>
        </section>

        {/* Positions Section with Accordion */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Software Engineer',
                icon: FaLaptopCode,
                description: 'Develop cutting-edge software with a focus on scalability, reliability, and performance.',
              },
              {
                title: 'Data Scientist',
                icon: FaBusinessTime,
                description: 'Leverage data to derive actionable insights and drive strategic decisions.',
              },
              {
                title: 'AI Researcher',
                icon: FaChalkboardTeacher,
                description: 'Push the boundaries of AI research and bring innovative solutions to real-world problems.',
              },
            ].map((position, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white p-5 rounded-full shadow-md">
                    <position.icon className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mt-10">{position.title}</h3>
                <p className="mt-4 text-gray-600">{position.description}</p>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="mt-6 flex justify-center items-center text-blue-600">
                        {open ? 'Show Less' : 'Show More'}
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 text-sm text-gray-500">
                        <p>Additional details about the role, responsibilities, and qualifications can be included here. This allows the user to engage with more information without overwhelming them upfront.</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/apply"
                  className="mt-8 inline-block bg-blue-600 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default page;

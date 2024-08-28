"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaCogs, FaUsers, FaMedal, FaRegSmile } from 'react-icons/fa';
import { Navbar } from '@/components/main_comps/Navbar';

const page = () => {
  return (
    <>
    <nav className="flex justify-center"> <Navbar/> </nav>
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 sm:px-12 lg:px-24">
      {/* Company Overview Section */}
      <section className="text-center mb-20">
        <motion.h1
          className="text-5xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About ProtonDataLabs
        </motion.h1>
        <motion.p
          className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          At ProtonDataLabs, we specialize in guiding small and mid-sized companies with limited IT resources toward achieving full tech capabilities. Our seasoned team of AI experts, data scientists, and engineers are dedicated to crafting custom solutions that empower your business to compete with industry leaders. We understand the unique challenges you face and partner with you every step of the way, ensuring that innovation is within your reach, regardless of your current tech infrastructure. With ProtonDataLabs, you’re not just surviving the digital age—you’re thriving in it.
        </motion.p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mb-20 flex flex-col lg:flex-row lg:space-x-12 items-center">
        <motion.div
          className="flex-1 order-2 lg:order-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaLightbulb className="mr-4 text-blue-500" />
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 text-justify">
          Our vision is to be the leading guide and partner for small and mid-sized companies, helping them achieve success through innovative, custom-built tech solutions that level the playing field in today’s fast-paced digital world.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 order-1 lg:order-2 mb-12 lg:mb-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/vision-mission.png"
            alt="Vision and Mission"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="flex-1 order-3 lg:order-3"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaBullseye className="mr-4 text-blue-500" />
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 text-justify">
            At ProtonDataLabs, our mission is to empower small and mid-sized businesses with the full tech capabilities they need to thrive, providing custom AI and data solutions that drive growth, conserve resources, and unlock new opportunities.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['CEO', 'CTO', 'CFO', 'Lead Data Scientist'].map((role, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-40 w-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-md mb-4 relative overflow-hidden">
                <img
                  src={`/images/team-${index + 1}.png`}
                  alt={role}
                  className="w-full h-full object-cover absolute inset-0 opacity-50"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">{role}</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut malesuada ultricies, urna ex faucibus arcu.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Innovation', icon: FaCogs, description: 'We are at the forefront of AI and data science innovation, consistently pushing boundaries to deliver cutting-edge solutions.' },
            { title: 'Integrity', icon: FaMedal, description: 'Transparency, honesty, and ethical practices are at the core of everything we do.' },
            { title: 'Customer-Centricity', icon: FaUsers, description: 'Our clients are our priority. We work tirelessly to exceed their expectations and ensure their success.' },
            { title: 'Excellence', icon: FaMedal, description: 'We strive for excellence in every project, delivering solutions that are not only effective but also of the highest quality.' },
            { title: 'Collaboration', icon: FaUsers, description: 'We believe in the power of teamwork. Our collaborative approach ensures that we deliver the best results for our clients.' },
            { title: 'Continuous Learning', icon: FaRegSmile, description: 'We are committed to continuous learning and development, staying ahead of industry trends and advancements.' }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-lg shadow-lg relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 + index * 0.2 }}
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white p-4 rounded-full shadow-md">
                  <value.icon className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-12">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
          </div>
          <div className="relative space-y-12 pl-12">
            {[
              { year: '2018', event: 'Founded ProtonDataLabs with a mission to democratize AI and data science for businesses.' },
              { year: '2019', event: 'Launched our first AI-powered product, adopted by multiple Fortune 500 companies.' },
              { year: '2020', event: 'Expanded our team and opened new offices in Europe and Asia.' },
              { year: '2021', event: 'Awarded “Best AI Startup” by Tech Innovators.' },
              { year: '2022', event: 'Launched ProtonDataLabs Academy, offering free AI and data science courses.' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 + index * 0.3 }}
              >
                <div className="h-10 w-10 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                  {milestone.year}
                </div>
                <p className="ml-8 text-lg text-gray-700">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Contact us today to discover how our AI and data science solutions can drive your success.
        </motion.p>
        <motion.a
          href="/contact"
          className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
    </>
  )
}

export default page

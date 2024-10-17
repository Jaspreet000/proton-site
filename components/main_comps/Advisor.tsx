"use client"
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function AdvisorSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Advisor
        </motion.h2>
        <motion.div 
          className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-900 font-semibold">Advisor</div>
            <Link
              href="https://harbert.auburn.edu/directory/pankush-kalgotra.html"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline transition duration-300 ease-in-out transform hover:translate-x-1"
            >
              Dr. Pankush Kalgotra
            </Link>
            <p className="mt-2 text-gray-500">
              Assistant Professor at Auburn University
            </p>
            <p className="mt-4 text-gray-600">
              We are proud to have Dr. Pankush Kalgotra as an advisor at Proton DataLabs. Dr. Kalgotra is an Assistant Professor at Auburn University, specializing in healthcare analytics, network science, and the intersection of neuroimaging and information systems. His extensive research, which has been widely published and cited in leading academic journals, brings invaluable expertise to our team.
            </p>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-gray-600"
                >
                  <p className="mt-4 text-gray-600">
                    With a PhD in Management Science and Information Systems, Dr. Kalgotra&apos;s guidance enhances our ability to provide cutting-edge AI, data science, and business intelligence solutions to small and mid-sized companies.
                  </p>
                  <p className="mt-4 text-gray-600">
                    His deep knowledge of healthcare analytics and innovative data approaches aligns perfectly with our mission of delivering tailored tech solutions that empower businesses to unlock growth and thrive in today&apos;s fast-paced digital landscape. Dr. Kalgotra has been a mentor and guide in the field of analytics since the early days of our journey, and his strategic insight continues to help us shape innovative and impactful solutions for our clients.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              className="mt-6 flex items-center text-blue-900 hover:text-indigo-800 transition duration-300 ease-in-out"
              onClick={toggleExpand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  Read less <ChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="ml-2" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

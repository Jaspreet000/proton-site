"use client"

import Layout from '../../../components/main_comps/Layout';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaProjectDiagram } from 'react-icons/fa';
import Image from 'next/image';

export default function DigitalProductDevelopment() {
  return (
    <Layout title="Digital Product Development">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-primary-color mb-4">Digital Product Development</h2>
        <p className="text-lg text-gray-700">Bring your digital product ideas to life with our innovative solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/digital-product-development.jpg"
            alt="Digital Product Development"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaCode size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Custom Software Development</h3>
            <p className="text-gray-600">Develop tailored software solutions that align with your business goals.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaMobileAlt size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-600">Create intuitive, user-friendly mobile apps that engage your customers.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaProjectDiagram size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">End-to-End Project Management</h3>
            <p className="text-gray-600">From concept to deployment, we manage every aspect of your digital product’s lifecycle.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
"use client"

import Layout from '../../../components/main_comps/Layout';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaCloud } from 'react-icons/fa';
import Image from 'next/image';

export default function DataScience() {
  return (
    <Layout title="Data Science & Engineering">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-primary-color mb-4">Data Science & Engineering</h2>
        <p className="text-lg text-gray-700">Transform raw data into actionable insights with our cutting-edge solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/data-science-illustration.jpg"
            alt="Data Science Illustration"
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
            <FaChartLine size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-gray-600">Forecast trends, optimize operations, and drive growth with predictive analytics.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaDatabase size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-600">Transform your data into insights with our ML models.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaCloud size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">Scalable and efficient data infrastructure with our comprehensive cloud services.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
"use client"

import Layout from '../../../components/main_comps/Layout';
import { motion } from 'framer-motion';
import { FaChartPie, FaTable, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

export default function BusinessIntelligence() {
  return (
    <Layout title="Business Intelligence Solutions">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-primary-color mb-4">Business Intelligence Solutions</h2>
        <p className="text-lg text-gray-700">Empower your business with actionable insights through custom BI solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/bi-illustration.jpg"
            alt="Business Intelligence Illustration"
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
            <FaChartPie size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Custom BI Solutions</h3>
            <p className="text-gray-600">Develop tailored BI strategies for real-time visibility into performance metrics.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaTable size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Dashboard & Reporting</h3>
            <p className="text-gray-600">Design and implement dashboards that provide insights at a glance.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaLightbulb size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Empower decision-making with real-time insights into key business metrics.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
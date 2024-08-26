"use client"
import Layout from '../../../components/main_comps/Layout';
import { motion } from 'framer-motion';
import { FaRobot, FaCog, FaBrain } from 'react-icons/fa';
import Image from 'next/image';

export default function AI() {
  return (
    <Layout title="AI & Machine Learning">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-primary-color mb-4">AI & Machine Learning</h2>
        <p className="text-lg text-gray-700">Empower your business with advanced AI and ML solutions tailored to your needs.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/ai-illustration.jpg"
            alt="AI Illustration"
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
            <FaRobot size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Customized Enterprise LLMs</h3>
            <p className="text-gray-600">Leverage leading foundation LLMs like GPT-4 and LLaMA 2, integrated with your data to create bespoke solutions.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaCog size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">AI Business Process Automation</h3>
            <p className="text-gray-600">Automate repetitive tasks and streamline complex processes with our AI-driven automation solutions.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaBrain size={48} className="text-primary-color mb-4" />
            <h3 className="text-2xl font-semibold mb-2">RAG-Based Solutions</h3>
            <p className="text-gray-600">Utilize Retrieval-Augmented Generation (RAG) technology for highly relevant and tailored responses.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
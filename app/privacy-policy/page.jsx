"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-950 dark:text-white">
          ProtonDatalabs Privacy Policy
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
          At ProtonDatalabs LLC, we are committed to protecting your privacy. Below is a detailed breakdown of our privacy practices.
        </p>

        <div className="space-y-8">
          {/* Sections */}
          <Section title="Introduction" expandedSection={expandedSection} toggleSection={toggleSection}>
            At ProtonDatalabs LLC, we are committed to protecting your privacy and ensuring that your personal information is handled with care.
            This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to keep it secure.
          </Section>

          <Section title="Definitions" expandedSection={expandedSection} toggleSection={toggleSection}>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Personal Information:</strong> Information that identifies you, like name, email, or phone number.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, IP address, or device information that does not identify you.</li>
              <li><strong>Cookies:</strong> Small data files that store user preferences to enhance website experience.</li>
            </ul>
          </Section>

          <Section title="Information We Collect" expandedSection={expandedSection} toggleSection={toggleSection}>
            We collect both personal and non-personal information to provide better services. This includes:
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Contact Information:</strong> Name, email, and phone number.</li>
              <li><strong>Professional Information:</strong> Job title and company name.</li>
              <li><strong>Technical Data:</strong> Browser type, IP address, and device information.</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" expandedSection={expandedSection} toggleSection={toggleSection}>
            We use your information to improve services, contact you about updates, personalize content, and ensure security.
          </Section>

          <Section title="Sharing and Disclosure of Information" expandedSection={expandedSection} toggleSection={toggleSection}>
            <p>
              We may share your data with third-party providers, comply with legal requirements, or during business transfers.
            </p>
          </Section>

          <Section title="Data Security" expandedSection={expandedSection} toggleSection={toggleSection}>
            We use encryption, access controls, and monitoring tools to protect your data. However, no method of transmission over the Internet is entirely secure.
          </Section>

          <Section title="Your Data Protection Rights" expandedSection={expandedSection} toggleSection={toggleSection}>
            Depending on your location, you have rights including access to your data, rectification, erasure, and data portability.
          </Section>

          <Section title="Cookies and Tracking Technologies" expandedSection={expandedSection} toggleSection={toggleSection}>
            We use cookies to enhance user experience. You can control cookies through your browser settings.
          </Section>

          <Section title="Children's Privacy" expandedSection={expandedSection} toggleSection={toggleSection}>
            We do not knowingly collect data from children under 18. If you believe we have, contact us to remove it.
          </Section>

          <Section title="Contact Us" expandedSection={expandedSection} toggleSection={toggleSection}>
            For questions about this policy, contact us at <strong>contact@protondatalabs.com</strong>.
          </Section>
        </div>
      </div>
    </div>
  );
};

// Section Component with Collapse/Expand Functionality
const Section = ({ title, children, expandedSection, toggleSection }) => (
  <div className="border rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(title)}>
      <h2 className="text-xl font-bold text-blue-950 dark:text-white">{title}</h2>
      <span className="text-gray-400">{expandedSection === title ? "▲" : "▼"}</span>
    </div>
    <AnimatePresence>
      {expandedSection === title && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default PrivacyPolicy;

"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X, ArrowLeft } from 'lucide-react'
import React from 'react'

const sections = [
  { title: 'Introduction', content: 'At Proton Datalabs LLC ("Company," "we," "us," or "our"), we are committed to protecting your privacy and ensuring that your personal information is handled with care. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to keep it secure. By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with this Policy, please do not use our website or services. We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your information. For any questions or concerns regarding this Privacy Policy, please contact us.' },
  { title: 'Definitions', content: 'For the purposes of this Privacy Policy, the following terms shall have the meanings ascribed to them below: "Personal Information": Any information that relates to an identified or identifiable individual, including but not limited to name, email address, phone number, and any other data that can be used to identify you. "Non-Personal Information": Information that does not directly identify an individual, such as browser type, device information, IP address, and aggregated data that cannot be used to identify you personally. "User," "you," or "your": Refers to any individual or entity who accesses or uses the Proton Datalabs website and services. "Website": The official website of Proton Datalabs located at [website URL], through which our services are offered. "Services": The data science consulting, AI development, and related services provided by Proton Datalabs, including consultation bookings available through the Website. "Cookies": Small data files that are stored on your device when you visit the Website, used to improve user experience and track website usage. "Third-Party Service Providers": Companies or individuals that perform services on behalf of Proton Datalabs, such as hosting, data analysis, and customer support. "Data Controller": The entity that determines the purposes and means of processing your Personal Information, in this case, Proton Datalabs. "Data Processor": Any third party that processes Personal Information on behalf of the Data Controller.' },
  { title: 'Information We Collect', content: 'At Proton Datalabs, we collect both Personal Information and Non-Personal Information to provide and improve our services. The types of information we collect include: Personal Information: Contact Information: We may collect your name, email address, phone number, and other contact details when you book a consultation, fill out a form, or communicate with us directly. Professional Information: Information related to your business or professional background that you provide when using our services, such as company name and job title. Communication Data: Records of any communications you have with us, including inquiries, feedback, and responses to our surveys. Non-Personal Information: Technical Data: Information about your device and internet connection, including IP address, browser type, operating system, and device information. Usage Data: Details about how you use our website, such as the pages you visit, the time spent on each page, and the links you click. Cookies and Tracking Technologies: Data collected through cookies and similar technologies to enhance user experience and track website performance. Information from Third Parties: We may also receive information about you from third-party service providers or partners who help us operate our business or provide services to you. Optional Information: Any additional information you choose to provide when interacting with our services, such as when you leave a comment, provide feedback, or participate in promotional activities.' },
  { title: 'How We Use Your Information', content: 'At Proton Datalabs, we use the information we collect for the following purposes: To Provide and Improve Services: We use your Personal Information to deliver, maintain, and enhance our services, including scheduling consultations, responding to inquiries, and customizing your experience on our website. Communication: To contact you regarding your consultation bookings, updates, promotions, or other relevant information about our services. We may also use your information to respond to your questions, feedback, or customer support requests. Personalization: To understand your preferences and interests, allowing us to offer content and services that are most relevant to you, and to tailor our communications based on your engagement with our website. Analytics and Performance: To analyze Website usage patterns and track user behavior to optimize our content, identify trends, improve the performance of our services, and enhance user experience. Legal Compliance: To comply with applicable laws, regulations, legal processes, or enforceable governmental requests, and to protect our rights, privacy, safety, or property, as well as that of our users or others. Security and Fraud Prevention: To detect, prevent, and address technical issues, fraud, and other security-related incidents that could affect our website and services. Marketing and Promotions: To send you promotional materials or other marketing communications related to our services if you have opted in to receive them. You can unsubscribe from these communications at any time.' },
  { title: 'Sharing and Disclosure of Information', content: 'Proton Datalabs values your privacy and is committed to handling your information responsibly. We may share or disclose your information in the following circumstances: Third-Party Service Providers: We may share your Personal Information with trusted third-party service providers who assist us in operating our website, conducting our business, and delivering our services to you. These providers are obligated to protect your information and use it only for the purposes for which it was disclosed. Legal Requirements: We may disclose your information if required by law, regulation, legal process, or governmental request, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, the safety of others, or to prevent fraud or security issues. Business Transfers: In the event of a merger, acquisition, asset sale, or other corporate restructuring, your information may be transferred to the acquiring or successor entity. We will notify you before your Personal Information becomes subject to a different privacy policy. With Your Consent: We may share your information with third parties when you have given us your explicit consent to do so. Aggregated and De-identified Data: We may share aggregated or de-identified information that cannot reasonably be used to identify you, for the purpose of research, analytics, marketing, or other business purposes. Protection of Rights and Interests: We may disclose your information to protect or defend the rights, safety, or property of Proton Datalabs, our employees, clients, or other stakeholders, in cases of suspected fraudulent activities or security threats.' },
  { title: 'Data Security', content: 'At Proton Datalabs, we take the security of your Personal Information seriously and have implemented a range of measures to protect it from unauthorized access, disclosure, alteration, or destruction. Our security practices include: Encryption: We use industry-standard encryption technologies to secure data transmitted between your device and our website, ensuring that sensitive information remains protected. Access Controls: Access to your Personal Information is restricted to authorized personnel only, who require the information to perform their job functions. All employees and third-party service providers are bound by strict confidentiality obligations. Data Storage: Your data is stored on secure servers that comply with industry best practices for data protection. We regularly review our data storage and processing practices to ensure ongoing security. Monitoring and Prevention: We employ monitoring tools and security measures to detect and prevent unauthorized access or breaches. Our systems are designed to identify potential vulnerabilities and take action to mitigate risks. Security Updates: We regularly update our systems and software to address security vulnerabilities and protect against emerging threats. No Guarantee: While we strive to use the most up-to-date security measures, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of your data. User Responsibility: You are responsible for keeping your account login details secure and for safeguarding any information that you transmit to or from our website.' },
  { title: 'Your Data Protection Rights', content: 'At Proton Datalabs, we respect your rights concerning your Personal Information. Depending on your location and applicable data protection laws, you may have the following rights: Right to Access: You have the right to request a copy of the Personal Information we hold about you, as well as information on how we process your data. Right to Rectification: If you believe that any Personal Information we have about you is inaccurate or incomplete, you have the right to request that we update or correct your information. Right to Erasure: You may request the deletion of your Personal Information when it is no longer necessary for the purposes for which it was collected or if you withdraw your consent (where consent is the legal basis for processing). Right to Restrict Processing: You have the right to ask us to limit or restrict the processing of your Personal Information under certain circumstances, such as when you dispute the accuracy of the data or object to its processing. Right to Data Portability: You have the right to receive your Personal Information in a structured, commonly used, and machine-readable format and to request that we transfer your data to another data controller where technically feasible. Right to Object: You may object to the processing of your Personal Information at any time if the processing is based on legitimate interests or direct marketing purposes. Right to Withdraw Consent: If we are processing your data based on your consent, you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing that occurred before the withdrawal. Right to Complain: If you believe that we have not handled your Personal Information in accordance with applicable laws, you have the right to lodge a complaint with a supervisory authority or data protection regulator.' },
  { title: 'Cookies and Tracking Technologies', content: 'Proton Datalabs uses cookies and similar tracking technologies to enhance your experience on our website and to analyze how you interact with our services. By using our website, you agree to the use of these technologies as described below: What are Cookies? Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device, remember your preferences, and improve your overall experience on our website. Types of Cookies We Use: Essential Cookies: These cookies are necessary for the proper functioning of the Website. They enable core features like security, page navigation, and access to secure areas of the site. Performance Cookies: These cookies collect information about how you use the Website, such as the pages you visit and any errors you encounter. This data helps us improve the performance and usability of our website. Functional Cookies: Functional cookies remember your preferences and settings to provide a more personalized experience. For example, they may remember your language preferences or login details. Analytics and Advertising Cookies: These cookies help us analyze traffic and user behavior on the Website, and may be used to deliver relevant advertisements based on your interests. How We Use Cookies: The data collected through cookies and tracking technologies allows us to: Understand user behavior and trends on our website. Personalize your experience by remembering your preferences. Improve the performance and functionality of our services. Managing Cookies: Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies or alert you when a cookie is being sent. Please note that disabling cookies may affect the functionality of certain parts of the Website and limit your user experience. Third-Party Tracking Technologies: We may also use third-party tracking technologies to help us with analytics and advertising. These third parties may collect information about your online activities over time and across different websites when you use our website. Your Consent: By using our website, you consent to the use of cookies and similar tracking technologies as described in this clause. You can withdraw your consent at any time by adjusting your browser settings to disable cookies.' },
  { title: 'Data Retention', content: 'Proton Datalabs retains your Personal Information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. The retention periods for your data are determined based on the following criteria: Service Provision: We retain your data for as long as you have an active relationship with us, such as when you have booked a consultation, used our services, or engaged in ongoing communication with us. Legal Compliance: We may retain your information for longer periods if necessary to comply with legal obligations, resolve disputes, enforce our agreements, or to meet any other legal requirements. Data Minimization: Once the retention period expires, or when we no longer have a legitimate business need to process your information, we will either delete, anonymize, or securely store your Personal Information and isolate it from any further processing. User Requests: If you request the deletion of your Personal Information, we will take reasonable steps to comply with your request in accordance with applicable laws, provided that there is no legal or regulatory requirement for us to retain the data.' },
  { title: 'International Data Transfers', content: 'Proton Datalabs operates globally, which means that your Personal Information may be transferred to, stored, and processed in countries other than your country of residence, including the United States and any other countries where our service providers and partners operate. Data Protection Standards: We take appropriate measures to ensure that any transfer of Personal Information outside your country of residence complies with applicable data protection laws and safeguards your privacy. Legal Basis for Transfer: Where required by law, we implement appropriate legal mechanisms for cross-border data transfers, such as standard contractual clauses, data protection agreements, or other measures to ensure that your data is adequately protected. Your Rights: By using our website and services or by providing us with your information, you consent to the transfer of your Personal Information to countries outside your country of residence. You have the right to contact us for more information about how we protect your data when it is transferred internationally. Third-Party Providers: Our third-party service providers may also process your data in countries that may not have the same data protection laws as your jurisdiction. We require these service providers to protect your Personal Information in accordance with this Privacy Policy and applicable data protection regulations.' },
  { title: 'Children\'s Privacy', content: 'Proton Datalabs does not knowingly collect, use, or disclose Personal Information from individuals under the age of 18. Our website and services are not intended for children, and we do not target or market our services to minors. Parental Consent: If you are under 18, please do not use our website or services without the consent of a parent or guardian. We encourage parents and guardians to monitor their children\'s internet usage and to help enforce this Privacy Policy. Data Removal: If we become aware that we have inadvertently collected Personal Information from a child under the age of 18 without verified parental consent, we will take immediate steps to delete that information from our records. Contact Us: If you believe that we might have any information from or about a child under 18, please contact us.' },
  { title: 'Contact Us', content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your Personal Information, please feel free to contact us.' },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef(sections.map(() => React.createRef()))

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      const currentSectionIndex = sectionRefs.current.findIndex((ref, index) => {
        const element = ref.current as HTMLElement;
        if (!element) return false
        const nextElement = sectionRefs.current[index + 1]?.current as HTMLElement;
        if (!nextElement) return true
        return currentPosition >= element.offsetTop - 100 && currentPosition < nextElement.offsetTop - 100
      })
      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index].current as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className='flex items-center'>
        <button onClick={() => window.history.back()} className="mr-4">
              <ArrowLeft className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </button>
          <h1 className="text-xl sm:text-2xl font-bold text-black">Proton Datalabs Privacy Policy</h1>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <nav className={`md:col-span-3 space-y-1 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg p-4 z-20"
                >
                  {sections.map((section, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === index ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => scrollToSection(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center">
                        <ChevronRight className={`mr-2 h-4 w-4 ${activeSection === index ? 'text-black' : 'text-gray-400'}`} />
                        {section.title}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden md:block sticky top-24 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto pb-6">
              {sections.map((section, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === index ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => scrollToSection(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <ChevronRight className={`mr-2 h-4 w-4 ${activeSection === index ? 'text-black' : 'text-gray-400'}`} />
                    {section.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </nav>
          <main className="md:col-span-9 space-y-12 mt-8 md:mt-0">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                ref={sectionRefs.current[index] as React.RefObject<HTMLElement>}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-black mb-4">{section.title}</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700">{section.content}</p>
                </div>
              </motion.section>
            ))}
          </main>
        </div>
      </div>
      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Proton Datalabs LLC. All rights reserved.
          </p>
        </div>
      </footer>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
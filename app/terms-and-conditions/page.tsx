"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Menu } from 'lucide-react'

const sections = [
  { title: 'Introduction', content: 'Welcome to the website of ProtonDatalabs LLC ("Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, located at [website URL], and any related services, including booking consultations through the site (collectively, the "Services").' },
  { title: 'Definitions', content: 'For the purposes of these Terms and Conditions, the following definitions shall apply: "Company" refers to ProtonDatalabs LLC, a company registered in the United States, operating its website and services. "Website" refers to the official ProtonDatalabs website located at [website URL]. "Services" means the consultation booking services and any other services offered by ProtonDatalabs through its Website. "User," "you," or "your" refers to any individual or entity that accesses, browses, or uses the Website and its Services. "Terms" refers to these Terms and Conditions that govern the use of the Website and Services provided by ProtonDatalabs. "Content" means all text, graphics, images, software, audio, video, information, or other material available on the Website. "Third-Party Links" refers to any links to external websites or services that are not owned or controlled by ProtonDatalabs.' },
  { title: 'Website Use', content: 'Eligibility: By accessing or using this Website, you represent and warrant that you are at least 18 years of age or have the legal consent of a parent or guardian to use the Website if you are under 18. Permitted Use: The Website and its Content are intended for personal and non-commercial use only. Users may access the Website to explore the services offered by ProtonDatalabs and to book consultations in accordance with these Terms. Prohibited Use: You agree not to use the Website for any unlawful or prohibited activities, including but not limited to: Distributing malware, viruses, or any other harmful code that could disrupt or harm the Website or its users. Attempting to gain unauthorized access to any part of the Website, user accounts, or computer systems connected to the Website. Engaging in any activity that could damage, disable, overburden, or impair the Website\'s functionality. Using the Website or its Content for any commercial purpose without the express written consent of ProtonDatalabs. Misrepresenting your identity or affiliation with any person or entity. Account Responsibility: If you create an account to use certain features of the Website, you are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account. You agree to notify ProtonDatalabs immediately of any unauthorized use of your account. Right to Modify or Restrict Access: ProtonDatalabs reserves the right to modify, suspend, or terminate your access to the Website or its Services at any time, with or without notice, if you violate these Terms or engage in any conduct that is harmful to the Company or other users.' },
  { title: 'Booking Consultations', content: 'Booking Process: Users may book consultations through the ProtonDatalabs Website by following the instructions provided on the booking page. The Company will confirm the booking via email, and the consultation details will be shared with the User. No Fees: Consultations booked through the Website are offered free of charge. Users are not required to make any payments or provide billing information to book a consultation. Changes or Cancellations: ProtonDatalabs reserves the right to modify or cancel any consultation at its discretion. Users will be notified promptly if any changes or cancellations occur. Users may also cancel or reschedule their consultation by contacting ProtonDatalabs directly. No Guarantee: While ProtonDatalabs strives to provide valuable insights during consultations, the Company does not guarantee specific outcomes or results from the consultations. The information shared during the consultation is for informational purposes only. User Responsibility: Users are responsible for ensuring that they provide accurate contact information and other relevant details when booking a consultation to receive proper communication from ProtonDatalabs.' },
  { title: 'Services Offered', content: 'Description of Services: ProtonDatalabs provides data science consulting, AI development, and related services to help businesses leverage technology and data to achieve their goals. The details of these services are outlined on the Website, which may include descriptions, case studies, and examples of past work. Consultation Services: Users can book consultations through the Website to discuss their data science and AI needs. These consultations are offered free of charge, and they serve as an initial step to understand the User\'s requirements and suggest possible solutions. No Guarantees: While ProtonDatalabs aims to deliver high-quality services tailored to the needs of each User, the Company does not guarantee specific outcomes or results from its consulting services. All recommendations and advice provided are based on the information available at the time of the consultation. Changes to Services: ProtonDatalabs reserves the right to modify, expand, or discontinue any of its services at any time without prior notice. Users are encouraged to check the Website periodically for the most up-to-date information regarding the Company\'s offerings. Third-Party Services: Certain aspects of the services offered by ProtonDatalabs may involve third-party tools, software, or platforms. The Company does not take responsibility for the performance, accuracy, or reliability of these third-party services.' },
  { title: 'Intellectual Property Rights', content: 'Ownership: All content on the ProtonDatalabs Website, including but not limited to text, graphics, images, logos, icons, software, and other materials (collectively, the "Content"), is the exclusive property of ProtonDatalabs LLC or its licensors and is protected by applicable copyright, trademark, and intellectual property laws. Limited License: ProtonDatalabs grants Users a limited, non-exclusive, non-transferable, and revocable license to access and use the Website and its Content for personal, non-commercial purposes only. This license does not allow Users to modify, reproduce, distribute, create derivative works from, or publicly display any Content without prior written permission from ProtonDatalabs. Prohibited Use: Users are strictly prohibited from using any Content on the Website for commercial purposes, including copying, selling, or distributing any material from the Website without the express written consent of ProtonDatalabs. Trademarks: All trademarks, service marks, logos, and trade names displayed on the Website are the property of ProtonDatalabs or other respective owners. Use of these marks without prior written authorization is strictly prohibited. User Contributions: If Users submit any feedback, suggestions, or other communications regarding the Website or Services ("User Contributions"), such contributions shall be deemed non-confidential and become the property of ProtonDatalabs. The Company shall have the right to use, reproduce, modify, and distribute these contributions for any purpose without any obligation to the User. Third-Party Intellectual Property: The Website may contain content owned by third parties. The use of such third-party content is subject to the terms and conditions set by the respective owners, and ProtonDatalabs disclaims any responsibility for ensuring User compliance with those terms.' },
  { title: 'User Responsibilities', content: 'Accurate Information: Users agree to provide accurate, current, and complete information when booking consultations, creating accounts, or interacting with the Website. ProtonDatalabs is not responsible for any issues arising from the submission of false or misleading information. Compliance with Laws: Users agree to use the Website and its services in compliance with all applicable local, state, national, and international laws and regulations. Any unauthorized or unlawful use of the Website is strictly prohibited. Prohibited Conduct: Users agree not to engage in any of the following prohibited activities: Misuse of the Website: Attempting to gain unauthorized access to any portion of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website. Distribution of Harmful Content: Uploading, posting, or distributing viruses, malware, or any other harmful content that may disrupt the functionality of the Website or harm other users. Harassment or Abuse: Engaging in any behavior that is harassing, abusive, threatening, or otherwise objectionable towards other users or the Company\'s representatives. Commercial Use: Using the Website or its Content for commercial purposes without the prior written consent of ProtonDatalabs. Security: Users are responsible for maintaining the confidentiality of their account login information, where applicable, and for all activities that occur under their account. Users must immediately notify ProtonDatalabs of any unauthorized use of their account or any other breach of security. Third-Party Content: Users must respect third-party intellectual property rights and agree not to use any third-party content in a manner that infringes on the intellectual property rights of the respective owners. No Interference: Users agree not to interfere with or disrupt the integrity or performance of the Website or its related systems and networks.' },
  { title: 'Privacy Policy', content: 'For more information about how we collect, use, store, and protect your personal information, please visit our Privacy Policy page.' },
  { title: 'Limitation of Liability', content: 'To the fullest extent permitted by law, ProtonDatalabs LLC ("Company") shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from: Your use of, or inability to use, the Website or its Services. Any errors, mistakes, or inaccuracies in the content provided on the Website. Unauthorized access to or alteration of your transmissions or data. Any interruption, suspension, or termination of the Website or Services, whether temporary or permanent. Any viruses, malware, or other harmful components transmitted through the Website. The Company\'s total liability to you for any claims arising out of or related to these Terms or your use of the Website shall not exceed the amount paid by you, if any, for accessing the Website or Services.' },
  { title: 'Third-Party Links', content: 'The ProtonDatalabs website may contain links to third-party websites, services, or resources that are not owned or controlled by the Company. These links are provided solely for your convenience and do not imply any endorsement, sponsorship, or affiliation with the third-party site. No Responsibility: ProtonDatalabs does not control or monitor the content, privacy policies, or practices of any third-party websites and assumes no responsibility for them. Accessing these third-party sites is done at your own risk. User Acknowledgement: By clicking on third-party links, you acknowledge that ProtonDatalabs is not liable for any damages, losses, or issues that may arise from your use of these external websites or resources. Review Terms: We encourage you to review the terms of service and privacy policies of any third-party websites you visit to understand their data collection practices and your obligations.' },
  { title: 'Termination', content: 'Termination Rights: ProtonDatalabs LLC ("Company") reserves the right to suspend or terminate your access to the Website or its Services, at its sole discretion, without prior notice, for any reason, including but not limited to a violation of these Terms and Conditions or any applicable law. Effect of Termination: Upon termination, your right to use the Website and Services will immediately cease, and you must discontinue all use of the Website. Any provisions of these Terms that are intended to survive termination shall continue to remain in effect, including but not limited to Intellectual Property Rights, Limitation of Liability, Indemnification, and Governing Law. No Liability: The Company shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension of your access to the Website or its Services.' },
  { title: 'Changes to the Terms and Conditions', content: 'ProtonDatalabs LLC ("Company") reserves the right to update, modify, or replace these Terms and Conditions at any time, at its sole discretion. Any changes to these Terms will be effective immediately upon posting on the Website. Notification of Changes: The Company may, but is not obligated to, provide you with notice of any significant changes to these Terms. We encourage you to periodically review these Terms to stay informed of any updates. Continued Use: Your continued use of the Website and its Services after any changes to these Terms signifies your acceptance of the modified Terms. If you do not agree with the revised Terms, you must discontinue using the Website immediately.' },
  { title: 'Governing Law', content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts located in King County, Washington, United States.' },
  { title: 'Contact Information', content: 'If you have any questions, concerns, or inquiries regarding these Terms and Conditions or the services provided by ProtonDatalabs LLC, please contact us.' },
]

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      const sectionElements = sections.map((_, index) => document.getElementById(`section-${index}`))
      const currentSectionIndex = sectionElements.findIndex((element, index) => {
        const nextElement = sectionElements[index + 1]
        if (!element) return false
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
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">ProtonDatalabs Terms and Conditions</h1>
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <nav className={`md:col-span-3 space-y-1 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto pb-6">
              {sections.map((section, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === index ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => scrollToSection(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <ChevronRight className={`mr-2 h-4 w-4 ${activeSection === index ? 'text-blue-600' : 'text-gray-400'}`} />
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
                id={`section-${index}`}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </motion.section>
            ))}
          </main>
        </div>
      </div>
      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ProtonDatalabs LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
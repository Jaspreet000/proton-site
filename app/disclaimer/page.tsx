"use client"
import { useState, useEffect, useRef, RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Section = {
  title: string
  content: string
}

const sections: Section[] = [
  {
    title: 'Introduction',
    content:
      'The information provided on the ProtonDatalabs website is for general informational purposes only. While we strive to keep the content up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.',
  },
  {
    title: 'No Professional Advice',
    content:
      'The content on this website does not constitute professional advice of any kind, including but not limited to legal, financial, or technical advice. Users should consult with appropriate professionals before making decisions based on the information provided on this website.',
  },
  {
    title: 'Use at Your Own Risk',
    content:
      "Any reliance you place on the information provided on this website is strictly at your own risk. ProtonDatalabs disclaims all liability for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use or misuse of the website's content.",
  },
  {
    title: 'Third-Party Content',
    content:
      'The website may contain links to third-party websites or content that are not controlled or endorsed by ProtonDatalabs. We do not guarantee the accuracy or reliability of any information provided on third-party sites, and we are not responsible for their content or practices.',
  },
  {
    title: 'Changes to Content',
    content:
      'ProtonDatalabs reserves the right to modify, update, or remove any content on the website at any time without prior notice. We do not guarantee that the information on the website will always be up to date or error-free.',
  },
  {
    title: 'No Warranty',
    content:
      'The website and its content are provided "as is" without any warranty of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or availability.',
  },
]

export default function DisclaimerPolicy() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef<RefObject<HTMLDivElement>[]>(sections.map(() => useRef<HTMLDivElement>(null)))

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      const currentSectionIndex = sectionRefs.current.findIndex((ref, index) => {
        const element = ref.current
        if (!element) return false
        const nextElement = sectionRefs.current[index + 1]?.current
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
    const element = sectionRefs.current[index].current
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => window.history.back()} className="mr-4">
              <ArrowLeft className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-black">ProtonDatalabs Website Disclaimer Policy</h1>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
                  className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-4"
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
                ref={sectionRefs.current[index]}
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
            © {new Date().getFullYear()} ProtonDatalabs LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

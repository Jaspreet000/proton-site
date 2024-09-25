"use client";
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/main_comps/Navbar";
import Footer from "@/components/main_comps/Footerr";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"; // Icons for visual appeal
import { motion } from "framer-motion"; // Adding framer-motion for animations
import { ImagesSlider } from "@/components/ui/images-slider";
import {
  FaCode,
  FaCog,
  FaUsers,
  FaLaptopCode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const videos = [
  "/assets/business.mp4",
  "/assets/business.mp4",
  "/assets/business.mp4",
  "/assets/business.mp4",
  "/assets/business.mp4",
  "/assets/business.mp4",
];

const JobDescription = ({ params }) => {
  const { position } = params;
  const [activeTab, setActiveTab] = useState("basic");

  const positionsData = {
    "full-stack-engineer": {
      titleee: "full-stack-engineer",
      title: "Full-Stack Engineer/Architect",
      about: `Proton DataLabs is a leader in AI and Data Science, driven by a global team of expert software engineers, business strategists, and AI & Data specialists. We transform complex visions into practical realities, focusing on impactful actions to propel client success across diverse industries.`,
      whatWeNeed: `We're looking for a versatile Full-Stack Engineer/Architect who is skilled in managing multiple projects across the software development lifecycle. This role requires a deep understanding of both front-end and back-end architectures, with a strong grasp of cloud technologies and data science platforms.`,
      responsibilities: [
        "Develop and maintain full-stack applications, integrating front-end interfaces with back-end services.",
        "Design, build, and operate API layers supporting diverse front-end user experiences, with an emphasis on efficiency and scalability.",
        "Engage in all phases of the software lifecycle, including design, development, testing, deployment, and support.",
        "Drive the implementation and innovation of new generative AI capabilities within our product suite, from conceptual design to market launch.",
        "Collaborate cross-functionally with data scientists, analysts, and business teams to translate business requirements into robust technical solutions.",
        "Mentor and lead a dynamic team, fostering a culture of technical excellence and continuous learning.",
      ],
      qualification: {
        basic: [
          {
            title: "",
            content: (
              <div>
                <p>
                  4+ years of software development experience with expertise in
                  full-stack development.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Proficient in technologies such as JavaScript, React, Node.js,
                  Python, Java, SQL, and big data technologies (Hive, Presto,
                  Spark).
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Strong experience with cloud platforms, preferably AWS,
                  designing scalable, high-availability systems.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Bachelor’s degree in Computer Science or a related field, or
                  equivalent practical experience.
                </p>
              </div>
            ),
          },
        ],
        preferred: [
          {
            title: "",
            content: (
              <div>
                <p>
                  Experience with API and SDK development, including GraphQL.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Familiarity or interest in learning graph technologies and
                  data models.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Strong communication skills and capability to lead high-stakes
                  projects.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Experience with CI/CD pipelines and robust testing practices.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  A proactive approach to problem-solving and a drive for
                  innovation.
                </p>
              </div>
            ),
          },
        ],
      },

      offer: [
        "A dynamic work environment where innovation and inclusivity are at the forefront.",
        "Competitive compensation packages including bonuses.",
        "Flexible work arrangements, balancing in-office collaboration with remote work opportunities.",
      ],
      aboutYou: `You are a driven, adaptable professional who thrives in a fast-paced environment. You are passionate about building efficient, scalable solutions and are comfortable navigating the complexities of modern software architectures. Your strong leadership skills make you an ideal mentor for a team dedicated to advancing generative AI technologies.`,
      joinUs: `At Proton DataLabs, you will not only contribute to cutting-edge projects but also shape the future of technology. If you’re ready to take on this challenge and make a significant impact, we’d love to hear from you.
      `,
    },
    "data-scientist": {
      titleee: "data_Scientist",
      title: "Data Scientist",
      about: `At Proton DataLabs, we are at the cutting edge of AI and data science, delivering solutions that reshape industries and enhance our clients' operational efficiency. Our team is composed of pioneers in AI, machine learning, and data science, working together to drive forward the boundaries of what technology can achieve.`,
      roleOverview: `We are seeking a highly skilled Data Scientist with a strong background in computer science, mathematics (statistics, calculus, algebra, matrices), and experience with cloud technologies and backend systems. You will play a pivotal role in developing machine learning models to enhance financial forecasting and product insights, collaborating closely with our engineering, finance, and product teams.`,
      responsibilities: [
        "Design and implement machine learning models to improve financial and operational forecasting, enhancing decision-making across business units.",
        "Develop, scale, and optimize data pipelines for model training, inference, and evaluation, ensuring high accuracy and efficiency.",
        "Work collaboratively with front-end engineers and software engineers to integrate analytical models seamlessly into user-facing applications.",
        "Engage with cross-functional teams in a creative and open environment to ensure that data insights and forecasts are aligned with business objectives.",
        "Lead initiatives to evaluate and implement new technologies and methodologies that can enhance our rapid application development and data analysis capabilities.",
        `Advocate for and implement best practices in data science, contributing to Proton DataLab's leadership in the industry.`,
      ],
      qualification: {
        basic: [
          {
            title: "",
            content: (
              <div>
                <p>
                  Master&apos;s degree or higher in Mathematics, Computer
                  Science, AI, or a related field.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  At least 4 years of professional experience in machine
                  learning and statistics, with a focus on forecasting and
                  predictive modeling.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Proficiency in Python, Spark, Databricks, SQL, and experience
                  with large-scale ML/DL platforms.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Demonstrated experience with cloud technologies and designing
                  scalable solutions on platforms like AWS.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Strong ability to communicate complex data in a clear and
                  actionable manner to technical and non-technical teams.
                </p>
              </div>
            ),
          },
        ],
        preferred: [
          {
            title: "",
            content: (
              <div>
                <p>
                  Experience with generative machine learning models and
                  advanced forecasting techniques.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Familiarity with graph technologies and their applications in
                  data modeling.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Strong project management skills and the ability to lead
                  interdisciplinary projects.
                </p>
              </div>
            ),
          },
        ],
      },
      aboutYou: [
        `You are deeply passionate about data and its potential to drive change.`,
        `Curious and driven, you are constantly learning and pushing the boundaries of what is possible.`,
        `You excel in a fast-paced, innovative environment and are eager to take on new challenges.`,
        `Your analytical skills are matched by your ability to communicate insights effectively.`,
      ],
      growthOpportunities: `This role offers the opportunity to expand into leadership positions as Proton DataLabs continues its rapid growth. You will have the chance to influence major projects and initiatives, shaping the future of our company and the industry.`,
      joinUs: `At Proton DataLabs, you'll contribute to transformative projects that matter. You&apos;ll work in a dynamic environment that fosters creativity, innovation, and growth. Dive into complex problems and emerge with solutions that not only meet but exceed our client's expectations.`,
    },
    "ai-researcher": {
      titleee: "ai_researcher",
      title: "AI Researcher",
      about: `Proton DataLabs is at the forefront of integrating artificial intelligence with real-world applications, innovating solutions that reshape how industries operate. We are committed to advancing technology and driving transformative changes.`,
      roleOverview: `We are seeking a visionary AI Researcher with an extensive background in machine learning and deep expertise in neural network architectures and security risks associated with AI. This role demands a proactive approach to developing state-of-the-art AI models and a deep understanding of their applications and limitations.`,
      responsibilities: [
        "Advanced Model Development: Design and implement advanced neural network architectures, including CNNs, RNNs, GANs, and LLMs. Focus on optimizing models for both performance and scalability using TensorFlow, PyTorch, and other relevant frameworks.",
        "Innovative Research: Conduct groundbreaking research in machine learning and AI, with an emphasis on generative models, reinforcement learning, and adversarial learning techniques. Regularly publish findings in top-tier journals and conferences.",
        "Security and Ethics in AI: Understand and address cybersecurity risks related to AI deployments. Develop strategies to mitigate vulnerabilities, particularly those involving adversarial attack techniques and the limitations of LLMs.",
        "Collaborative Application Development: Work closely with cross-functional teams to integrate AI technologies into commercial products, ensuring they are secure, efficient, and scalable.",
        "Knowledge Sharing and Community Leadership: Lead workshops, seminars, and discussions to foster a culture of innovation and continuous learning within the AI community.",
      ],
      qualification: {
        basic: [
          {
            title: "",
            content: (
              <div>
                <p>
                  PhD or Master&apos;s degree in Computer Science, Electrical
                  Engineering, AI, or a related field, with a strong focus on
                  machine learning and neural networks.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Proven expertise in TensorFlow, PyTorch, and other AI
                  frameworks. Experience with a variety of neural network
                  architectures, including CNN, RNN, GAN, and LLM.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Strong publication record in AI/ML fields, demonstrating a
                  significant contribution to the advancement of AI research.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Exceptional ability to analyze complex problems, develop
                  innovative solutions, and adapt to evolving technological
                  landscapes.
                </p>
              </div>
            ),
          },
        ],
        preferred: [
          {
            title: "",
            content: (
              <div>
                <p>
                  Extensive experience in researching and developing
                  applications for generative models and understanding their
                  practical implications and ethical considerations.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Proficiency in implementing robust and secure AI solutions,
                  with a clear understanding of current challenges and potential
                  risks in AI, including adversarial attacks.
                </p>
              </div>
            ),
          },
          {
            title: "",
            content: (
              <div>
                <p>
                  Active participation in the AI research community with a
                  proven track record of influential publications and
                  presentations.
                </p>
              </div>
            ),
          },
        ],
      },
      whatyoulldo: [
        `Drive innovation in AI through research and application of cutting-edge machine learning techniques and neural network architectures.
        `,
        `Develop secure, robust AI models that are capable of withstanding emerging security threats and operational challenges.`,
        `Mentor a team of researchers and developers, guiding them through complex AI projects and fostering an environment of growth and innovation.`,
      ],
      joinUs: `At Proton DataLabs, you will lead efforts to harness the power of AI to create transformative solutions. Your work will not only push the boundaries of technology but also contribute to setting new standards in the safe and ethical application of AI. Join us to shape the future of technology and make a lasting impact on society.`,
    },
  };

  const positionData = positionsData[position];

  if (!positionData) {
    return <div className="text-center py-20 text-2xl">Position not found</div>;
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <Navbar />

      <div className="relative h-[100vh]">
        <ImagesSlider className="h-full" images={images}>
          {/* Dark Overlay for Better Contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8, // Smoothen the transition a bit
            }}
            className="relative z-50 flex flex-col text-white gap-10"
          >
            {/* Title */}
            {positionData.title && (
              <motion.h1
                className="text-6xl font-extrabold text-center mb-12"
                variants={item}
              >
                {positionData.title}
              </motion.h1>
            )}

            {/* About Section */}
            {positionData.about && (
              <motion.div
                className="text-lg md:text-xl text-center w-[85%] px-4 md:px-20 mb-8 leading-relaxed"
                variants={item}
              >
                <p>{positionData.about}</p>
              </motion.div>
            )}

            {/* Apply Now Button */}
            <div className="flex justify-center">
              <div className="w-72">
                <Link
                  href={`/career/apply/${positionData.titleee}`}
                  className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      <motion.div
        className="container mx-auto p-6 space-y-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* What We Need */}
        {positionData.whatWeNeed && (
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-3xl mt-9 md:text-4xl font-semibold text-center mb-4">
              What We Need
            </h2>
            <p className="text-center w-[100%] mx-auto text-lg leading-relaxed">
              {positionData.whatWeNeed}
            </p>
          </motion.div>
        )}

        {/* Responsibilities */}
        {positionData.responsibilities && (
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-4">
              Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {positionData.responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  className="bg-indigo-50 p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg hover:bg-indigo-100"
                  variants={item}
                >
                  <h3 className="text-xl font-semibold mb-2">{`Responsibility ${
                    index + 1
                  }`}</h3>
                  <p className="text-gray-700">{responsibility}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Qualifications */}
        {positionData.qualification && (
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-4">
              Qualifications
            </h2>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex">
                <button
                  className={`px-4 py-2 text-gray-800 font-medium border-b-2 ${
                    activeTab === "basic"
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("basic")}
                >
                  Basic
                </button>
                <button
                  className={`px-4 py-2 text-gray-800 font-medium border-b-2 ${
                    activeTab === "preferred"
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("preferred")}
                >
                  Preferred
                </button>
              </div>

              <div className="p-4">
                {activeTab === "basic" && (
                  // <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  //   {positionData.qualifications.basic.map(
                  //     (qualification, index) => (
                  //       <li key={index} className="flex items-center">
                  //         <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                  //         <p>{qualification}</p>
                  //       </li>
                  //     )
                  //   )}
                  // </ul>
                  <div className="w-full">
                    <Timeline data={positionData.qualification.basic} />
                  </div>
                )}

                {activeTab === "preferred" && (
                  // <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  //   {positionData.qualifications.preferred.map(
                  //     (qualification, index) => (
                  //       <li key={index} className="flex items-center">
                  //         <AcademicCapIcon className="h-5 w-5 text-yellow-600 mr-2" />
                  //         <p>{qualification}</p>
                  //       </li>
                  //     )
                  //   )}
                  // </ul>
                  <div className="w-full">
                    <Timeline data={positionData.qualification.preferred} />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Offer Section */}
        {positionData.offer && (
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-3xl font-semibold text-indigo-600">
              What We Offer
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {positionData.offer.map((offer, index) => (
                <li
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  {offer}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* About You */}
        {positionData.aboutYou && (
          <div className="space-y-6">
            <h2 className="text-3xl text-center font-semibold text-indigo-600 mb-4">
              About You
            </h2>

            {/* Handle 'About You' as an array (points) or a string (paragraph) */}
            {Array.isArray(positionData.aboutYou) ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {positionData.aboutYou.map((aboutYou, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="bg-indigo-50 p-6">
                      {/* Slightly lighter background for points */}
                      <p className="text-gray-700">{aboutYou}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-transparent rounded-lg overflow-hidden">
                <div className="bg-indigo-100 p-6">
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    {positionData.aboutYou}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Growth Opportunities */}
        {positionData.growthOpportunities && (
          <motion.div className="space-y-6" variants={item}>
            <h2 className="text-3xl text-center font-semibold text-indigo-600">
              Growth Opportunities
            </h2>
            <p className="text-gray-600">{positionData.growthOpportunities}</p>
          </motion.div>
        )}

        {/* Join Us */}
        {positionData.joinUs && (
          <div
            style={{
              background:
                "linear-gradient(to right, #4c51bf, #6b46c1, #4c51bf)",
              padding: "2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 20,
              position: "relative",
            }}
          >
            <h2
              style={{
                color: "#ffffff", // Ensure white text
                fontSize: "2.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Join Us
            </h2>
            <p
              style={{
                color: "#e2e8f0", // Lighter text
                fontSize: "1.125rem",
                maxWidth: "50rem",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {positionData.joinUs}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Link
                href={`/career/apply/${positionData.titleee}`}
                style={{
                  backgroundColor: "#5a67d8",
                  color: "#ffffff",
                  fontWeight: "600",
                  padding: "0.75rem 2rem",
                  borderRadius: "9999px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
                  display: "inline-block",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </motion.div>
      <Footer />
    </>
  );
};

export default JobDescription;

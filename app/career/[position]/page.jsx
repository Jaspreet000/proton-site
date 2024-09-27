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
      location: `Remote`,
      employmentType: `Full-time`,
      postedDate: `2 days ago`,
      roleType: `Software Engineering`,
      workSite: `Remote`,
      profession: `Software Development`,
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
      location: `Remote`,
      employmentType: `Full-time`,
      postedDate: `2 days ago`,
      roleType: `Data Science`,
      workSite: `Remote`,
      profession: `Data Science`,
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
      location: `Remote`,
      employmentType: `Full-time`,
      postedDate: `2 days ago`,
      roleType: `AI Research`,
      workSite: `Remote`,
      profession: `AI Research`,
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

      <div style={{
        marginTop: "76px",
      }}>
        {/* Job Header */}
        <div className="container mx-auto mt-6 p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {positionData.title}
              </h1>
              <p className="text-gray-500 mt-1">
                {positionData.location} | {positionData.employmentType}
              </p>
            </div>

            <div className="mt-4 md:mt-0 space-x-4">
              <Link
                href={`/career/apply/${positionData.titleee}`}
                className="btn-primary transition-transform transform hover:scale-105 shadow-lg text-white py-2 px-4 rounded-lg bg-blue-950"
              >
                Apply
              </Link>
              <button className="btn-secondary bg-gray-100 text-gray-800 py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200 shadow">
                Save
              </button>
            </div>
          </div>

          {/* Job Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p>
                <strong>Date posted:</strong> {positionData.postedDate}
              </p>
              <p>
                <strong>Role Type:</strong> {positionData.roleType}
              </p>
            </div>
            <div>
              <p>
                <strong>Work site:</strong> {positionData.workSite}
              </p>
              <p>
                <strong>Profession:</strong> {positionData.profession}
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="container mx-auto p-6 mt-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            {positionData.about}
          </p>
        </section>

        {/* Responsibilities */}
        <section className="container mx-auto p-6 mt-6">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Responsibilities
          </h2>
          <ul className="mt-4 space-y-3 list-disc list-inside">
            {positionData.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-lg text-gray-700">
                {responsibility}
              </li>
            ))}
          </ul>
        </section>

        {/* Qualifications Section */}
        <section className="container mx-auto p-6 mt-6">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Qualifications
          </h2>
          <div className="border rounded-lg mt-4 p-4">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 font-medium transition-all ${
                  activeTab === "basic"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : ""
                }`}
                onClick={() => setActiveTab("basic")}
              >
                Required
              </button>
              <button
                className={`px-4 py-2 font-medium transition-all ${
                  activeTab === "preferred"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : ""
                }`}
                onClick={() => setActiveTab("preferred")}
              >
                Preferred
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "basic" && (
                <ul className="space-y-2">
                  {positionData.qualification.basic.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg text-gray-700 flex items-start"
                    >
                      {/* Arrow Icon */}
                      <span className="mr-2 text-indigo-600">
                        &#9656; {/* This is a triangle arrow pointing right */}
                      </span>
                      <span>{item.content}</span>
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === "preferred" && (
                <ul className="space-y-2">
                  {positionData.qualification.preferred.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg text-gray-700 flex items-start"
                    >
                      {/* Arrow Icon */}
                      <span className="mr-2 text-indigo-600">
                        &#9656; {/* Right-pointing arrow */}
                      </span>
                      <span>{item.content}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Offer Section */}
        {positionData.offer && (
          <section className="container mx-auto p-6 mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600">
              What We Offer
            </h2>
            <ul className="mt-4 space-y-3 list-disc list-inside text-gray-700">
              {positionData.offer.map((offer, index) => (
                <li key={index} className="text-lg">
                  {offer}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default JobDescription;

"use client";
import React from "react";
import { Navbar } from "@/components/main_comps/Navbar";
import Footer from "@/components/main_comps/Footerr";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"; // Icons for visual appeal
import { motion } from "framer-motion"; // Adding framer-motion for animations

const JobDescription = ({ params }) => {
  const { position } = params;

  const positionsData = {
    "full-stack-engineer": {
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
      qualifications: {
        basic: [
          "4+ years of software development experience with expertise in full-stack development.",
          "Proficient in technologies such as JavaScript, React, Node.js, Python, Java, SQL, and big data technologies (Hive, Presto, Spark).",
          "Strong experience with cloud platforms, preferably AWS, designing scalable, high-availability systems.",
          "Bachelor’s degree in Computer Science or a related field, or equivalent practical experience.",
        ],
        preferred: [
          "Experience with API and SDK development, including GraphQL.",
          "Familiarity or interest in learning graph technologies and data models.",
          "Strong communication skills and capability to lead high-stakes projects.",
          "Experience with CI/CD pipelines and robust testing practices.",
          "A proactive approach to problem-solving and a drive for innovation.",
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
      qualifications: {
        basic: [
          "Master&apos;s degree or higher in Mathematics, Computer Science, AI, or a related field.",
          "At least 4 years of professional experience in machine learning and statistics, with a focus on forecasting and predictive modeling.",
          "Proficiency in Python, Spark, Databricks, SQL, and experience with large-scale ML/DL platforms.",
          "Demonstrated experience with cloud technologies and designing scalable solutions on platforms like AWS.",
          `Strong ability to communicate complex data in a clear and actionable manner to technical and non-technical teams.`,
        ],
        preferred: [
          "Experience with generative machine learning models and advanced forecasting techniques.",
          "Familiarity with graph technologies and their applications in data modeling.",
          "Strong project management skills and the ability to lead interdisciplinary projects.",
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
      qualifications: {
        basic: [
          "PhD or Master&apos;s degree in Computer Science, Electrical Engineering, AI, or a related field, with a strong focus on machine learning and neural networks.",
          "Proven expertise in TensorFlow, PyTorch, and other AI frameworks. Experience with a variety of neural network architectures, including CNN, RNN, GAN, and LLM.",
          "Strong publication record in AI/ML fields, demonstrating a significant contribution to the advancement of AI research.",
          "Exceptional ability to analyze complex problems, develop innovative solutions, and adapt to evolving technological landscapes.",
        ],
        preferred: [
          "Extensive experience in researching and developing applications for generative models and understanding their practical implications and ethical considerations.",
          "Proficiency in implementing robust and secure AI solutions, with a clear understanding of current challenges and potential risks in AI, including adversarial attacks.",
          "Active participation in the AI research community with a proven track record of influential publications and presentations.",
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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="container mx-auto p-6 space-y-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Title */}
        {positionData.title && (
          <motion.h1 className="text-4xl font-bold text-center" variants={item}>
            {positionData.title}
          </motion.h1>
        )}

        {/* About Section */}
        {positionData.about && (
          <motion.div
            className="text-lg text-center px-4 md:px-20"
            variants={item}
          >
            <p>{positionData.about}</p>
          </motion.div>
        )}

        {/* What We Need (specific for full-stack-engineer) */}
        {positionData.whatWeNeed && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              What We Need
            </h2>
            <p>{positionData.whatWeNeed}</p>
          </motion.div>
        )}

        {/* Responsibilities */}
        {positionData.responsibilities && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Responsibilities
            </h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={container}
            >
              {positionData.responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                  variants={item}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Qualifications */}
        {positionData.qualifications && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Qualifications
            </h2>
            {positionData.qualifications.basic && (
              <>
                <h3 className="text-xl font-medium">Basic</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {positionData.qualifications.basic.map((item, index) => (
                    <li
                      key={index}
                      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {positionData.qualifications.preferred && (
              <>
                <h3 className="text-xl font-medium">Preferred</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {positionData.qualifications.preferred.map((item, index) => (
                    <li
                      key={index}
                      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        )}

        {/* Offer Section */}
        {positionData.offer && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              What We Offer
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {positionData.offer.map((item, index) => (
                <li
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* About You */}
        {positionData.aboutYou && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              About You
            </h2>
            {Array.isArray(positionData.aboutYou) ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {positionData.aboutYou.map((item, index) => (
                  <li
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{positionData.aboutYou}</p>
            )}
          </motion.div>
        )}

        {/* Growth Opportunities */}
        {positionData.growthOpportunities && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">
              Growth Opportunities
            </h2>
            <p>{positionData.growthOpportunities}</p>
          </motion.div>
        )}

        {/* Join Us */}
        {positionData.joinUs && (
          <motion.div className="space-y-4" variants={item}>
            <h2 className="text-2xl font-semibold text-indigo-600">Join Us</h2>
            <p>{positionData.joinUs}</p>
          </motion.div>
        )}
      </motion.div>
      <Footer />
    </>
  );
};

export default JobDescription;

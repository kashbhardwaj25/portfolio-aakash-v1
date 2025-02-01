import { motion, Variants } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "Glue Labs",
      role: "Software Developer",
      period: "06/2023 - Present",
      responsibilities: [
        "Architected and implemented a WebGL-based photo editing application using Pixi.js and React, achieving 30% faster rendering and improved memory management.",
        "Engineered a sophisticated rich text editor in FIFO using Slate.js, implementing custom plugins for advanced formatting and auto-save features, resulting in 25% faster content creation.",
        "Led the revamp of core UI/UX framework using Next.js and Tailwind, resulting in 20% increase in user engagement and improved customer satisfaction.",
        "Developed a customizable email editor using React Email and custom components, improving template creation efficiency by 30%.",
        "Streamlined the customer onboarding process through automated workflows, reducing setup time from 15 to 5 minutes.",
      ],
    },
    {
      company: "Glue Labs",
      role: "Software Engineer Intern",
      period: "03/2022 - 05/2023",
      responsibilities: [
        "Successfully migrated legacy React.js application to Next.js, implementing modern architecture patterns and improving overall application performance by 25%.",
        "Developed and shipped a comprehensive commenting system with nested replies.",
        "Engineered a 'People You May Know' feature using advanced algorithms and user behavior analysis.",
        "Enhanced UI/UX with modern design patterns, implementing responsive layouts, smooth animations, and accessibility improvements across the platform.",
        "Collaborated with the team to complete 100+ tickets, focusing on bug fixes, feature implementations, and UI enhancements using React.js and Next.js.",
      ],
    },
  ];

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="relative space-y-6 md:space-y-8 px-4 md:px-0 pt-16 md:pt-24"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <HiOutlineBriefcase className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <h3 className="font-medium text-lg text-white md:text-xl">
            Career Journey
          </h3>
        </div>
        <motion.h2 className="font-bold text-4xl md:text-[90px] leading-none">
          <span className="text-white">WORK</span>{" "}
          <span className="text-gray-600">EXPERIENCE</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="space-y-4 md:space-y-6"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience.period} {...experience} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;

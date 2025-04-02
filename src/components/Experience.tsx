import { motion, Variants } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "Glue Labs",
      role: "Software Developer",
      period: "02/2019 - Present",
      responsibilities: [
        "Hired, trained and led an Agile team of 14+ developers across FIFO and Glue web applications, fostering team growth and project success",
        "Enhanced frontend performance through list virtualization and route-based code splitting, significantly optimizing site performance and load times",
        "Led development of core features including authentication, posts, comments, pagination, search, and real-time chat, driving increased user engagement",
        "Successfully migrated frontend from React to Next.js, improving SEO and reducing build times by 30% while enhancing code maintainability",
        "Engineered features for 3+ products using Next.js and Nest.js, streamlining product management and boosting operational efficiency",
        "Designed reusable UI components for Simpler (Cars24's Consumer Finance Panel) using React class components and HOCs",
        "Integrated APIs for Cars24 using Redux for state management and Redux Thunk for efficient asynchronous operations",
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

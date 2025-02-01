import { FiLayers, FiCode } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";

export const CONTACT_LINKS = {
  github: "https://github.com/kashbhardwaj25",
  linkedin: "https://linkedin.com/in/kashbhardwaj25",
  twitter: "https://twitter.com/kashbhardwaj25",
  medium: "https://medium.com/@aakashbhardwaj643",
  email: "aakashbhardwaj643@gmail.com",
};

export const HERO_SECTION = {
  title: "FRONTEND",
  titleColored: "DEVELOPER",
  description:
    "Passionate about crafting exceptional web experiences with React and Next.js. Specializing in building high-performance applications with modern web technologies.",
  stats: [
    { number: "50+", text: "GITHUB REPOSITORIES" },
    { number: "10K+", text: "LINES OF CODE" },
    { number: "15+", text: "SUCCESSFUL PROJECTS" },
  ],
};

export const FEATURED_PROJECTS = [
  {
    title: "CURSOR.SO",
    description: "AI-Powered Code Editor",
    icon: FiCode,
    isDark: true,
  },
  {
    title: "CHATGPT CLONE",
    description: "Voice-Enabled AI Chat",
    icon: MdOutlineChat,
    isDark: true,
  },
  {
    title: "PORTFOLIO 2024",
    description: "Next.js & Framer Motion",
    icon: FiLayers,
    isDark: true,
  },
];

export const RECENT_PROJECTS = [
  {
    title: "Cursor.so - AI Code Editor",
    description:
      "Built with Electron and React, featuring real-time collaboration, AI code completion, and advanced development tools.",
    image: "/images/cursor.png",
    gradient: "from-blue-500/10 to-purple-500/10",
    link: "https://cursor.so",
  },
  {
    title: "ChatGPT Clone with Voice",
    description:
      "Full-stack application with voice recognition, real-time responses, and conversation history using OpenAI's API.",
    image: "/images/chatgpt.png",
    gradient: "from-purple-500/10 to-pink-500/10",
    link: "https://chat.example.com",
  },
  {
    title: "Modern Portfolio 2024",
    description:
      "Responsive portfolio built with Next.js 14, Server Components, and Framer Motion for smooth animations.",
    image: "/images/portfolio.png",
    gradient: "from-pink-500/10 to-orange-500/10",
    link: "https://portfolio.example.com",
  },
];

export const EXPERIENCE = [
  {
    company: "Software Engineer at Cursor.so",
    period: "2023 - Present",
    description:
      "Leading frontend development of an AI-powered code editor. Implemented key features using Electron, React, and TypeScript. Integrated OpenAI's API for code completion and chat functionality.",
    technologies: ["React", "Electron", "TypeScript", "OpenAI API"],
  },
  {
    company: "Frontend Developer at Tech Corp",
    period: "2022 - 2023",
    description:
      "Developed and maintained multiple React applications. Improved application performance by 40% through code optimization and modern web practices.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    company: "Web Developer at StartUp Inc",
    period: "2021 - 2022",
    description:
      "Built responsive web applications and implemented modern UI/UX designs. Collaborated with designers and backend teams for seamless integration.",
    technologies: ["JavaScript", "React", "CSS3", "REST APIs"],
  },
];

export const PREMIUM_TOOLS = [
  {
    name: "React",
    description: "Core Framework",
    icon: "/images/tools/react.png",
  },
  {
    name: "Next.js",
    description: "Full-Stack Framework",
    icon: "/images/tools/nextjs.png",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    icon: "/images/tools/typescript.png",
  },
  {
    name: "TailwindCSS",
    description: "Styling Framework",
    icon: "/images/tools/tailwind.png",
  },
  {
    name: "Electron",
    description: "Desktop Apps",
    icon: "/images/tools/electron.png",
  },
  {
    name: "Framer Motion",
    description: "Animations",
    icon: "/images/tools/framer.png",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building an AI-Powered Code Editor",
    description:
      "A deep dive into creating Cursor.so, an AI-powered code editor using Electron and React. Learn about the challenges and solutions in building a modern development tool.",
    date: "Jan 15, 2024",
  },
  {
    title: "Optimizing React Applications",
    description:
      "Practical techniques for improving React application performance. From code splitting to memoization, learn how to make your apps faster.",
    date: "Dec 20, 2023",
  },
  {
    title: "Modern Frontend Architecture",
    description:
      "Exploring the latest trends in frontend architecture. Learn about micro-frontends, state management, and modular design patterns.",
    date: "Nov 30, 2023",
  },
];

import { NavLink, Project, Service, Skill, SocialLink } from "./types.utils";
import { Code, Github, Globe, Instagram, Layout, Linkedin, Server, ShoppingCart } from "lucide-react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTypescript
} from "react-icons/si";

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/oludefiyinfoluwa', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: 'https://github.com/oludefiyinfoluwa06', label: 'GitHub' },
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/timothyolude', label: 'Instagram' },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={24} className="text-yellow-500" />,
    level: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} className="text-blue-600" />,
    level: 88,
  },
  {
    name: "React",
    icon: <SiReact size={24} className="text-blue-300" />,
    level: 85,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} className="text-black" />,
    level: 80,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={24} className="text-black-600" />,
    level: 80,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs size={24} className="text-red-600" />,
    level: 78,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} className="text-green-600" />,
    level: 70,
  },
  {
    name: "RESTful APIs",
    icon: <Globe size={24} className="text-indigo-600" />,
    level: 80,
  },
  {
    name: "Git and GitHub",
    icon: <Github size={24} className="text-black" />,
    level: 80,
  },
];

export const projects: Project[] = [
  {
    title: "Niphal Marketing Agency Website",
    description: "Developed a responsive corporate website incorporating SEO best practices to enhance organic traffic and brand visibility.",
    image: "/assets/projects/niphal.png",
    link: "https://niphal.com.ng",
    github: "https://github.com/oludefiyinfoluwa06/niphal",
    tech: ["HTML", "CSS", "JavaScript"],
    isPersonal: false,
  },
  {
    title: "Premier Learning Centre Official Website",
    description: "Designed and implemented a modern website for Premier Learning Centre, showcasing institutional information, academic programs, and school activities.",
    image: "/assets/projects/tplc.png",
    link: "https://www.thepremierlearningcentre.org",
    tech: ["Next.js"],
    isPersonal: false,
  },
  {
    title: "School Responsive Platform",
    description: "Built a fully responsive educational website using React.js and Firebase to present school details, programs, and admissions information.",
    image: "/assets/projects/school-coe.png",
    link: "https://school-coe.web.app",
    github: "https://github.com/oludefiyinfoluwa06/school-website",
    tech: ["React.js", "Firebase"],
    isPersonal: true,
  },
  {
    title: "CHRISWUP Church Website",
    description: "Created a responsive and intuitive website to highlight church events, services, and community outreach initiatives.",
    image: "/assets/projects/chriswup.png",
    link: "https://chriswup.org.ng",
    tech: ["Next.js", "Express.js", "MongoDB"],
    isPersonal: false,
  },
  {
    title: "Xceloft Realty Hub Platform",
    description: "Developed an intuitive and responsive informational website for Xceloft Realty Hub to showcase property listings, services, and real estate insights.",
    image: "/assets/projects/xrh-web.png",
    link: "https://xrh-web.vercel.app",
    github: "https://github.com/Oludefiyinfoluwa06/xceloft-realty-hub-website",
    tech: ["React.js"],
    isPersonal: true,
  },
  {
    title: "Lemon Real Estate Informational Site",
    description: "Built a dynamic real estate website highlighting the features of Lemon's mobile application and providing users with property insights.",
    image: "/assets/projects/lemon.png",
    link: "https://lemon-theta-seven.vercel.app",
    github: "https://github.com/oludefiyinfoluwa06/lemon-website",
    tech: ["Next.js"],
    isPersonal: false,
  },
  {
    title: "KHR HR Management System",
    description: "Engineered a custom HR web application featuring secure authentication, employee record management (CRUD), job postings, and application tracking for both employees and job seekers.",
    image: "/assets/projects/khr.png",
    link: "https://khr.vercel.app",
    github: "https://github.com/oludefiyinfoluwa06/hr-management-system",
    tech: ["Next.js", "Nest.js", "MongoDB"],
    isPersonal: true,
  },
  {
    title: "ROCDI Non-Profit Organization Website",
    description: "Designed and developed the flagship website for ROCDI, enabling the organization to effectively communicate its mission, programs, and community initiatives.",
    image: "/assets/projects/rocdi.png",
    link: "https://rocdi.vercel.app",
    github: "https://github.com/oludefiyinfoluwa06/rocdi",
    tech: ["React.js"],
    isPersonal: false,
  },
];

export const services: Service[] = [
  {
    icon: <Layout size={48} className='text-indigo-600' />,
    title: "Custom Web Development",
    description: "Bespoke web solutions tailored to your specific business needs and requirements.",
    features: ["Custom Design", "Scalable Architecture", "Modern Frameworks", "SEO Optimized"],
    isPopular: false
  },
  {
    icon: <Globe size={48} className='text-indigo-600' />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your site works perfectly on all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Fast Loading"],
    isPopular: true
  },
  {
    icon: <Code size={48} className='text-indigo-600' />,
    title: "Single & Multi-Page Applications",
    description: "Modern SPAs and traditional multi-page websites built with the latest technologies.",
    features: ["React/Next.js", "Performance Optimized", "Interactive UI"],
    isPopular: false
  },
  {
    icon: <ShoppingCart size={48} className='text-indigo-600' />,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard", "Analytics"],
    isPopular: false
  },
  {
    icon: <Server size={48} className='text-indigo-600' />,
    title: "Backend & API Integration",
    description: "Robust backend systems and seamless API integrations to power your web applications.",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security"],
    isPopular: false
  }
];

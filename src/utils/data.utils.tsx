import { Project, Service, Skill } from "./types.utils";
import { Code, Github, Server, ShoppingCart, Globe, Layout } from "lucide-react";

export const skills: Skill[] = [
  { name: 'JavaScript', icon: <Code size={24} className='text-indigo-600' />, level: 90 },
  { name: 'TypeScript', icon: <Code size={24} className='text-indigo-600' />, level: 88 },
  { name: 'React', icon: <Code size={24} className='text-indigo-600' />, level: 85 },
  { name: 'Next.js', icon: <Code size={24} className='text-indigo-600' />, level: 80 },
  { name: 'Express.js', icon: <Server size={24} className='text-indigo-600' />, level: 80 },
  { name: 'Nest.js', icon: <Server size={24} className='text-indigo-600' />, level: 78 },
  { name: 'MongoDB', icon: <Server size={24} className='text-indigo-600' />, level: 70 },
  { name: 'RESTful APIs', icon: <Globe size={24} className='text-indigo-600' />, level: 80 },
  { name: 'Git and Github', icon: <Github size={24} className='text-indigo-600' />, level: 80 }
];

export const projects: Project[] = [
  {
    title: "Marketing Website",
    description: "Company website with responsive design and SEO best practices to boost organic traffic.",
    image: "/api/placeholder/800/600",
    link: "https://niphal.com.ng",
    github: "https://niphal.com.ng",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Church Website & Admin Portal",
    description: "Full-stack solution with custom dashboard enabling non-technical staff to manage events, sermons, and announcements.",
    image: "/api/placeholder/800/600",
    link: "https://chriswup.org.ng",
    github: "https://chriswup.org.ng",
    tech: ["Next.js", "MongoDB", "Express.js"]
  },
  {
    title: "Real Estate Portal",
    description: "Dynamic real-estate management portal with CMS integration for property listings.",
    image: "/api/placeholder/800/600",
    link: "https://lemon-theta-seven.vercel.app",
    github: "https://lemon-theta-seven.vercel.app",
    tech: ["Next.js", "React", "CMS"]
  },
  {
    title: "HR Management Platform",
    description: "Custom HR web application with secure authentication, employee records CRUD, job postings, and application tracking.",
    image: "/api/placeholder/800/600",
    link: "https://khr.vercel.app",
    github: "https://khr.vercel.app",
    tech: ["Next.js", "Nest.js", "MongoDB"]
  }
];

export const services: Service[] = [
  {
    icon: <Layout size={48} className='text-indigo-600' />,
    title: "Custom Web Development",
    description: "Bespoke web solutions tailored to your specific business needs and requirements.",
    features: ["Custom Design", "Scalable Architecture", "Modern Frameworks", "SEO Optimized"],
    popular: false
  },
  {
    icon: <Globe size={48} className='text-indigo-600' />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your site works perfectly on all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Fast Loading"],
    popular: true
  },
  {
    icon: <Code size={48} className='text-indigo-600' />,
    title: "Single & Multi-Page Applications",
    description: "Modern SPAs and traditional multi-page websites built with the latest technologies.",
    features: ["React/Next.js", "Performance Optimized", "Interactive UI"],
    popular: false
  },
  {
    icon: <ShoppingCart size={48} className='text-indigo-600' />,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard", "Analytics"],
    popular: false
  },
  {
    icon: <Server size={48} className='text-indigo-600' />,
    title: "Backend & API Integration",
    description: "Robust backend systems and seamless API integrations to power your web applications.",
    features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security"],
    popular: false
  }
];

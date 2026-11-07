"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

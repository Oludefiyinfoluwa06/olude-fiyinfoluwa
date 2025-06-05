import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { handleSmoothScroll } from "@/utils/helpers.utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<number>(0);

  const words = ["Full Stack", "Frontend", "Backend"];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentWord((prev: number) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-[70px] pb-[20px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex space-x-4 mb-8 opacity-0 animate-fade-in-up delay-200">
              <Link
                href="https://github.com/oludefiyinfoluwa06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/oludefiyinfoluwa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:oludefiyinfoluwa06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={24} />
              </Link>
            </div>

            <div className="opacity-0 animate-fade-in-up delay-300">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-200/50">
                👋 Hello, I&rsquo;m Olude Fiyinfoluwa
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight opacity-0 animate-fade-in-up delay-500">
              <span className="relative inline-block">
                <span
                  key={currentWord}
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift"
                >
                  {words[currentWord]}
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-lg -z-10 animate-pulse"></span>
              </span>
              <br />
              <span className="text-gray-800">Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg opacity-0 animate-fade-in-up delay-700">
              I craft beautiful, responsive web experiences that combine
              <span className="text-indigo-600 font-semibold"> cutting-edge technology</span> with
              <span className="text-purple-600 font-semibold"> intuitive design</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-900">
              <Link
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:scale-105 hover:-translate-y-1"
              >
                View My Work
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group border-2 border-indigo-200 text-indigo-700 px-8 py-4 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              >
                Let&rsquo;s Talk
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-12 opacity-0 animate-fade-in-up delay-1100">
              {["React.js", "Next.js", "TypeScript", "Express.js", "Nest.js"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-300 hover:scale-105"
                  style={{animationDelay: `${1200 + index * 100}ms`}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`hidden lg:flex justify-center transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-8 opacity-30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-bounce-slow"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full animate-bounce-slow delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>

              <div className="relative group">
                <div className="relative bg-white p-2 rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/assets/me.jpg"
                    alt="Olude Fiyinfoluwa - Developer"
                    width={320}
                    height={320}
                    priority
                    className="w-80 h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />

                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 animate-float">
                  <code className="text-indigo-600 text-sm font-mono">{"</>"}</code>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 animate-float delay-500">
                  <code className="text-purple-600 text-sm font-mono">{"{ }"}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

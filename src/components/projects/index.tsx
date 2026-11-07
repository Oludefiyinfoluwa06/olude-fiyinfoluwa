import { useState, useEffect, useRef } from "react";
import { projects } from "@/utils/data.utils";
import ProjectCard from "./project-card";
import { Project } from "@/utils/types.utils";

const Projects = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-purple-300/5 rounded-full blur-2xl animate-spin-slow"></div>

        <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={sectionRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 rounded-full text-sm font-medium backdrop-blur-sm border border-indigo-200/50">
              My Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore my latest work showcasing
            <span className="text-indigo-600 font-semibold"> innovative solutions</span> and
            <span className="text-purple-600 font-semibold"> creative implementations</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`
          text-center mt-20 transform transition-all duration-1000 delay-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200/50 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Want to See More?
            </h3>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Check out my complete portfolio on GitHub for more exciting projects and contributions
            </p>
            <a
              href="https://github.com/oludefiyinfoluwa06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View All Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

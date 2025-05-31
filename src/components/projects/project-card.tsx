import { Project } from "@/utils/types.utils";
import { ExternalLink, Github, User, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 hover:border-indigo-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        transitionDelay: `${300 + (index * 150)}ms`
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <Image
          src={project.image}
          alt={project.title}
          height={400}
          width={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 z-20">
          <div className={`flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300 ${
            project.isPersonal
              ? 'bg-emerald-500/90 text-white border border-emerald-400/30'
              : 'bg-blue-500/90 text-white border border-blue-400/30'
          }`}>
            {project.isPersonal ? (
              <>
                <User size={12} className="mr-1" />
                Personal
              </>
            ) : (
              <>
                <Building2 size={12} className="mr-1" />
                Client
              </>
            )}
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
          >
            <ExternalLink size={16} className="text-indigo-600" />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <Github size={16} className="text-gray-700" />
            </Link>
          )}
        </div>

        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100 hover:border-indigo-200 hover:bg-indigo-100 transition-all duration-200 hover:scale-105"
              style={{
                animationDelay: `${400 + (index * 150) + (idx * 50)}ms`
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-indigo-600 hover:text-indigo-800 font-semibold flex items-center transition-all duration-200"
          >
            View Project
            <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200 hover:scale-110"
            >
              <Github size={20} />
            </Link>
          )}
        </div>

        <div className='mt-6 h-1 w-0 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r from-indigo-600 to-purple-600'></div>
      </div>
    </div>
  );
}

export default ProjectCard;

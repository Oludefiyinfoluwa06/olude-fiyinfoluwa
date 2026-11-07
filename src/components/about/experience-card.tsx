import { useState, useEffect, useRef } from "react";
import { ExperienceCardProps } from "@/utils/types.utils";

export const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  techStack,
  delay = 0,
}: ExperienceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30"></div>

      <div className="absolute left-0 top-8 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>

      <div className="ml-8 p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 group-hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-indigo-600 font-semibold">{company}</p>
          </div>
          <div className="text-sm text-gray-500 mt-2 sm:mt-0">
            <div className="flex flex-col items-end space-y-1">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                {location}
              </span>

              <p className="mt-1 text-right sm:text-left">{period}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.split(', ').map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

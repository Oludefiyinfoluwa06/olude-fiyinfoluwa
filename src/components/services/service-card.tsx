import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Service } from "@/utils/types.utils";

export const ServiceCard = ({
  service,
  index,
  isVisible,
}: {
  service: Service;
  index: number;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {service.isPopular && (
        <div className="absolute -top-3 -right-3 z-10">
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
            Popular
          </span>
        </div>
      )}

      <div className={`
        relative h-full bg-white rounded-2xl shadow-sm border border-gray-100
        transition-all duration-500 overflow-hidden
        ${isHovered ? 'shadow-2xl shadow-indigo-500/10 -translate-y-2' : 'hover:shadow-xl'}
        ${service.isPopular ? 'ring-2 ring-indigo-200' : ''}
      `}>
        <div className={`
          absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0
          transition-opacity duration-500 rounded-2xl
          ${isHovered ? 'opacity-100' : ''}
        `}>
          <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
        </div>

        <div className="relative z-10 p-8">
          <div className={`
            mb-6 transform transition-all duration-500
            ${isHovered ? 'scale-110 rotate-3' : ''}
          `}>
            <div className={`
              w-20 h-20 rounded-2xl flex items-center justify-center
              bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100
              transition-all duration-500
              ${isHovered ? 'bg-gradient-to-br from-indigo-100 to-purple-100' : ''}
            `}>
              {service.icon}
            </div>
          </div>

          <h3 className={`
            text-2xl font-bold mb-4 transition-colors duration-300
            ${isHovered ? 'text-indigo-600' : 'text-gray-900'}
          `}>
            {service.title}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-3 mb-6">
            {service.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className={`
                  flex items-center text-sm text-gray-700 transform transition-all duration-300
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 150 + featureIndex * 100 + 300}ms` }}
              >
                <CheckCircle2 size={16} className="text-green-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/utils/data.utils";
import { ServiceCard } from "./service-card";
import { Service } from "@/utils/types.utils";
import { handleSmoothScroll } from "@/utils/helpers.utils";

const Services = () => {
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
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>

        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"></div>
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
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive web development solutions to bring your ideas to life with
            <span className="text-indigo-600 font-semibold"> cutting-edge technology</span> and
            <span className="text-purple-600 font-semibold"> exceptional design</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service: Service, index: number) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`
          text-center mt-20 transform transition-all duration-1000 delay-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let&rsquo;s discuss how I can help bring your web development vision to life
              </p>
              <Link
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

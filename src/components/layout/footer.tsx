"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Olude Fiyinfoluwa
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Services', 'Contact'].map((link, index) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:translate-x-2 inline-block"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <span className="text-indigo-400">📧</span>
                  </div>
                  <span>oludefiyinfoluwa06@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <span className="text-indigo-400">📍</span>
                  </div>
                  <span>Keffi, Nasarawa, Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <span className="text-indigo-400">💼</span>
                  </div>
                  <span>Available for freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"></div>
    </footer>
  );
}

export default Footer;

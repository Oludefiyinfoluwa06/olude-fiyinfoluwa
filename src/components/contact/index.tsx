import Link from "next/link";
import { useState, useEffect, useRef, FormEvent } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import axios from "axios";
import { SocialLink } from "./social-link";
import { ContactItem } from "./contact-item";
import { Notification } from "./notification";
import { NotificationProps } from "@/utils/types.utils";
import { NotificationType } from "@/utils/enums.utils";

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationProps>({
    type: NotificationType.SUCCESS,
    message: '',
    isVisible: false
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const showNotification = (type: NotificationType, message: string) => {
    setNotification({
      type,
      message,
      isVisible: true,
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
        name,
        email,
        subject,
        message,
      });

      showNotification(
        NotificationType.SUCCESS,
        response.data.message ||
          'Your message has been sent successfully! I\'ll get back to you soon.',
      );
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        'An error occurred while trying to send your message. Please try again or contact me directly.';

      showNotification(NotificationType.ERROR, errorMessage);
    } finally {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>

          <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping delay-1000"></div>
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
                Let&rsquo;s Connect
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind? Let&rsquo;s discuss how I can help bring your
              <span className="text-indigo-600 font-semibold"> vision to life</span> with
              <span className="text-purple-600 font-semibold"> cutting-edge solutions</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div className="space-y-6 mb-12">
                <ContactItem
                  icon={<Mail size={24} className="text-indigo-600" />}
                  label="Email"
                  value="oludefiyinfoluwa06@gmail.com"
                  delay={400}
                />
                <ContactItem
                  icon={<Phone size={24} className="text-indigo-600" />}
                  label="Phone"
                  value="+234 911 311 9364"
                  delay={500}
                />
                <ContactItem
                  icon={<MapPin size={24} className="text-indigo-600" />}
                  label="Location"
                  value="Keffi, Nasarawa, Nigeria"
                  delay={600}
                />
              </div>

              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Connect With <span className="text-indigo-600">Me</span>
                </h3>
                <div className="flex space-x-4">
                  <SocialLink
                    icon={<Linkedin size={20} />}
                    href="https://linkedin.com/in/oludefiyinfoluwa"
                    label="LinkedIn"
                    delay={800}
                  />
                  <SocialLink
                    icon={<Github size={20} />}
                    href="https://github.com/oludefiyinfoluwa06"
                    label="GitHub"
                    delay={900}
                  />
                  <SocialLink
                    icon={<Instagram size={20} />}
                    href="https://www.instagram.com/timothyolude"
                    label="Instagram"
                    delay={1000}
                  />
                  <SocialLink
                    icon={<Mail size={20} />}
                    href="mailto:oludefiyinfoluwa06@gmail.com"
                    label="Email"
                    delay={1100}
                  />
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className={`transform transition-all duration-1000 delay-500 ${
                formVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`transform transition-all duration-700 ${
                      formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`} style={{ transitionDelay: '600ms' }}>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className={`transform transition-all duration-700 ${
                      formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`} style={{ transitionDelay: '700ms' }}>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={`transform transition-all duration-700 ${
                    formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '800ms' }}>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>

                  <div className={`transform transition-all duration-700 ${
                    formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '900ms' }}>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 resize-none"
                      placeholder="Tell me about your project or how I can help..."
                      required
                    ></textarea>
                  </div>

                  <div className={`transform transition-all duration-700 ${
                    formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '1000ms' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center font-semibold text-lg hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-white border-r-transparent border-l-transparent border-t-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={`mt-20 text-center transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <span>or reach out directly at</span>
              <Link
                href="mailto:oludefiyinfoluwa06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-purple-600 font-semibold transition-colors duration-300 inline-flex items-center"
              >
                oludefiyinfoluwa06@gmail.com
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

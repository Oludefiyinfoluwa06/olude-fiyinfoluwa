import Link from "next/link";
import { SocialLinkProps } from "@/utils/types.utils";

export const SocialLink = ({ icon, href, label, delay = 0 }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative w-12 h-12 flex items-center justify-center bg-white/70 backdrop-blur-sm text-gray-600 rounded-xl border border-gray-200/50 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 transform opacity-0 animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms` }}
    aria-label={label}
  >
    {icon}
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {label}
    </div>
  </Link>
);
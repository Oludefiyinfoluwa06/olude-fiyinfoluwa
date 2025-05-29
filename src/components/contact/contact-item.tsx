import { ContactProps } from "@/utils/types.utils";

export const ContactItem = ({ icon, label, value, delay = 0 }: ContactProps) => (
  <div
    className={`group flex items-start p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-indigo-200 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg transform opacity-0 animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-300">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{label}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

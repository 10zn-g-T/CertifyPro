import { ArrowRight } from "lucide-react";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">

        <Icon size={30} />

      </div>

      {/* Title */}

      <h3 className="relative z-10 text-2xl font-bold text-slate-900 mt-8">

        {title}

      </h3>

      {/* Description */}

      <p className="relative z-10 text-gray-600 leading-7 mt-4">

        {description}

      </p>

      {/* Bottom */}

      <div className="relative z-10 mt-8 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">

        Learn More

        <ArrowRight size={18} />

      </div>

    </div>
  );
}

export default FeatureCard;
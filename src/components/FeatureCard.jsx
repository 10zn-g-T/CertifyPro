import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl
      bg-slate-800/60 backdrop-blur-xl
      border border-slate-700
      p-8
      shadow-xl
      hover:border-blue-500/60
      hover:shadow-blue-500/20
      transition-all duration-500"
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/40 transition-all duration-500"></div>

      {/* Icon */}
      <div
        className="
        relative z-10
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-br
        from-blue-500
        to-indigo-600
        flex
        items-center
        justify-center
        text-white
        shadow-lg
        group-hover:scale-110
        transition-all
        duration-500
      "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="relative z-10 mt-5 leading-8 text-gray-300">
        {description}
      </p>

      {/* Divider */}

      <div className="relative z-10 my-7 h-px bg-slate-700"></div>

      {/* Learn More */}

      <div className="relative z-10 flex items-center justify-between">

        <span className="text-blue-400 font-semibold">
          Learn More
        </span>

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-blue-500/20
          flex
          items-center
          justify-center
          text-blue-400
          group-hover:translate-x-2
          transition-all
          duration-300
        "
        >
          <ArrowRight size={18} />
        </div>

      </div>
    </motion.div>
  );
}

export default FeatureCard;
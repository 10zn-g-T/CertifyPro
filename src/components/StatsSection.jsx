import { motion } from "framer-motion";
import {
  Award,
  Users,
  Building2,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15K+",
    label: "Certificates Issued",
  },
  {
    icon: Users,
    value: "8K+",
    label: "Students Certified",
  },
  {
    icon: BadgeCheck,
    value: "99.9%",
    label: "Verification Accuracy",
  },
  {
    icon: Building2,
    value: "120+",
    label: "Partner Institutions",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 font-semibold tracking-wide">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Numbers That Speak
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Empowering universities and organizations with secure certificate
            issuance, instant verification and reliable cloud management.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: .35,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-slate-800/60
                backdrop-blur-xl
                border
                border-slate-700
                p-8
                text-center
                hover:border-blue-500/60
                transition-all
                duration-500
              "
            >

              {/* Glow */}

              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Icon */}

              <div className="
                relative
                z-10
                w-16
                h-16
                mx-auto
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
              ">

                <item.icon size={30} />

              </div>

              {/* Number */}

              <h3 className="relative z-10 mt-7 text-5xl font-black text-white">

                {item.value}

              </h3>

              {/* Label */}

              <p className="relative z-10 mt-4 text-gray-400 leading-7">

                {item.label}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
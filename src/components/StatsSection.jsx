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

function StatsSection() {
  return (
    <section 
    
    className="py-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-white/20 text-white font-semibold">

            Trusted Worldwide

          </span>

          <h2 className="text-5xl font-black text-white mt-6">

            Numbers That Speak

          </h2>

          <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">

            Helping educational institutions issue and verify secure
            digital certificates with confidence.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto">

                <item.icon
                  className="text-blue-600"
                  size={30}
                />

              </div>

              <h3 className="text-5xl font-black text-white mt-6">

                {item.value}

              </h3>

              <p className="text-blue-100 mt-3">

                {item.label}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;
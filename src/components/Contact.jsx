import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@certifypro.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Assam, India",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "Monday - Friday\n9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">

Let's
<span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
 Connect
</span>

</h2>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-3xl mx-auto">
            Have questions, suggestions or need assistance?
            Our team is always ready to help you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-7 flex items-center gap-6 hover:border-blue-500/50 transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">

                  <item.icon size={28} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-gray-400 leading-7">
                    {item.value}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-xl">

              <h3 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />

                <button
                  type="submit"
                  className="group w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-4 font-semibold text-white flex items-center justify-center gap-3 transition duration-300 shadow-lg hover:shadow-blue-500/30"
                >

                  Send Message

                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
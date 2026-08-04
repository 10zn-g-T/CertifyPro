import { ShieldCheck, BadgeCheck, QrCode, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Verification",
      description:
        "Every certificate is protected with secure authentication and encrypted validation.",
    },
    {
      icon: <QrCode size={28} />,
      title: "QR Code Validation",
      description:
        "Scan QR codes for instant certificate verification from anywhere.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Trusted Certificates",
      description:
        "Generate unique digital certificates with authenticity and integrity.",
    },
    {
      icon: <Database size={28} />,
      title: "Cloud Storage",
      description:
        "Safely store and manage certificates with quick access anytime.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
  className="text-center mb-24"
>

  <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">

    Why Choose
    <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
      {" "}CertifyPro?
    </span>

  </h2>

  <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-8">

    CertifyPro simplifies digital certificate management with secure
    issuance, instant verification and cloud-based accessibility,
    helping institutions eliminate fraud while building trust.

  </p>

</motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 mt-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Why Choose CertifyPro?</h3>

            <p className="text-gray-400 leading-8 mb-8">
              We combine modern technologies with a simple user experience to
              provide secure certificate issuance and instant verification.
              Whether you're a university, training institute, or organization,
              CertifyPro makes credential management effortless.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-blue-400">100%</h4>
                <p className="text-gray-400 mt-2">
                  Secure Verification Process
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-blue-400">24/7</h4>
                <p className="text-gray-400 mt-2">
                  Certificate Accessibility
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-blue-400">QR</h4>
                <p className="text-gray-400 mt-2">
                  Instant Verification
                </p>
              </div>

              <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-blue-400">Cloud</h4>
                <p className="text-gray-400 mt-2">
                  Secure Data Storage
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-400 text-sm leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
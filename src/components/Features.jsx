import FeatureCard from "./FeatureCard";
import {
  ShieldCheck,
  QrCode,
  FileCheck,
  Database,
  BarChart3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Verification",
    description:
      "Every certificate is protected with unique IDs and secure verification, ensuring authenticity and preventing tampering.",
  },
  {
    icon: QrCode,
    title: "QR Authentication",
    description:
      "Generate dynamic QR codes for every certificate so anyone can instantly verify it online.",
  },
  {
    icon: FileCheck,
    title: "Instant Certificate Issuing",
    description:
      "Create professional digital certificates within seconds with a streamlined workflow.",
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description:
      "Store certificates securely in MongoDB with quick retrieval and reliable backup.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track issued certificates, monitor verification activity, and manage records from one place.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description:
      "Certificates can be verified securely from anywhere in the world using any device.",
  },
];

function Features() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      {/* Background Decoration */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Small Badge */}

        <div className="flex justify-center">

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

            Platform Features

          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-6 text-center text-5xl md:text-6xl font-black text-slate-900">

          Everything You Need
          <br />
          to Manage Certificates

        </h2>

        {/* Description */}

        <p className="mt-6 max-w-3xl mx-auto text-center text-lg text-slate-600 leading-8">

          CertifyPro provides institutions with a complete platform for
          issuing, managing, verifying and securing digital certificates
          using modern cloud technologies.

        </p>

        {/* Cards */}

        <div 
        data-aos="fade-up"
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;
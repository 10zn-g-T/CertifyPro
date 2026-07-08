import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🔒",
    title: "Secure Verification",
    description:
      "Certificates are protected using unique IDs and QR verification.",
  },
  {
    icon: "⚡",
    title: "Fast Validation",
    description:
      "Verify certificates within seconds from anywhere.",
  },
  {
    icon: "📱",
    title: "QR Code Support",
    description:
      "Every certificate includes a secure QR Code.",
  },
  {
    icon: "📄",
    title: "Digital Certificates",
    description:
      "Issue professional digital certificates instantly.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Track verification history and certificate usage.",
  },
  {
    icon: "🌍",
    title: "Global Access",
    description:
      "Certificates can be verified anywhere in the world.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why Choose Our Platform?
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Everything you need to issue and verify certificates.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
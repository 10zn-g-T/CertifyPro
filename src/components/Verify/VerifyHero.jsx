import { ShieldCheck } from "lucide-react";

function VerifyHero() {
  return (
    <div
      data-aos="fade-down"
      className="text-center mb-14"
    >
      <span
        className="
        inline-flex
        items-center
        gap-2
        bg-blue-600/15
        border
        border-blue-500/30
        text-blue-400
        px-5
        py-2
        rounded-full
        font-semibold
        backdrop-blur-lg
      "
      >
        <ShieldCheck size={18} />

        Trusted Verification
      </span>

      <h1
        className="
        text-6xl
        md:text-7xl
        font-black
        mt-8
        leading-tight
        text-white
      "
      >
        Verify

        <span
          className="
          bg-gradient-to-r
          from-blue-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
        >
          {" "}
          Certificate
        </span>
      </h1>

      <p
        className="
        text-slate-400
        mt-8
        max-w-2xl
        mx-auto
        text-lg
        leading-8
      "
      >
        Instantly verify the authenticity of certificates
        issued through CertifyPro using our secure verification
        system.
      </p>
    </div>
  );
}

export default VerifyHero;
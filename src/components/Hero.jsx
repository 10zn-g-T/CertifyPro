import heroImage from "../assets/Images/hero.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Database,
  ArrowRight,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">

      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:70px_70px] opacity-40"></div>

      {/* Soft Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40"></div>

      {/* Small Accent Blur */}

      <div className="absolute top-24 right-20 w-72 h-72 bg-blue-200 rounded-full blur-[120px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

{/* Premium Badge */}

<div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-sm">

  <ShieldCheck size={18} className="text-blue-600" />

  <span className="text-sm font-semibold text-slate-700">
    Trusted by 500+ Institutions
  </span>

</div>

{/* Heading */}

<h1 className="mt-8 text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">

  Digital Certificate

  <span className="block text-blue-600">

    Management

  </span>

  <span className="block">

    Built for Modern

  </span>

  <span className="block">

    Education.

  </span>

</h1>

{/* Description */}

<p className="mt-8 max-w-xl text-lg lg:text-xl leading-9 text-slate-600">

  CertifyPro helps universities, colleges and organizations
  issue, verify and manage digital certificates securely with
  QR authentication, instant verification and role-based access.

</p>

{/* Buttons */}

<div className="flex flex-wrap gap-4 mt-10">

  <Link
    to="/issue-certificate"
    className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
  >
    Generate Certificate

    <ArrowRight
      size={18}
      className="group-hover:translate-x-1 transition"
    />
  </Link>

  <Link
    to="/verify"
    className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition"
  >
    Verify Certificate
  </Link>

</div>

{/* Trusted Features */}

<div className="grid grid-cols-2 gap-5 mt-12 max-w-lg">

  <div className="flex items-center gap-3">

    <BadgeCheck className="text-green-600" size={20} />

    <span className="text-slate-700">
      QR Verification
    </span>

  </div>

  <div className="flex items-center gap-3">

    <Database className="text-purple-600" size={20} />

    <span className="text-slate-700">
      Secure Storage
    </span>

  </div>

  <div className="flex items-center gap-3">

    <FileText className="text-blue-600" size={20} />

    <span className="text-slate-700">
      Instant PDF
    </span>

  </div>

  <div className="flex items-center gap-3">

    <ShieldCheck className="text-orange-500" size={20} />

    <span className="text-slate-700">
      Role-Based Access
    </span>

  </div>

</div>
{/* Statistics */}

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 max-w-2xl">

  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

    <h2 className="text-3xl font-black text-slate-900">
      500+
    </h2>

    <p className="mt-2 text-slate-500">
      Trusted Institutions
    </p>

  </div>

  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

    <h2 className="text-3xl font-black text-slate-900">
      12K+
    </h2>

    <p className="mt-2 text-slate-500">
      Certificates Issued
    </p>

  </div>

  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

    <h2 className="text-3xl font-black text-slate-900">
      99.9%
    </h2>

    <p className="mt-2 text-slate-500">
      Verification Accuracy
    </p>

  </div>

</div>
</motion.div>
{/* ================= RIGHT ================= */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>

  {/* Main Illustration */}

  <img
    src={heroImage}
    alt="Hero"
    className="w-full max-w-xl drop-shadow-2xl"
  />

  {/* Certificate Card */}

  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-14 w-80 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6"
  >

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs uppercase tracking-widest text-slate-400">
          Digital Certificate
        </p>

        <h3 className="text-xl font-bold mt-2">
          React Development
        </h3>

      </div>

      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">

        <ShieldCheck
          size={22}
          className="text-white"
        />

      </div>

    </div>

    <div className="border-t my-6"></div>

    <p className="text-slate-500 text-sm">
      Awarded To
    </p>

    <h2 className="text-3xl font-bold mt-2 text-slate-900">
      John Doe
    </h2>

    <p className="mt-4 text-slate-500">
      Certificate ID
    </p>

    <p className="font-mono text-sm mt-1">
      CP-2026-000241
    </p>

    <div className="flex items-center justify-between mt-8">

      <div>

        <p className="text-xs text-slate-500">
          Status
        </p>

        <span className="inline-flex mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

          Verified

        </span>

      </div>

      <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center">

        QR

      </div>

    </div>

  </motion.div>

  {/* Analytics Card */}

  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    }}
    className="absolute right-0 bottom-8 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 w-64"
  >

    <p className="text-sm text-slate-500">

      Certificates Issued

    </p>

    <h2 className="text-4xl font-black mt-2">

      12,486

    </h2>

    <div className="mt-6">

      <div className="flex justify-between text-sm mb-2">

        <span className="text-slate-500">
          Verification Rate
        </span>

        <span className="font-semibold">
          99.9%
        </span>

      </div>

      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">

        <div className="h-full bg-blue-600 rounded-full w-[99%]"></div>

      </div>

    </div>

    <div className="mt-6 flex items-center gap-3">

      <BadgeCheck
        className="text-green-600"
        size={22}
      />

      <span className="text-slate-600">

        All systems operational

      </span>

    </div>

  </motion.div>

</motion.div>

{/* Trusted Technologies */}

<div className="mt-12">

  <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-5">

    Powered By

  </p>

  <div className="flex flex-wrap gap-3">

    {[
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT",
      "QR Security",
    ].map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm"
      >
        {item}
      </span>
    ))}

  </div>

</div>
      </div> {/* End Grid */}

    </div> {/* End Container */}

  </section>
  );
}

export default Hero;
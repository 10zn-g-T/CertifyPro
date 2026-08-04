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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Grid */}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]" />

<div className="absolute -left-40 top-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

<div className="absolute right-0 bottom-0 w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[170px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

{/* Premium Badge */}

<div className="inline-flex items-center gap-2 rounded-full bg-slate-800/70
border border-slate-700
text-white px-5 py-2 shadow-sm">

  <ShieldCheck size={18} className="text-blue-600" />

  <span className="text-sm font-semibold text-white">
    Trusted by 500+ Institutions
  </span>

</div>

{/* Heading */}

<h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">

  Secure Digital

  <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
    Certificate Platform
  </span>

</h1>

{/* Description */}

<p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

  CertifyPro helps universities, colleges and organizations
  issue, verify and manage digital certificates securely with
  QR authentication, instant verification and role-based access.

</p>

{/* Buttons */}

<div className="flex flex-wrap gap-4 mt-10">

  <Link
    to="/verify"
      className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl hover:scale-105 transition duration-300"  >
    Verify Certificate
    <ArrowRight
      size={18}
      className="group-hover:translate-x-1 transition"
    />
  </Link>

  <Link
  to="/register"
  className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/60 px-8 py-4 text-white hover:bg-slate-700 transition"
>
  Get Started
</Link>

</div>

{/* Trusted Features */}

<div className="grid grid-cols-2 gap-5 mt-12 max-w-lg">

  <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-3 backdrop-blur-xl">

<BadgeCheck className="text-green-400" size={20}/>

<span className="text-gray-300">
QR Verification
</span>

</div>

    <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-3 backdrop-blur-xl">

    <Database className="text-purple-600" size={20} />

    <span className="text-gray-300">
      Secure Storage
    </span>

  </div>

      <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-3 backdrop-blur-xl">

    <FileText className="text-blue-600" size={20} />

    <span className="text-gray-300">
      Instant PDF
    </span>

  </div>

      <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-3 backdrop-blur-xl">

    <ShieldCheck className="text-orange-500" size={20} />

    <span className="text-gray-300">
      Role-Based Access
    </span>

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
className="absolute left-0 top-0 w-80 rounded-3xl bg-slate-800/70 backdrop-blur-xl border border-slate-700 shadow-2xl p-6"
  >

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs uppercase tracking-widest text-gray-400">
          Digital Certificate
        </p>

        <h3 className="text-xl font-bold mt-2 text-white">
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

    <p className="text-gray-400 text-sm">
      Awarded To
    </p>

    <h2 className="text-3xl font-bold mt-2 text-white">
      John Doe
    </h2>

    <p className="mt-4 text-gray-400">
      Certificate ID
    </p>

    <p className="font-mono text-sm mt-1">
      CP-2026-000241
    </p>

    <div className="flex items-center justify-between mt-8">

      <div>

        <p className="text-xs text-gray-400">
          Status
        </p>

        <span className="inline-flex mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

          Verified

        </span>

      </div>

      <div className="w-16 h-16 rounded-xl bg-slate-700 flex items-center justify-center">

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
className="absolute right-0 bottom-0 bg-slate-800/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl p-6 w-64"  >

    <p className="text-sm text-gray-400">

      Certificates Issued

    </p>

    <h2 className="text-4xl font-black mt-2 text-white">

      12,486

    </h2>

    <div className="mt-6">

      <div className="flex justify-between text-sm mb-2">

        <span className="text-gray-400">
          Verification Rate
        </span>

        <span className="font-semibold text-white">
          99.9%
        </span>

      </div>

      <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">

        <div className="h-full bg-blue-600 rounded-full w-[99%]"></div>

      </div>

    </div>

    <div className="mt-6 flex items-center gap-3">

      <BadgeCheck
        className="text-green-600"
        size={22}
      />

      <span className="text-gray-300">

        All systems operational

      </span>

    </div>

  </motion.div>

</motion.div>
  
      </div> {/* End Grid */}

    </div> {/* End Container */}

  </section>
  );
}

export default Hero;
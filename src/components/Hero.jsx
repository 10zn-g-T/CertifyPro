import heroImage from "../assets/images/hero.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Database,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center pt-24">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold shadow-sm">

            <ShieldCheck size={18} />

            Trusted Digital Certificate Platform

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-slate-900">

            Issue,

            <span className="text-blue-600"> Verify </span>

            & Manage

            <br />

            Digital Certificates

          </h1>

          {/* Paragraph */}

          <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">

            Create secure digital certificates with QR verification,
            cloud storage, instant PDF generation and a centralized
            dashboard built for modern institutions.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/issue-certificate"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-xl hover:-translate-y-1 hover:bg-blue-700 transition duration-300"
            >
              Generate Certificate
            </Link>

            <Link
              to="/verify"
              className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Verify Certificate
            </Link>

          </div>

          {/* Trust Badges */}

          <div className="flex flex-wrap gap-8 mt-12">

            <div className="flex items-center gap-2 text-slate-700">

              <BadgeCheck className="text-green-600" />

              QR Protected

            </div>

            <div className="flex items-center gap-2 text-slate-700">

              <FileText className="text-blue-600" />

              PDF Ready

            </div>

            <div className="flex items-center gap-2 text-slate-700">

              <Database className="text-purple-600" />

              Cloud Stored

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >

          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-xl"
          />

          {/* Floating Certificate */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-0 left-0 bg-white rounded-3xl shadow-2xl p-6 w-72 border border-gray-100"
          >

            <h3 className="text-xl font-bold text-slate-900">

              CERTIFYPRO

            </h3>

            <p className="text-sm text-gray-500 mt-1">

              Certificate Preview

            </p>

            <div className="border-t my-4"></div>

            <h2 className="text-lg font-bold text-blue-600">

              John Doe

            </h2>

            <p className="text-gray-600">

              React Development

            </p>

            <div className="mt-6 flex justify-between items-center">

              <span className="text-xs text-gray-500">

                Verified

              </span>

              <div className="w-12 h-12 rounded bg-gray-200"></div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
import heroImage from "../assets/images/hero.svg";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center pt-28">

      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">

        {/* Left */}

        <div className="flex-1">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            🛡 Trusted by 500+ Institutions
          </span>

          <h1 className="text-6xl font-bold text-slate-900 leading-tight mt-8">
            Online Certificate
            <br />
            Verification System
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Securely issue, manage and verify certificates using
            QR Codes, unique Certificate IDs and digital authentication.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
              Issue Certificate
            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition">
              Verify Certificate
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1 flex justify-center">

          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
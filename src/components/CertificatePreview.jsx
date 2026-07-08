import {
  ShieldCheck,
  CalendarDays,
  Award,
  QrCode,
  BadgeCheck,
} from "lucide-react";

function CertificatePreview() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background */}

      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div data-aos="fade-right">
         
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

            <Award size={18} />

            Premium Digital Certificate

          </span>

          <h2 className="text-5xl font-black mt-8 leading-tight text-slate-900">

            Beautiful Certificates

            <span className="text-blue-600">

              {" "}Designed for Trust

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Every certificate generated through CertifyPro includes a
            unique Certificate ID, secure QR verification, cloud storage,
            digital authentication and instant PDF export.

          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">

              <ShieldCheck className="text-green-600" />

              <span className="text-lg">
                Military-grade certificate verification
              </span>

            </div>

            <div className="flex items-center gap-4">

              <QrCode className="text-blue-600" />

              <span className="text-lg">
                QR Code based instant validation
              </span>

            </div>

            <div className="flex items-center gap-4">

              <CalendarDays className="text-purple-600" />

              <span className="text-lg">
                Lifetime certificate validity
              </span>

            </div>

            <div className="flex items-center gap-4">

              <BadgeCheck className="text-orange-500" />

              <span className="text-lg">
                Trusted by educational institutions
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div
            data-aos="zoom-in"
             className="flex justify-center"
        >

          <div className="relative bg-white rounded-[30px] shadow-2xl border-[12px] border-blue-600 p-12 w-full max-w-xl">

            {/* Watermark */}

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">

              <h1 className="text-9xl font-black rotate-[-25deg]">

                CERTIFYPRO

              </h1>

            </div>

            <div className="relative z-10">

              <p className="text-center tracking-[8px] text-gray-500 uppercase">

                Certificate of Achievement

              </p>

              <h2 className="text-center text-4xl font-black mt-5 text-slate-900">

                CERTIFYPRO

              </h2>

              <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

              <p className="text-center mt-10 text-gray-500">

                This certificate is proudly presented to

              </p>

              <h1 className="text-center text-5xl font-black text-blue-600 mt-5">

                John Doe

              </h1>

              <p className="text-center mt-8 text-gray-600">

                For successfully completing

              </p>

              <h3 className="text-center text-3xl font-bold mt-3">

                Full Stack MERN Development

              </h3>

              <div className="grid grid-cols-2 gap-8 mt-14">

                <div>

                  <p className="text-sm text-gray-500">

                    Certificate ID

                  </p>

                  <h4 className="font-bold mt-2">

                    CERT-2026001

                  </h4>

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Issue Date

                  </p>

                  <h4 className="font-bold mt-2">

                    07 July 2026

                  </h4>

                </div>

              </div>

              <div className="flex justify-between items-end mt-14">

                <div>

                  <div className="border-t-2 border-gray-400 w-36"></div>

                  <p className="mt-2 text-sm">

                    Authorized Signature

                  </p>

                </div>

                <div className="bg-gray-100 rounded-xl p-4">

                  <QrCode size={65} />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CertificatePreview;
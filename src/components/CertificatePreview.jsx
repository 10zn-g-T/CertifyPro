import {
  ShieldCheck,
  CalendarDays,
  Award,
  QrCode,
  BadgeCheck,
} from "lucide-react";

import CertificateTemplate from "./CertificateTemplate";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function CertificatePreview() {

const printRef = useRef();

const handlePrint = useReactToPrint({
  contentRef: printRef,
  documentTitle: "Sample Certificate",
});

const sampleCertificate = {
  studentName: "John Doe",
  course: "Full Stack MERN Development",
  certificateId: "CERT-2026001",
  issueDate: new Date(),
};


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
<button
  onClick={handlePrint}
  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
>
  Download Sample PDF
</button>
          </div>

        </div>
{/* RIGHT */}

<div ref={printRef}
  data-aos="zoom-in"
  className="flex justify-center"
>
  <CertificateTemplate 
    certificate={sampleCertificate}
    />
</div>
       
       

          </div>

     

    </section>
  );
}

export default CertificatePreview;
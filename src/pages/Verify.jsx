import { useState } from "react";
import {
  Search,
  ShieldCheck,
  BadgeCheck,
  LoaderCircle,
  User,
  Mail,
  GraduationCap,
  Building2,
  CalendarDays,
  Star,
  FileText,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import API from "../api/certificateApi";
import Footer from "../components/Footer";

function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
     if (!certificateId.trim()) {
        setCertificate(null);
        setError("Please enter a Certificate ID");
        return;
        }

         setLoading(true);
         setError("");
setCertificate(null);

        try {
           const response = await API.get(`/certificates/${certificateId}`);

           setCertificate(response.data.certificate);
           setError("");

        } catch (err) {
            setCertificate(null);
            setError("Certificate Not Found");
        }finally {

    setLoading(false);

  }
    };

  return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6">

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

                <div
                    data-aos="fade-down"
                        className="text-center"
                >

<span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

<ShieldCheck size={18} />

Trusted Verification

</span>

<h1 className="text-6xl font-black text-slate-900 mt-8">

Verify

<span className="text-blue-600">

 Certificate

</span>

</h1>

<p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto leading-8">

Instantly verify the authenticity of certificates
issued through CertifyPro.

</p>

</div>

<div
    data-aos="zoom-in"
    className="mt-14 flex gap-5"
>

<div className="relative flex-1">

    <Search
    size={22}
    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
   />

<input
    type="text"
    placeholder="Enter Certificate ID"
    value={certificateId}
    onChange={(e)=>setCertificateId(e.target.value)}
    onKeyDown={(e)=>e.key==="Enter" && handleVerify()}
    className="w-full rounded-2xl border border-gray-300 bg-white py-5 pl-14 pr-5 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

</div>

<button
onClick={handleVerify}
disabled={loading}
className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-all duration-300 text-white px-10 rounded-2xl font-semibold shadow-xl flex items-center gap-3"
>

{

loading ? 
<>

    <LoaderCircle
        size={20}
        className="animate-spin"
    />

    Verifying...

</>  :

<>

    <Search size={20}/>

    Verify

</>

}

</button>

</div>

                

                {error && (

<div
  data-aos="zoom-in"
  className="mt-10 bg-red-50 border border-red-200 rounded-3xl p-8 shadow-lg"
>

  <div className="flex items-start gap-5">

    <div className="bg-red-100 p-4 rounded-full">

      <XCircle
        size={36}
        className="text-red-600"
      />

    </div>

    <div>

      <h2 className="text-2xl font-bold text-red-700">

        Certificate Not Found

      </h2>

      <p className="text-gray-600 mt-3 leading-7">

        We couldn't find any certificate with the provided
        Certificate ID.

      </p>

      <div className="mt-6 bg-white rounded-xl p-4 border">

        <p className="font-semibold mb-2">

          Please make sure:

        </p>

        <ul className="space-y-2 text-gray-600">

          <li>✔ Certificate ID is entered correctly</li>

          <li>✔ There are no extra spaces</li>

          <li>✔ The certificate has already been issued</li>

        </ul>

      </div>

    </div>

  </div>

</div>

)}

                {certificate && (

                    <div 
                    data-aos="fade-up"
className="mt-12 bg-white border border-green-200 rounded-3xl shadow-xl overflow-hidden"
>

                        {/* Header */}

    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">

        <div className="flex items-center gap-3">

            <CheckCircle2 size={34} />

            <div>

                <h2 className="text-3xl font-bold">
                    Certificate Verified
                </h2>

                <p className="opacity-90 mt-1">
                    This certificate is authentic and issued by CertifyPro.
                </p>

            </div>

        </div>

    </div>

    {/* Details */}

    <div className="p-8 grid md:grid-cols-2 gap-6">

        <div className="bg-slate-50 rounded-2xl p-5">
            <User className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Student Name</p>
            <h3 className="font-bold text-xl">
                {certificate.studentName}
            </h3>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5">
            <Mail className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Email</p>
            <h3 className="font-semibold">
                {certificate.studentEmail}
            </h3>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5">
            <GraduationCap className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Course</p>
            <h3 className="font-semibold">
                {certificate.course}
            </h3>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5">
            <Building2 className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Institution</p>
            <h3 className="font-semibold">
                {certificate.institution}
            </h3>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5">
            <CalendarDays className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Issue Date</p>
            <h3 className="font-semibold">
                {certificate.issueDate}
            </h3>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5">
            <Star className="text-yellow-500 mb-3" />
            <p className="text-sm text-gray-500">Grade</p>
            <h3 className="font-bold text-lg">
                {certificate.grade}
            </h3>
        </div>

    </div>

    {/* Description */}

    <div className="px-8 pb-8">

        <div className="bg-blue-50 rounded-2xl p-6">

            <FileText className="text-blue-600 mb-3" />

            <p className="text-sm text-gray-500 mb-2">
                Description
            </p>

            <p className="text-gray-700 leading-7">
                {certificate.description}
            </p>

        </div>

    </div>

    {/* Footer */}

    <div className="border-t bg-gray-50 px-8 py-6 flex flex-wrap gap-4">

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            ✓ QR Verified
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            ✓ Secure Database
        </span>

        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
            ✓ Digital Signature
        </span>

        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
            ✓ Lifetime Valid
        </span>

    </div>

                    </div>

                )}

            </div>

        </div>
        
    );
}

export default Verify;
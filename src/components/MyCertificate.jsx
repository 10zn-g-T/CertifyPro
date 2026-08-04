import { FileText, Download, Eye, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/CertificateApi";


function MyCertificates() {
 
const [certificates, setCertificates] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await API.get("/certificates/my");
      setCertificates(response.data.certificates);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section className="mt-10">

      <div className="flex items-center gap-3 mb-6">

        <FileText className="text-blue-500" size={28} />

        <div>
          <h2 className="text-2xl font-bold text-white">
            My Certificates
          </h2>

          <p className="text-slate-400 text-sm">
            View all certificates issued to your account.
          </p>
        </div>

      </div>

      {certificates.length === 0 ? (

        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-12 text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 flex items-center justify-center">

            <FileText size={40} className="text-blue-500" />

          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            No Certificates Found
          </h3>

          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            You haven't received any certificates yet.
            Certificates issued by your institution will
            automatically appear here.
          </p>

          <Link
            to="/verify"
            className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Verify Certificate
          </Link>

        </div>

      ) : (

        <div className="grid gap-5">

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-6"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Certificate ID :
                    <span className="ml-2 font-mono">
                      {certificate.id}
                    </span>
                  </p>

                  <p className="text-slate-400 mt-1">
                    Issued :
                    <span className="ml-2">
                      {certificate.issuedOn}
                    </span>
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-green-400">

                    <BadgeCheck size={18} />

                    {certificate.status}

                  </div>

                </div>

                <div className="flex gap-3">

                  <button className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
                    <Eye size={20} />
                  </button>

                  <button className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                    <Download size={20} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default MyCertificates;
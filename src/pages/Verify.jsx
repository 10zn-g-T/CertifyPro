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
import API from "../api/CertificateApi";
import Footer from "../components/Footer";
import VerifyHero from "../components/Verify/VerifyHero";
import VerifySearch from "../components/Verify/VerifySearch";
import VerifyError from "../components/Verify/VerifyError";
import VerifyResult from "../components/Verify/VerifyResult";

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
    
<div className="
min-h-screen
relative
overflow-hidden
bg-gradient-to-br
from-slate-950
via-slate-900
to-black
text-white
py-28
px-6
">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[170px] opacity-20 animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[170px] opacity-20 animate-pulse"></div>
           
           
<div
className="
relative
z-10
max-w-5xl
mx-auto
rounded-[32px]
bg-slate-900/70
backdrop-blur-xl
border
border-slate-700
shadow-2xl
p-12
"
>
               
 <VerifyHero />

<VerifySearch
  certificateId={certificateId}
  setCertificateId={setCertificateId}
  handleVerify={handleVerify}
  loading={loading}
/>

                

    {error && <VerifyError />}

           
{certificate && (
    <VerifyResult
        certificate={certificate}
    />
)}
            </div>

        </div>
        
    );
}

export default Verify;
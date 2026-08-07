import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/CertificateApi";
import toast from "react-hot-toast";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import StatsCards from "../components/Dashboard/StatsCards";
import SearchBar from "../components/Dashboard/SearchBar";
import CertificateTable from "../components/Dashboard/CertificateTable";
import PrintableCertificate from "../components/PrintableCertificate";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import MyCertificates from "../components/MyCertificate";

import {
  Plus,
} from "lucide-react";


function AdminDashboard() {
  const role = localStorage.getItem("role");

const isAdmin = role === "admin";
const isFaculty = role === "faculty";
const isStudent = role === "student";

  const [certificates, setCertificates] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const printRef = useRef();
  const [printCertificate, setPrintCertificate] = useState(null);
  const [deleteCertificate, setDeleteCertificate] = useState(null);

  const handlePrint = useReactToPrint({
  contentRef: printRef,
  documentTitle: "Certificate",
});

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const response = await API.get("/certificates");
      setCertificates(response.data.certificates);
  
    } catch (error) {
      console.error(error);
   
    }finally {
    setLoading(false);
    }
  };

  const [viewCertificate, setViewCertificate] = useState(null);

  const filteredCertificates = certificates.filter((certificate) =>
  certificate.studentName.toLowerCase().includes(search.toLowerCase()) ||
  certificate.course.toLowerCase().includes(search.toLowerCase()) ||
  certificate.certificateId.toLowerCase().includes(search.toLowerCase())
);



const handleUpdate = async () => {
  try {
    await API.put(
      `/certificates/${editingCertificate._id}`,
      editingCertificate
    );

    toast.success("Certificate Updated Successfully");

    setEditingCertificate(null);

    fetchCertificates();

  } catch (error) {
    console.error(error);

     toast.error("Failed to Update Certificate");
  }
};

const handleDelete = async (id) => {
  try {
    await API.delete(`/certificates/${id}`);

    toast.success("Certificate Deleted Successfully");

    fetchCertificates();
  } catch (error) {
    toast.error("Failed to Delete Certificate");
  }
};

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-white
                  dark:from-slate-950 dark:via-slate-900 dark:to-black
                text-slate-900 dark:text-white">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="text-2xl font-bold mt-8">
          Loading Dashboard...
        </h2>

        <p className="text-gray-500 mt-2">
          Fetching certificate records
        </p>

      </div>

    </div>
  );
}
const handleLogout = () => {
  localStorage.removeItem("token");

  toast.success("Logged Out Successfully");

  navigate("/login");
};
  return (
    
      <div
  className="relative min-h-screen flex flex-col overflow-hidden
  bg-slate-950
  text-white
  px-30
  pt-30"
>
  {/* Floating Background */}

  <div className="absolute top-10 -left-32 w-96 h-96 bg-blue-600/20 blur-[170px] rounded-full" />

<div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[190px] rounded-full" />

<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 blur-[160px] rounded-full" />

<div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-600/10 blur-[150px] rounded-full" />

  {/* Main Content */}
  <div className="relative z-10 flex-1">


  {/* HEADER */}

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

    <div>

     <p className="uppercase tracking-[8px] text-blue-400 font-semibold px-5 py-3">
  {isAdmin
    ? "Admin Panel"
    : isFaculty
    ? "Faculty Panel"
    : "Student Panel"}
</p>

      <DashboardHeader onLogout={handleLogout} />  

<span className="
inline-flex items-center gap-2
mt-6
px-5 py-2
rounded-full
bg-emerald-500/10
border border-emerald-500/30
text-emerald-300
backdrop-blur-xl
">
    🟢 System Online

  </span>

    </div>

{(isAdmin || isFaculty) && (
    <Link
      to="/issue-certificate"
      className="mt-8 lg:mt-0 bg-gradient-to-r
from-blue-600
to-indigo-600
shadow-[0_10px_40px_rgba(37,99,235,.4)] hover:bg-blue-700 text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:scale-105 duration-300"
    >
      <Plus size={22} />

      Issue Certificate
    </Link>
)}
  </div>

  {/* STATISTICS */}  

  {(isAdmin || isFaculty) && (  
  <StatsCards certificates={certificates} />
  )}  
  

  {/* SEARCH */}
   {!isStudent && (
  <SearchBar
    search={search}
    setSearch={setSearch}
  />
)}

     
     {(isAdmin || isFaculty) && (
<div
className="
mt-6
rounded-3xl
bg-white/5
backdrop-blur-2xl
border border-white/10
shadow-[0_20px_80px_rgba(0,0,0,.35)]
overflow-hidden
"
>
        <CertificateTable
          role={role}
  certificates={filteredCertificates}
  onEdit={setEditingCertificate}
  onDelete={(certificate) => setDeleteCertificate(certificate)}
  onView={(certificate) => setViewCertificate(certificate)}
  onDownload={(certificate) => {
    setPrintCertificate(certificate);

    setTimeout(() => {
        handlePrint();
    }, 300);
}}
/>
   </div>
     )}     

{isStudent && (
  <MyCertificates />
)}


      {isAdmin && editingCertificate && (
  <div className="
fixed
inset-0
z-50
bg-black/70
backdrop-blur-md
flex
items-center
justify-center
px-6
">

    <div className="
w-full
max-w-xl
rounded-[32px]
bg-slate-900/80
backdrop-blur-2xl
border
border-slate-700
shadow-[0_20px_80px_rgba(0,0,0,.5)]
p-8
text-white
animate-[fadeIn_.3s]
">

      <h2 className="text-3xl font-bold mb-8 text-white">
        Edit Certificate
      </h2>

      <input
        type="text"
        value={editingCertificate.studentName}
        onChange={(e) =>
          setEditingCertificate({
            ...editingCertificate,
            studentName: e.target.value,
          })
        }
className="
w-full
rounded-2xl
bg-slate-800/70
border
border-slate-700
text-white
placeholder:text-slate-500
px-5
py-4
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/30 
"      />

      <input
        type="text"
        value={editingCertificate.course}
        onChange={(e) =>
          setEditingCertificate({
            ...editingCertificate,
            course: e.target.value,
          })
        }
className="
w-full
rounded-2xl
bg-slate-800/70
border
border-slate-700
text-white
placeholder:text-slate-500
px-5
py-4
outline-none
transition
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/30 mt-3
"      />

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setEditingCertificate(null)}
          className="px-6 py-3 mt-2 rounded-xl bg-slate-800
border
border-slate-700
text-slate-300
hover:bg-slate-700 duration-300"
        >
          Cancel
        </button>

        <button
        
  onClick={handleUpdate}
  className="px-6 py-3 mt-2 rounded-xl bg-gradient-to-r
from-blue-600
to-indigo-600
hover:from-blue-700
hover:to-indigo-700
shadow-lg
hover:shadow-blue-500/30 text-white duration-300"
>
 
    
          Save Changes
        </button>

      </div>

    </div>

  </div>
)}
</div>   {/* End Main Content */}


{viewCertificate && (
  <div
  className="
    fixed
    inset-0
    z-50
    bg-black/70
    backdrop-blur-md
    flex
    items-center
    justify-center
    px-6
  "
>
    <div
  className="
    relative
    w-[700px]
    max-w-[95%]
    rounded-[32px]
    bg-slate-900/80
    backdrop-blur-2xl
    border
    border-slate-700
    shadow-[0_20px_80px_rgba(0,0,0,.5)]
    p-8
    text-white
  "
>
      <button
        onClick={() => setViewCertificate(null)}
        className="
absolute
top-5
right-5
text-slate-400
hover:text-white
transition
text-2xl
"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Certificate Preview
      </h2>

    <div
  className="
    rounded-3xl
    border
    border-slate-700
    bg-slate-800/60
    backdrop-blur-xl
    p-10
    text-center
  "
>

        <h1 className="text-4xl font-black text-blue-400">
          CERTIFYPRO
        </h1>

        <p className="mt-8 text-slate-400">
          This certificate is proudly presented to
        </p>

        <h2 className="text-5xl font-bold text-cyan-400 mt-5">
          {viewCertificate.studentName}
        </h2>

        <p className="mt-8 text-slate-300">
          For successfully completing
        </p>

        <h3 className="text-3xl font-bold mt-3 text-white">
          {viewCertificate.course}
        </h3>

        <p className="mt-10 font-mono text-emerald-400 tracking-widest">
          {viewCertificate.certificateId}
        </p>

      </div>

    </div>

  </div>
)}

{deleteCertificate && (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">

    <div className="w-full max-w-md rounded-3xl bg-slate-900/90 border border-red-500/20 p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-red-400">
        Delete Certificate
      </h2>

      <p className="mt-5 text-slate-300">
        Are you sure you want to delete
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {deleteCertificate.studentName}
      </h3>

      <p className="text-slate-500 mt-3">
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => setDeleteCertificate(null)}
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700"
        >
          Cancel
        </button>

        <button
          onClick={async () => {
            await handleDelete(deleteCertificate._id);
            setDeleteCertificate(null);
          }}
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white"
        >
          Delete
        </button>

      </div>

    </div>

  </div>
)}

<div className="fixed -left-[9999px] top-0">

    <div ref={printRef}>

        <PrintableCertificate
            certificate={printCertificate}
        />

    </div>

</div>

{/* Footer */}

<div className="mt-auto pt-15 pb-9 text-center text-gray-500 text-sm">

<p>

© 2026 CertifyPro • Certificate Management System

</p>

<p className="mt-2">

Developed using React • Tailwind CSS • Node.js • MongoDB

</p>

</div>
    </div>
    
  );
}

export default AdminDashboard;
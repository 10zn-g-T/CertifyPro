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

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this certificate?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/certificates/${id}`);

    toast.success("Certificate Deleted Successfully");

    fetchCertificates();

  } catch (error) {
    console.error(error);

    toast.error(" Failed to Delete Certificate");
  }
};

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
    
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-blue-50 to-white
                       dark:from-slate-950 dark:via-slate-900 dark:to-black
                  text-slate-900 dark:text-white px-30 pt-30 ">
  {/* Floating Background */}

  <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

  {/* Main Content */}
  <div className="relative z-10 flex-1">


  {/* HEADER */}

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

    <div>

     <p className="uppercase tracking-[6px] text-blue-600 font-semibold px-5 py-3">
  {isAdmin
    ? "Admin Panel"
    : isFaculty
    ? "Faculty Panel"
    : "Student Panel"}
</p>

      <DashboardHeader onLogout={handleLogout} />
      
<span className="inline-flex items-center gap-2 mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

    🟢 System Online

  </span>

    </div>

{(isAdmin || isFaculty) && (
    <Link
      to="/issue-certificate"
      className="mt-8 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:scale-105 duration-300"
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
    <SearchBar
      search={search}
      setSearch={setSearch}
    />

     
     {(!isStudent || search.trim() !== "") && (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:border-blue-500 mt-4 transition-all duration-300">

        <CertificateTable
          role={role}
  certificates={filteredCertificates}
  onEdit={setEditingCertificate}
  onDelete={handleDelete}
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


      {isAdmin && editingCertificate && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-xl animate-[fadeIn_.3s]">

      <h2 className="text-3xl font-bold mb-8">
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
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3  focus:border-blue-500 outline-none duration-300"
      />

      <input
        type="text"
        value={editingCertificate.course}
        onChange={(e) =>
          setEditingCertificate({
            ...editingCertificate,
            course: e.target.value,
          })
        }
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 mt-2 focus:border-blue-500 outline-none duration-300"
      />

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setEditingCertificate(null)}
          className="px-6 py-3 mt-2 rounded-xl bg-gray-200 hover:bg-gray-300 duration-300"
        >
          Cancel
        </button>

        <button
        
  onClick={handleUpdate}
  className="px-6 py-3 mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white duration-300"
>
 
    
          Save Changes
        </button>

      </div>

    </div>

  </div>
)}
</div>   {/* End Main Content */}


{viewCertificate && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

    <div className="bg-white rounded-3xl p-8 w-[700px] max-w-[95%] shadow-2xl relative">

      <button
        onClick={() => setViewCertificate(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-center mb-6">
        Certificate Preview
      </h2>

      <div className="border-4 border-blue-600 rounded-2xl p-10 text-center">

        <h1 className="text-4xl font-black text-blue-700">
          CERTIFYPRO
        </h1>

        <p className="mt-8 text-gray-500">
          This certificate is proudly presented to
        </p>

        <h2 className="text-5xl font-bold text-blue-600 mt-5">
          {viewCertificate.studentName}
        </h2>

        <p className="mt-8">
          For successfully completing
        </p>

        <h3 className="text-3xl font-bold mt-3">
          {viewCertificate.course}
        </h3>

        <p className="mt-10 font-mono">
          {viewCertificate.certificateId}
        </p>

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
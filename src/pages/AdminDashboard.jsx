import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/certificateApi";
import {
  Search,
  Plus,
  FileText,
  GraduationCap,
  Building2,
  Award,
  Eye,
  Pencil,
  Trash2,
  Copy,
  CheckCircle2,
} from "lucide-react";


function AdminDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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

  const filteredCertificates = certificates.filter((certificate) =>
  certificate.studentName.toLowerCase().includes(search.toLowerCase()) ||
  certificate.course.toLowerCase().includes(search.toLowerCase()) ||
  certificate.certificateId.toLowerCase().includes(search.toLowerCase())
);

const totalCertificates = certificates.length;

const totalCourses = new Set(
  certificates.map((c) => c.course)
).size;

const totalInstitutions = new Set(
  certificates.map((c) => c.institution)
).size;

const averageGrade =
  certificates.length > 0 ? "A" : "--";

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this certificate?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/certificates/${id}`);

    alert("✅ Certificate Deleted Successfully");

    fetchCertificates();

  } catch (error) {
    console.error(error);

    alert("❌ Failed to Delete Certificate");
  }
};

const handleUpdate = async () => {
  try {
    await API.put(
      `/certificates/${editingCertificate._id}`,
      editingCertificate
    );

    alert("✅ Certificate Updated Successfully");

    setEditingCertificate(null);

    fetchCertificates();

  } catch (error) {
    console.error(error);

    alert("❌ Failed to Update Certificate");
  }
};

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-white">

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

  return (
    
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-white p-8">
  {/* Floating Background */}

  <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

  {/* Main Content */}
  <div className="relative z-10">
  {/* HEADER */}

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

    <div>

      <p className="uppercase tracking-[6px] text-blue-600 font-semibold">

        Admin Panel

      </p>

      <h1 className="text-5xl font-black mt-3">

        Admin Dashboard

      </h1>
      <p className="text-gray-500 mt-3 text-lg">

  Welcome back, Administrator 👋

</p>
<span className="inline-flex items-center gap-2 mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

    🟢 System Online

  </span>

      <p className="text-gray-600 mt-3 text-lg">

        Manage certificates, edit records, search students and monitor your platform.

      </p>

    </div>

    <Link
      to="/issue-certificate"
      className="mt-8 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:scale-105 duration-300"
    >
      <Plus size={22} />

      Issue Certificate
    </Link>

  </div>

  {/* STATISTICS */}

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mb-10">

    <div className="bg-white rounded-3xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-500">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            Total Certificates

          </p>

          <h2 className="text-5xl font-black mt-3">

            {totalCertificates}

          </h2>

        </div>

        <div className="bg-blue-100 p-4 rounded-2xl">

          <FileText className="text-blue-600" size={32} />

        </div>

      </div>

    </div>

    <div className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            Courses

          </p>

          <h2 className="text-5xl font-black mt-3">

            {totalCourses}

          </h2>

        </div>

        <div className="bg-green-100 p-4 rounded-2xl">

          <GraduationCap className="text-green-600" size={32} />

        </div>

      </div>

    </div>

    <div className="bg-white rounded-3xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-500">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            Institutions

          </p>

          <h2 className="text-5xl font-black mt-3">

            {totalInstitutions}

          </h2>

        </div>

        <div className="bg-purple-100 p-4 rounded-2xl">

          <Building2 className="text-purple-600" size={32} />

        </div>

      </div>

    </div>

    <div className="bg-white rounded-3xl p-7 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-500">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            Average Grade

          </p>

          <h2 className="text-5xl font-black mt-3">

            {averageGrade}

          </h2>

        </div>

        <div className="bg-orange-100 p-4 rounded-2xl">

          <Award className="text-orange-500" size={32} />

        </div>

      </div>

    </div>

  </div>

  {/* SEARCH */}

  <div className="bg-white rounded-2xl shadow-lg p-5 mb-10">

    <div className="relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search certificates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        shadow-inner
        className="w-full pl-14 pr-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
      />

    </div>

  </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-50">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-slate-700 to-blue-700 text-white">

            <tr>
                  <th className="px-6 py-5 text-left">Student</th>

    <th className="px-6 py-5 text-left">Course</th>

    <th className="px-6 py-5 text-left">Certificate ID</th>

    <th className="px-6 py-5 text-center">Grade</th>

    <th className="px-6 py-5 text-center">Status</th>

    <th className="px-6 py-5 text-center">Actions</th>
            </tr>

          </thead>

<tbody>

{filteredCertificates.length === 0 ? (

<tr>

<td
colSpan="6"
className="text-center py-16"
>

<div className="flex flex-col items-center py-12">

<FileText
size={70}
className="text-blue-400 mb-5"
/>

<h2 className="text-3xl font-black">

    No Certificates Yet

  </h2>

  <p className="text-gray-500 mt-3">

    Start by issuing your first certificate.

  </p>

<Link
to="/issue-certificate"
className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
>

Issue Certificate

</Link>

</div>

</td>

</tr>

) : (

filteredCertificates.map((certificate) => (

<tr
key={certificate._id}
className="border-b hover:bg-blue-50 over:scale-[1.01] duration-300 hover:shadow-md transition-all"
>

<td className="px-6 py-5">

<div className="flex items-center gap-4">

<div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

{certificate.studentName.charAt(0)}

</div>

<div>

<h3 className="font-bold">

{certificate.studentName}

</h3>

<p className="text-sm text-gray-500">

{certificate.institution || "N/A"}

</p>

</div>

</div>

</td>

<td className="px-6 py-5">

{certificate.course}

</td>

<td className="px-6 py-5">

<div className="flex items-center gap-3">

<span className="font-semibold">

{certificate.certificateId}

</span>

<button

onClick={() => {

navigator.clipboard.writeText(
certificate.certificateId
);

alert("Certificate ID Copied");

}}

>

<Copy
size={16}
className="text-blue-600 hover:scale-125 duration-300"
/>

</button>

</div>

</td>

<td className="px-6 py-5 text-center">

<span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

{certificate.grade}

</span>

</td>

<td className="px-6 py-5 text-center">

<span className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center justify-center gap-2 w-fit mx-auto">

<CheckCircle2 size={16}/>

Verified

</span>

</td>

<td className="px-6 py-5">

<div className="flex justify-center gap-3">

<button

onClick={() => setSelectedCertificate(certificate)}

className="bg-gray-100 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition"

>

<Eye size={18}/>

</button>

<button

onClick={() => setEditingCertificate(certificate)}

className="bg-yellow-100 p-3 rounded-xl hover:bg-yellow-500 hover:text-white duration-300"

>

<Pencil size={18}/>

</button>

<button

onClick={() => handleDelete(certificate._id)}

className="bg-red-100 p-3 rounded-xl hover:bg-red-600 hover:text-white duration-300"

>

<Trash2 size={18}/>

</button>

</div>

</td>

</tr>

))

)}

</tbody>

<div className="mt-16 text-center text-gray-500 text-sm">

<p>

© 2026 CertifyPro • Certificate Management System

</p>

<p className="mt-2">

Developed using React • Tailwind CSS • Node.js • MongoDB

</p>

</div>

        </table>

      </div>

      {editingCertificate && (
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

{selectedCertificate && (

<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

<div className="bg-white rounded-3xl p-10 w-full max-w-3xl relative shadow-2xl">

<button

onClick={() => setSelectedCertificate(null)}

className="absolute right-6 top-6 text-3xl"

>

×

</button>

<p className="uppercase tracking-[6px] text-center text-gray-500">

Certificate of Achievement

</p>

<h1 className="text-center text-5xl font-black mt-4">

CERTIFYPRO

</h1>

<div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

<p className="text-center mt-12 text-gray-500">

This certificate is proudly awarded to

</p>

<h2 className="text-center text-6xl font-black text-blue-600 mt-6">

{selectedCertificate.studentName}

</h2>

<p className="text-center mt-10 text-gray-600">

For successfully completing

</p>

<h3 className="text-center text-4xl font-bold mt-4">

{selectedCertificate.course}

</h3>

<div className="grid grid-cols-2 gap-8 mt-16">

<div>

<p className="text-gray-500">

Certificate ID

</p>

<h4 className="font-bold mt-2">

{selectedCertificate.certificateId}

</h4>

</div>

<div>

<p className="text-gray-500">

Grade

</p>

<h4 className="font-bold mt-2">

{selectedCertificate.grade}

</h4>

</div>

</div>

<div className="flex justify-between mt-16">

<div>

<div className="border-t w-40"></div>

<p className="mt-2">

Authorized Signature

</p>

</div>

<div className="text-7xl">

📱

</div>

</div>

</div>

</div>

)}

    </div>
  );
}

export default AdminDashboard;
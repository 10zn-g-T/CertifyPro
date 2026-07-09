import { useEffect, useState } from "react";
import API from "../api/certificateApi";

function AdminDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCertificate, setEditingCertificate] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await API.get("/certificates");
      setCertificates(response.data.certificates);
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Admin Dashboard
      </h1>

        <div className="mb-6">
             <input
               type="text"
              placeholder="Search by Student Name, Course or Certificate ID..."
               value={search}
             onChange={(e) => setSearch(e.target.value)}
                className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500"
            />
        </div>


      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4">Certificate ID</th>
              <th className="p-4">Student</th>
              <th className="p-4">Course</th>
              <th className="p-4">Grade</th>
              <th className="p-4">Actions</th>
            </tr>

          </thead>

          <tbody>


<div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-blue-600 text-white rounded-2xl p-6 shadow">
    <h2 className="text-lg">Total Certificates</h2>
    <p className="text-4xl font-bold mt-2">
      {certificates.length}
    </p>
  </div>

  <div className="bg-green-600 text-white rounded-2xl p-6 shadow">
    <h2 className="text-lg">Courses</h2>
    <p className="text-4xl font-bold mt-2">
      {new Set(certificates.map(c => c.course)).size}
    </p>
  </div>

  <div className="bg-purple-600 text-white rounded-2xl p-6 shadow">
    <h2 className="text-lg">Institutions</h2>
    <p className="text-4xl font-bold mt-2">
      {new Set(certificates.map(c => c.institution)).size}
    </p>
  </div>

</div>




            {filteredCertificates.map((certificate) => (

              <tr
                key={certificate._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {certificate.certificateId}
                </td>

                <td className="p-4">
                  {certificate.studentName}
                </td>

                <td className="p-4">
                  {certificate.course}
                </td>

                <td className="p-4">
                  {certificate.grade}
                </td>

                <td className="p-4 flex gap-4">

                    <button
                        onClick={() => setEditingCertificate(certificate)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Edit
                    </button>

                   
                    <button
                         onClick={() => handleDelete(certificate._id)}
                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                          
                        Delete

                    </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {editingCertificate && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

    <div className="bg-white rounded-2xl p-8 w-[500px]">

      <h2 className="text-2xl font-bold mb-6">
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
        className="w-full border p-3 rounded-lg mb-4"
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
        className="w-full border p-3 rounded-lg mb-6"
      />

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setEditingCertificate(null)}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
        
  onClick={handleUpdate}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
 
    
          Save Changes
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
}

export default AdminDashboard;
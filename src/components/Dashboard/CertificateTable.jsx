import {
  FiEdit2,
  FiTrash2,
  FiEye,
  FiDownload,
} from "react-icons/fi";

import { FileSearch } from "lucide-react";

function CertificateTable({
  role = "faculty",
  certificates,
  onEdit,
  onDelete,
  onView,
  onDownload,
}) 
{
  const isAdmin = role === "admin";
  const isFaculty = role === "faculty";
  const isStudent = role === "student";

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50 border-b">

          <tr>

            <th className="p-5 text-left">Student</th>

            <th className="p-5 text-left">Course</th>

            <th className="p-5 text-left">Certificate ID</th>

            <th className="p-5 text-left">Status</th>

            <th className="p-5 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>
        {certificates.length > 0 ? (
          certificates.map((certificate) => (

            <tr
              key={certificate._id}
              className="border-b hover:bg-blue-50 transition"
            >

              {/* Student */}

              <td className="p-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                    {certificate.studentName.charAt(0)}

                  </div>

                  <div>

                    <h3 className="font-semibold">

                      {certificate.studentName}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {certificate.institution}

                    </p>

                  </div>

                </div>

              </td>

              {/* Course */}

              <td className="p-5">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

                  {certificate.course}

                </span>

              </td>

              {/* ID */}

              <td className="p-5 font-mono">

                {certificate.certificateId}

              </td>

              {/* Status */}

              <td className="p-5">

                <span className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold">

                  Verified

                </span>

              </td>

              {/* Buttons */}

              <td className="p-5">

                <div className="flex justify-center gap-3">


  {/* View - Everyone */}
                  <button
                    onClick={() => onView(certificate)}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl"
                  >
                    <FiEye />
                  </button>



  {/* View - Everyone */}
                  <button
                    onClick={() => onDownload(certificate)}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-xl"
                  >
                    <FiDownload />
                  </button>


{isAdmin && (
                  <button
                    onClick={() => onEdit(certificate)}
                    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-3 rounded-xl"
                  >
                    <FiEdit2 />
                  </button>
)}

{isAdmin && (
                  <button
                    onClick={() => onDelete(certificate._id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-xl"
                  >
                    <FiTrash2 />
                  </button>
)}
                </div>

              </td>

            </tr>
             ))
  ) : (
    <tr>
      <td
        colSpan="5"
        className="py-16 text-center"
      >
        <div className="flex flex-col items-center">

           <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">

        <FileSearch
          size={40}
          className="text-gray-400"
        />
        </div>
          <h3 className="text-xl mt-2 font-bold text-slate-700">
            No Certificates Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try searching with another name or certificate ID.
          </p>

        </div>
      </td>
    </tr>

        
      ) }
      

        </tbody>

      </table>

    </div>
  );
}

export default CertificateTable;
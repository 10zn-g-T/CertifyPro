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
    <div className="rounded-3xl overflow-hidden
bg-slate-900/60
backdrop-blur-xl
border border-slate-700
shadow-[0_20px_60px_rgba(0,0,0,.35)]">

      <table className="w-full text-slate-200">

        <thead className="bg-slate-800/70 border-b border-slate-700">
          <tr>

            <th className="p-5 text-left text-slate-300 font-semibold tracking-wide">Student</th>

            <th className="p-5 text-left text-slate-300 font-semibold tracking-wide">Course</th>

            <th className="p-5 text-left text-slate-300 font-semibold tracking-wide">Certificate ID</th>

            <th className="p-5 text-left text-slate-300 font-semibold tracking-wide">Status</th>

            <th className="p-5 text-center text-slate-300 font-semibold tracking-wide">Actions</th>

          </tr>

        </thead>

        <tbody>
        {certificates.length > 0 ? (
          certificates.map((certificate) => (

            <tr
              key={certificate._id}
              className="border-b border-slate-800 hover:bg-slate-800/60 transition-all duration-300"
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

                    <p className="text-sm text-gray-400">

                      {certificate.institution}

                    </p>

                  </div>

                </div>

              </td>

              {/* Course */}

              <td className="p-5">

                <span className="bg-blue-500/20
text-blue-300
border border-blue-500/30 px-4 py-2 rounded-full text-sm font-semibold">

                  {certificate.course}

                </span>

              </td>

              {/* ID */}

              <td className="p-5 font-mono text-slate-300">

                {certificate.certificateId}

              </td>

              {/* Status */}

              <td className="p-5">

                <span className="bg-green-500/20
text-green-300
border border-green-500/30 px-3 py-2 rounded-full text-sm font-semibold">

                  Verified

                </span>

              </td>

              {/* Buttons */}

              <td className="p-5">

                <div className="flex justify-center gap-3">


  {/* View - Everyone */}
                  <button
                    onClick={() => onView(certificate)}
                     className="
    bg-cyan-500/20
    hover:bg-cyan-500/30
    text-cyan-300
    border
    border-cyan-500/20
    hover:border-cyan-400/40
    p-3
    rounded-xl
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
    hover:shadow-cyan-500/20
  "
                  >
                    <FiEye />
                  </button>



  {/* View - Everyone */}
                  <button
                    onClick={() => onDownload(certificate)}
                    className="bg-blue-500/20
hover:bg-blue-500/30
text-blue-300 p-3 rounded-xl"
                  >
                    <FiDownload />
                  </button>


{isAdmin && (
                  <button
                    onClick={() => onEdit(certificate)}
                    className="bg-yellow-500/20
hover:bg-yellow-500/30
text-yellow-300 p-3 rounded-xl"
                  >
                    <FiEdit2 />
                  </button>
)}

{isAdmin && (
                  <button
                    onClick={() => onDelete(certificate._id)}
                    className="bg-red-500/20
hover:bg-red-500/30
text-red-300 p-3 rounded-xl"
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

           <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">

        <FileSearch
          size={40}
          className="text-slate-500"
        />
        </div>
          <h3 className="text-xl mt-2 font-bold text-white">
            No Certificates Found
          </h3>

          <p className="text-slate-400 mt-2">
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
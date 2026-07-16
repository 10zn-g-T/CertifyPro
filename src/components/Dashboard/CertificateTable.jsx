import {
  FiEdit2,
  FiTrash2,
  FiEye,
  FiDownload,
} from "react-icons/fi";

function CertificateTable({
  certificates,
  onEdit,
  onDelete,
  onView,
  onDownload,
}) {
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

          {certificates.map((certificate) => (

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

                  <button
                    onClick={() => onView(certificate)}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl"
                  >
                    <FiEye />
                  </button>

                  <button
                    onClick={() => onDownload(certificate)}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-xl"
                  >
                    <FiDownload />
                  </button>

                  <button
                    onClick={() => onEdit(certificate)}
                    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-3 rounded-xl"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => onDelete(certificate._id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 p-3 rounded-xl"
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CertificateTable;
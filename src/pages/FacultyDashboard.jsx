import { Link } from "react-router-dom";
import {
  GraduationCap,
  FilePlus2,
  SearchCheck,
  FileText,
} from "lucide-react";

function FacultyDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

          <div className="flex items-center gap-4">

            <GraduationCap size={50} />

            <div>

              <h1 className="text-4xl font-black">
                Faculty Dashboard
              </h1>

              <p className="text-blue-100 mt-2">
                Issue and manage student certificates.
              </p>

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <Link
            to="/issue-certificate"
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <FilePlus2
              className="text-blue-600"
              size={45}
            />

            <h2 className="text-2xl font-bold mt-5">
              Issue Certificate
            </h2>

            <p className="mt-3 text-gray-500">
              Generate new certificates.
            </p>

          </Link>

          <Link
            to="/verify"
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <SearchCheck
              className="text-green-600"
              size={45}
            />

            <h2 className="text-2xl font-bold mt-5">
              Verify Certificate
            </h2>

            <p className="mt-3 text-gray-500">
              Validate certificates instantly.
            </p>

          </Link>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <FileText
              className="text-purple-600"
              size={45}
            />

            <h2 className="text-2xl font-bold mt-5">
              My Certificates
            </h2>

            <p className="mt-3 text-gray-500">
              Coming Soon...
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FacultyDashboard;
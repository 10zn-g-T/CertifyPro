import {
  Award,
  Download,
  SearchCheck,
} from "lucide-react";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-white p-8">

      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">

          <h1 className="text-4xl font-black">
            Student Dashboard
          </h1>

          <p className="mt-3 text-blue-100">
            Access and verify your certificates.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Award
              size={45}
              className="text-blue-600"
            />

            <h2 className="text-2xl font-bold mt-5">
              My Certificates
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Download
              size={45}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold mt-5">
              Download
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <SearchCheck
              size={45}
              className="text-purple-600"
            />

            <h2 className="text-2xl font-bold mt-5">
              Verify
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;
import { useState } from "react";
import API from "../api/certificateApi";

function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      setError("Please enter a Certificate ID");
      return;
    }

    try {
      const response = await API.get(`/certificates/${certificateId}`);

      setCertificate(response.data.certificate);
      setError("");

    } catch (err) {
      setCertificate(null);
      setError("Certificate Not Found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Verify Certificate
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Enter the Certificate ID to verify authenticity.
        </p>

        <div className="mt-10 flex gap-4">

          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            className="flex-1 border rounded-xl p-4"
          />

          <button
            onClick={handleVerify}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl"
          >
            Verify
          </button>

        </div>

        {error && (
          <p className="text-red-600 mt-6 text-center">
            {error}
          </p>
        )}

        {certificate && (

          <div className="mt-10 border rounded-2xl p-8 bg-green-50">

            <h2 className="text-3xl font-bold text-green-700 mb-6">
              ✅ Certificate Verified
            </h2>

            <div className="space-y-3 text-lg">

              <p><strong>Certificate ID:</strong> {certificate.certificateId}</p>

              <p><strong>Student Name:</strong> {certificate.studentName}</p>

              <p><strong>Email:</strong> {certificate.studentEmail}</p>

              <p><strong>Course:</strong> {certificate.course}</p>

              <p><strong>Institution:</strong> {certificate.institution}</p>

              <p><strong>Issue Date:</strong> {certificate.issueDate}</p>

              <p><strong>Grade:</strong> {certificate.grade}</p>

              <p><strong>Description:</strong> {certificate.description}</p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Verify;
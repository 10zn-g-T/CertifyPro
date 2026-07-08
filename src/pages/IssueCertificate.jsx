import { useState } from "react";

import CertificateForm from "../components/CertificateForm";
import CertificateLivePreview from "../components/CertificateLivePreview";

import API from "../api/certificateApi";

function IssueCertificate() {

  const [formData, setFormData] = useState({
    certificateId: `CERT-${Date.now()}`,
    studentName: "",
    studentEmail: "",
    course: "",
    institution: "",
    issueDate: "",
    grade: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  // Student Name
  if (!formData.studentName.trim()) {
    newErrors.studentName = "Student Name is required";
  }

  // Student Email
  if (!formData.studentEmail.trim()) {
    newErrors.studentEmail = "Student Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.studentEmail)) {
    newErrors.studentEmail = "Please enter a valid email";
  }

  // Course
  if (!formData.course.trim()) {
    newErrors.course = "Course Name is required";
  }

  // Institution
  if (!formData.institution.trim()) {
    newErrors.institution = "Institution is required";
  }

  // Issue Date
  if (!formData.issueDate) {
    newErrors.issueDate = "Issue Date is required";
  }

  // Grade
  if (!formData.grade) {
    newErrors.grade = "Please select a grade";
  }

  // Save errors
  setErrors(newErrors);

  // No errors
  if (Object.keys(newErrors).length > 0) {
   return;
  }
try {
    const response = await API.post("/certificates", formData);

    alert("🎉 Certificate Issued Successfully!");

    console.log(response.data);

    // Clear the form
    setFormData({
      certificateId: `CERT-${Date.now()}`,
      studentName: "",
      studentEmail: "",
      course: "",
      institution: "",
      issueDate: "",
      grade: "",
      description: "",
    });

    setErrors({});
  } catch (error) {
    console.error(error);

    alert("❌ Failed to Issue Certificate");
  }
};

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

    {/* Header */}

    <div className="border-b bg-white/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-8 py-8">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          Certificate Management
        </span>

        <h1 className="text-5xl font-black text-slate-900 mt-5">
          Issue New Certificate
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Fill in the student details below to generate a secure digital certificate.
        </p>

      </div>

    </div>

    {/* Content */}

    <div className="max-w-7xl mx-auto px-8 py-12 grid lg:grid-cols-5 gap-10">

      {/* Left */}

      <div className="lg:col-span-3">

        <CertificateForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />

      </div>

      {/* Right */}

      <div className="lg:col-span-2 sticky top-28 h-fit">

        <CertificateLivePreview
          formData={formData}
        />

      </div>

    </div>

  </div>
);
}

export default IssueCertificate;
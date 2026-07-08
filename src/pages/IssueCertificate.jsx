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

    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        <CertificateForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />

        <CertificateLivePreview
          formData={formData}
        />

      </div>

    </div>

  );
}

export default IssueCertificate;
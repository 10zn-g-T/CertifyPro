import { useState } from "react";

import CertificateForm from "../components/Issue/CertificateForm";
import CertificateLivePreview from "../components/Issue/CertificateLivePreview";

import API from "../api/CertificateApi";

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
<div
  className="
  min-h-screen
  relative
  overflow-hidden
  bg-gradient-to-br
  from-slate-950
  via-slate-900
  to-black
  text-white
"
>
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[170px] opacity-20 animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[170px] opacity-20 animate-pulse"></div>
    
    {/* Header */}

<div
className="
relative
z-10
border-b
border-slate-800
bg-slate-900/60
backdrop-blur-xl
"
>
      <div className="max-w-7xl mx-auto px-8 py-8">

        <span className="inline-block bg-blue-500/20
text-blue-300
border
border-blue-500/30 px-4 py-2 rounded-full text-sm font-semibold">
          Certificate Management
        </span>

        <h1 className="text-5xl font-black text-white mt-5">
          Issue New Certificate
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Fill in the student details below to generate a secure digital certificate.
        </p>

      </div>

    </div>

    {/* Content */}

      <div
className="
relative
z-10
max-w-7xl
mx-auto
px-8
py-14
grid
lg:grid-cols-5
gap-10
"
>

      {/* Left */}

      <div className="rounded-[30px]
bg-slate-900/70
backdrop-blur-xl
border
border-slate-700
shadow-2xl
p-8 lg:col-span-3">

        <CertificateForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
</div>
   

      {/* Right */}

      <div className="lg:col-span-2">
         <div className="sticky top-10 space-y-6">

          <CertificateLivePreview
            formData={formData}
          />
          </div>
      </div>

    </div>

  </div>
);
}

export default IssueCertificate;
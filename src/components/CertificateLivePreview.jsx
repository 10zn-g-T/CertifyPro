import QRCode from "react-qr-code";
import { useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

function CertificateLivePreview({ formData }) {
      const certificateRef = useRef();
    const downloadPDF = async () => {
  if (!certificateRef.current) return;

  try {
    const dataUrl = await toPng(certificateRef.current);

    const pdf = new jsPDF("landscape", "mm", "a4");

    const imgProps = pdf.getImageProperties(dataUrl);

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(
      dataUrl,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(`${formData.certificateId}.pdf`);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div 
    ref={certificateRef}
    className="bg-white rounded-2xl shadow-xl p-10 sticky top-24">

      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        Live Certificate Preview
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-gray-500">Certificate ID</p>
          <h3 className="font-bold text-lg">
            {formData.certificateId}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Student Name</p>
          <h3 className="font-semibold">
            {formData.studentName || "Student Name"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Student Email</p>
          <h3>
            {formData.studentEmail || "student@email.com"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Course</p>
          <h3>
            {formData.course || "Course Name"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Institution</p>
          <h3>
            {formData.institution || "Institution"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Issue Date</p>
          <h3>
            {formData.issueDate || "Not Selected"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Grade</p>
          <h3>
            {formData.grade || "Not Assigned"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Description</p>
          <p className="text-gray-700">
            {formData.description || "Certificate Description"}
          </p>
        </div>

        <div className="pt-6 border-t">

  <p className="text-gray-500 mb-4 font-medium">
    QR Code
  </p>

  <div className="flex justify-center bg-white p-4 rounded-xl">

    <QRCode
      value={formData.certificateId || "CERTIFICATE"}
      size={150}
    />

  </div>

</div>

    <button
  onClick={downloadPDF}
  className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
>
  Download Certificate PDF
</button>

      </div>

    </div>
  );
}

export default CertificateLivePreview;
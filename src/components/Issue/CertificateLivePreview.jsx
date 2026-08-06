import QRCode from "react-qr-code";
import { useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import CertificateCorner from "../CertificateCorner";
import CertificateSeal from "../CertificateSeal";


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

const formattedDate = formData.issueDate
  ? new Date(formData.issueDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  : "Not Selected";
  return (
  <>
    <div
    
      ref={certificateRef}
      className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-[10px] border-blue-600"
    >
      <CertificateCorner position="tl" />
<CertificateCorner position="tr" />
<CertificateCorner position="br" />
<CertificateCorner position="bl" />

{/* Decorative Background Pattern */}

<div className="absolute inset-0 opacity-5 pointer-events-none">

  <div className="absolute top-10 left-10 w-56 h-56 rounded-full border-[18px] border-blue-500"></div>

  <div className="absolute bottom-16 right-10 w-44 h-44 rounded-full border-[14px] border-indigo-500"></div>

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-slate-300 rotate-[-30deg]">
    CERTIFYPRO
  </div>

</div>

      
<div className="relative z-10">

      {/* Header */}

     <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 text-white text-center py-10">

<div className="absolute inset-0 opacity-10">

  <div className="absolute w-72 h-72 bg-white rounded-full -top-20 -left-20"></div>

  <div className="absolute w-72 h-72 bg-white rounded-full -bottom-20 -right-20"></div>

</div>

        <h1 className="text-4xl font-black tracking-wide">
          CERTIFYPRO
        </h1>
<div className="mt-2 flex flex-col items-center">
        <p className="uppercase tracking-[6px] mt-2 text-blue-100">
          Certificate of Achievement
        </p>
          <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto rounded-full mt-5"></div>
</div>
      </div>
  
      {/* Certificate */}

      <div className="relative p-10 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[120px] font-black text-blue-100 opacity-20 rotate-[-25deg]">

         CERTIFYPRO

        </h1>

      </div>

<div className="relative z-10">

        <p className="text-center text-gray-500">
          This certificate is proudly presented to
        </p>

        <h2 className="certificate-name text-center text-5xl text-blue-700 mt-8">

          {formData.studentName || "Student Name"}

        </h2>

        <p className="text-center mt-8 text-gray-500">
          For successfully completing
        </p>

        <h3 className="text-center text-3xl font-bold mt-4">

          {formData.course || "Course Name"}

        </h3>

        <div className="flex justify-center my-10">
    <CertificateSeal />
</div>
<p className="text-center uppercase tracking-[6px] text-gray-500 text-sm">
    Official Digital Certificate
</p>

        <div className="grid grid-cols-2 gap-8 mt-14">

          <div>

            <p className="uppercase tracking-widest text-xs text-slate-500">
              Institution
            </p>

            <h4 className="font-semibold mt-2">

              {formData.institution || "Institution"}

            </h4>

          </div>

          <div>

            <p className="uppercase tracking-widest text-xs text-slate-500">
              Grade
            </p>

            <h4 className="font-semibold mt-2">

              {formData.grade || "Not Assigned"}

            </h4>

          </div>

          <div>

            <p className="uppercase tracking-widest text-xs text-slate-500">
              Issue Date
            </p>

            <h4 className="font-semibold mt-2">

              {formattedDate}

            </h4>

          </div>

          <div>

            <p className="uppercase tracking-widest text-xs text-slate-500">
              Certificate ID
            </p>

            <h4 className="font-semibold mt-2">

              {formData.certificateId}

            </h4>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-between items-end mt-16">

          <div>

            <div className="border-t-2 border-gray-500 w-42"></div>

            <p className="mt-2 text-sm">
              Authorized Signature
            </p>

          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white border rounded-2xl p-5 shadow-lg">

            <QRCode
              value={formData.certificateId}
              size={90}
            />
            <p className="text-center text-xs text-gray-500 mt-2">
              Scan to Verify
          </p>

          </div>

        </div>

<div className="border-t mt-10 pt-6">

  <p className="text-center text-gray-500 text-sm">

    Certificate No.

  </p>

  <h3 className="text-center font-black tracking-[4px] text-blue-700 mt-2">

    {formData.certificateId}

  </h3>

</div>

        </div>

      </div>
</div>
    </div>

    {/* Download Button */}

    <button
      onClick={downloadPDF}
    className="
flex
items-center
gap-3
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-emerald-600
to-green-600
hover:scale-105
transition
font-bold
shadow-lg
"
>

      Download Certificate PDF
    </button>

  </>
);
}

export default CertificateLivePreview;
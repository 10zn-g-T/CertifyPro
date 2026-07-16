import QRCode from "react-qr-code";

const PrintableCertificate = ({ certificate }) => {
  if (!certificate) return null;

  return (
    <div
      className="w-[1123px] h-[794px] bg-white p-16 relative"
      style={{ fontFamily: "serif" }}
    >
      {/* Watermark */}

      <div className="absolute inset-0 flex justify-center items-center opacity-5">

        <h1 className="text-[140px] font-black rotate-[-30deg]">
          CERTIFYPRO
        </h1>

      </div>

      <div className="relative z-10">

        <p className="text-center tracking-[10px] uppercase text-gray-500">
          Certificate of Achievement
        </p>

        <h1 className="text-6xl font-black text-center mt-6 text-blue-700">
          CERTIFYPRO
        </h1>

        <div className="w-32 h-1 bg-blue-700 mx-auto mt-6"></div>

        <p className="text-center mt-14 text-gray-500">
          This certificate is proudly presented to
        </p>

        <h2 className="text-center text-6xl font-black mt-8 text-blue-600">
          {certificate.studentName}
        </h2>

        <p className="text-center mt-12 text-gray-600">
          For successfully completing
        </p>

        <h3 className="text-center text-4xl font-bold mt-4">
          {certificate.course}
        </h3>

        <div className="grid grid-cols-2 mt-20">

          <div>

            <p className="text-gray-500">
              Certificate ID
            </p>

            <h3 className="font-bold mt-2">
              {certificate.certificateId}
            </h3>

          </div>

          <div className="text-right">

            <p className="text-gray-500">
              Issue Date
            </p>

            <h3 className="font-bold mt-2">
              {new Date(certificate.issueDate).toLocaleDateString()}
            </h3>

          </div>

        </div>

        <div className="flex justify-between mt-24">

          <div>

            <div className="border-t w-44"></div>

            <p className="mt-2">
              Authorized Signature
            </p>

          </div>

          <QRCode
            value={`https://certifypro.vercel.app/verify/${certificate.certificateId}`}
            size={100}
          />

        </div>

      </div>

    </div>
  );
};

export default PrintableCertificate;
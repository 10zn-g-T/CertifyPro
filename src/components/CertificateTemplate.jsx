import QRCode from "react-qr-code";

  function CertificateTemplate({ certificate }) {
    if (!certificate) return null;
  return (
    <div
        id={`certificate-${certificate._id}`}
      className="relative bg-white rounded-[30px] shadow-2xl border-[12px] border-blue-600 p-12 w-full max-w-xl"
    >
            {/* Watermark */}

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">

              <h1 className="text-9xl font-black rotate-[-25deg]">

                CERTIFYPRO

              </h1>

            </div>

            <div className="relative z-10">

              <p className="text-center tracking-[8px] text-gray-500 uppercase">

                Certificate of Achievement

              </p>

              <h2 className="text-center text-4xl font-black mt-5 text-slate-900">

                CERTIFYPRO

              </h2>

              <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

              <p className="text-center mt-10 text-gray-500">

                This certificate is proudly presented to

              </p>

              <h1 className="text-center text-5xl font-black text-blue-600 mt-5">

                {certificate.studentName}

              </h1>

              <p className="text-center mt-8 text-gray-600">

                For successfully completing

              </p>

              <h3 className="text-center text-3xl font-bold mt-3">

                {certificate.course}

              </h3>

              <div className="grid grid-cols-2 gap-8 mt-14">

                <div>

                  <p className="text-sm text-gray-500">

                    Certificate ID

                  </p>

                  <h4 className="font-bold mt-2">

                    {certificate.certificateId}

                  </h4>

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    Issue Date

                  </p>

                  <h4 className="font-bold mt-2">

                    {new Date(certificate.issueDate).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
})}

                  </h4>

                </div>

              </div>

              <div className="flex justify-between items-end mt-14">

                <div>

                  <div className="border-t-2 border-gray-400 w-36"></div>

                  <p className="mt-2 text-sm">

                    Authorized Signature

                  </p>

                </div>

             {/* QR Code */}

                <div className="bg-white p-3 rounded-xl shadow border">

                  <QRCode
                      value={'https://certifypro.vercel.app/verify/${certificate.certificateId}'}
                      size={80} />

                    <p className="text-xs text-center mt-2 text-gray-500">
    Scan to Verify
  </p>
                </div>

              </div>

            </div>
</div>
           
 );
}

export default CertificateTemplate;
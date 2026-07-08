function CertificatePreview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold">
            Digital Certificate
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Professional Digital Certificates
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Every certificate comes with a unique Certificate ID,
            QR Code verification, and secure authentication.
          </p>

          <div className="mt-8 space-y-4">

            <div>✅ Secure Verification</div>

            <div>✅ QR Code Authentication</div>

            <div>✅ Download as PDF</div>

            <div>✅ Lifetime Validity</div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="bg-white shadow-2xl rounded-3xl p-10 w-[430px] border-t-8 border-blue-600">

            <h3 className="text-3xl font-bold text-center">
              CERTIFICATE
            </h3>

            <p className="text-center mt-3 text-gray-500">
              OF ACHIEVEMENT
            </p>

            <div className="mt-12 text-center">

              <p>This certificate is awarded to</p>

              <h2 className="text-4xl font-bold text-blue-600 mt-4">
                John Doe
              </h2>

              <p className="mt-6">
                For Successfully Completing
              </p>

              <h3 className="text-2xl font-semibold mt-3">
                Web Development
              </h3>

            </div>

            <div className="border-t mt-10 pt-8 flex justify-between">

              <div>

                <strong>ID</strong>

                <p>CERT-2026001</p>

              </div>

              <div className="text-6xl">
                📱
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CertificatePreview;
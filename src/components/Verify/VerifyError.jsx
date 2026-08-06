import { XCircle } from "lucide-react";

function VerifyError() {
  return (
    <div
      data-aos="zoom-in"
      className="
      mt-10
      bg-red-900/20
      border
      border-red-500/30
      backdrop-blur-xl
      rounded-3xl
      p-8
      shadow-lg
      "
    >
      <div className="flex items-start gap-5">

        <div className="bg-red-500/20 p-4 rounded-full">
          <XCircle
            size={36}
            className="text-red-400"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-red-300">
            Certificate Not Found
          </h2>

          <p className="text-slate-300 mt-3 leading-7">
            We couldn't find any certificate with the provided
            Certificate ID.
          </p>

          <div className="mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700">

            <p className="font-semibold mb-2 text-white">
              Please make sure:
            </p>

            <ul className="space-y-2 text-slate-400">

              <li>✔ Certificate ID is correct</li>

              <li>✔ No extra spaces are included</li>

              <li>✔ The certificate has already been issued</li>

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}

export default VerifyError;
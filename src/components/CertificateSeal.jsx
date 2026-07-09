import { Award } from "lucide-react";

function CertificateSeal() {
  return (
    <div className="relative w-28 h-28">

      {/* Shadow */}
      <div className="absolute inset-0 rounded-full bg-yellow-600 blur-xl opacity-30"></div>

      {/* Main Seal */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-2xl border-[6px] border-yellow-200 flex items-center justify-center">

        {/* Inner Ring */}
        <div className="absolute inset-3 rounded-full border-2 border-yellow-100"></div>

        {/* Award Icon */}
        <Award
          size={42}
          className="text-white relative z-10"
        />

      </div>

    </div>
  );
}

export default CertificateSeal;
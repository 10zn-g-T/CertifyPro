import { Search, LoaderCircle } from "lucide-react";

function VerifySearch({
  certificateId,
  setCertificateId,
  handleVerify,
  loading,
}) {
  return (
    <div
      data-aos="zoom-in"
      className="mt-14 flex flex-col md:flex-row gap-5"
    >
      <div className="relative flex-1">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleVerify()
          }
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-800/70
          text-white
          placeholder:text-slate-500
          py-5
          pl-14
          pr-5
          shadow-xl
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          "
        />

      </div>

      <button
        onClick={handleVerify}
        disabled={loading}
        className="
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-cyan-600
        hover:-translate-y-1
        hover:shadow-blue-500/30
        transition-all
        duration-300
        text-white
        px-10
        rounded-2xl
        font-semibold
        shadow-xl
        flex
        items-center
        justify-center
        gap-3
        "
      >
        {loading ? (
          <>
            <LoaderCircle
              size={20}
              className="animate-spin"
            />

            Verifying...
          </>
        ) : (
          <>
            <Search size={20} />

            Verify
          </>
        )}
      </button>

    </div>
  );
}

export default VerifySearch;
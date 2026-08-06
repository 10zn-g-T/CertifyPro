import {
  User,
  Mail,
  GraduationCap,
  Building2,
  CalendarDays,
  Star,
  FileText,
  CheckCircle2,
} from "lucide-react";

function VerifyResult({ certificate }) {
    return (
          

                    <div 
                    data-aos="fade-up"
className="mt-12 rounded-[32px]
bg-slate-900/70
backdrop-blur-xl
border
border-green-500/30
shadow-2xl
overflow-hidden
"
>

                        {/* Header */}

    <div className="bg-gradient-to-r from-emerald-500/20
to-blue-500/20
border-b
border-slate-700 p-8">

        <div className="flex items-center gap-3">

            <CheckCircle2 size={34} />

            <div>

                <h2 className="text-3xl font-bold">
                    Certificate Verified
                </h2>

                <p className="opacity-90 mt-1">
                    This certificate is authentic and issued by CertifyPro.
                </p>

            </div>

        </div>

    </div>

    {/* Details */}

    <div className="p-8 grid md:grid-cols-2 gap-6">

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300
">
            <User className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Student Name</p>
            <h3 className="font-bold text-xl">
                {certificate.studentName}
            </h3>
        </div>

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300">
            <Mail className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Email</p>
            <h3 className="font-semibold">
                {certificate.studentEmail}
            </h3>
        </div>

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300">
            <GraduationCap className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Course</p>
            <h3 className="font-semibold">
                {certificate.course}
            </h3>
        </div>

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300">
            <Building2 className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Institution</p>
            <h3 className="font-semibold">
                {certificate.institution}
            </h3>
        </div>

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300">
            <CalendarDays className="text-blue-600 mb-3" />
            <p className="text-sm text-gray-500">Issue Date</p>
            <h3 className="font-semibold">
                {certificate.issueDate}
            </h3>
        </div>

        <div className="bg-slate-800/60
border
border-slate-700
rounded-2xl
p-5
hover:border-blue-500/50
hover:bg-slate-800
transition-all
duration-300">
            <Star className="text-yellow-400 mb-3" />
            <p className="text-sm text-gray-500">Grade</p>
            <h3 className="font-bold text-lg">
                {certificate.grade}
            </h3>
        </div>

    </div>

    {/* Description */}

    <div className="px-8 pb-8">

        <div
className="
bg-slate-800/60
border
border-slate-700
rounded-2xl
p-6
"
>

            <FileText className="text-blue-400 mb-3" />

            <p className="text-sm text-slate-400 mb-2">
                Description
            </p>

            <p className="text-slate-200 leading-7">
                {certificate.description}
            </p>

        </div>

    </div>

    {/* Footer */}

    <div className="
border-t
border-slate-700
bg-slate-900/40
px-8
py-6
flex
flex-wrap
gap-4
">

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            ✓ QR Verified
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            ✓ Secure Database
        </span>

        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
            ✓ Digital Signature
        </span>

        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
            ✓ Lifetime Valid
        </span>

    </div>

                    </div>


    );
}

export default VerifyResult;
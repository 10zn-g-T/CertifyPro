import { History } from "lucide-react";


function RecentActivity({ certificates }) {

  return (

   <div className="
group
bg-slate-900/70
backdrop-blur-xl
border
border-slate-700
rounded-3xl
shadow-2xl
p-8
hover:border-blue-500
transition-all
duration-300
">

      <div className="flex items-center gap-3 mb-2">

  <History className="text-blue-400" />

  <h2 className="text-2xl font-bold text-white">
    Recent Certificates
  </h2>

</div>

<p className="text-slate-400 mb-6">
  Latest certificates issued
</p>

      <div className="space-y-4">

        {certificates.slice(0,4).map((certificate)=>(

          <div
            key={certificate._id}
            className="
flex
justify-between
items-center
p-4
rounded-2xl
bg-slate-800/40
border
border-slate-700
hover:border-blue-500
hover:bg-slate-800
transition-all
duration-300
"
          >

           <div className="flex items-center gap-4">

  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
    {certificate.studentName.charAt(0).toUpperCase()}
  </div>

  <div>

    <h3 className="font-semibold text-white">
      {certificate.studentName}
    </h3>

    <p className="text-slate-400 text-sm">
      {certificate.course}
    </p>

  </div>

</div>

            <span className="bg-blue-600/20
text-blue-300
px-4
py-2
rounded-full
text-xs
font-semibold
">

              {certificate.certificateId}

            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default RecentActivity;
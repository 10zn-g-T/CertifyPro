import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function InstitutionChart({ certificates }) {

  const data = Object.values(

    certificates.reduce((acc, certificate) => {

      acc[certificate.institution] ??= {

        institution: certificate.institution,

        certificates: 0,

      };

      acc[certificate.institution].certificates++;

      return acc;

    }, {})

  );

  return (

    <div className="
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

      <h2 className="text-2xl font-bold mb-6">

        Institution Statistics

      </h2>
<div className="mt-6">

  {data.length > 0 ? (
      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <XAxis dataKey="institution" />

          <YAxis />
<Tooltip
  cursor={false}
  contentStyle={{
    background: "#020617",
    border: "2px solid #3B82F6",
    borderRadius: "18px",
    color: "#fff",
    boxShadow: "0 12px 35px rgba(59,130,246,.25)",
  }}
/>

<Bar
  dataKey="certificates"
  fill="#3B82F6"
  radius={[12, 12, 0, 0]}
/>
        </BarChart>

      </ResponsiveContainer>
      ) : (

  <div className="h-[350px] flex flex-col justify-center items-center">

    <p className="text-6xl">📊</p>

    <p className="text-slate-400 mt-4">
  No Institution Data Available
</p>

  </div>

)}
</div>
    </div>

  );
}

export default InstitutionChart;
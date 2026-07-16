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

    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Institution Statistics

      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <XAxis dataKey="institution" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="certificates"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default InstitutionChart;
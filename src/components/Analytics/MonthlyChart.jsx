import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TrendingUp } from "lucide-react";


function MonthlyChart({ certificates }) {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const data = months.map((month, index) => ({
    month,
    certificates: certificates.filter((certificate) => {
      if (!certificate.issueDate) return false;

      const date = new Date(certificate.issueDate);
      return date.getMonth() === index;
    }).length,
  }));

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

     <div className="flex items-center gap-3">

    <TrendingUp className="text-blue-400" />

    <h2 className="text-2xl font-bold text-white">
        Monthly Certificate Trend
    </h2>

</div>

<p className="text-slate-400 mt-2 mb-6">
    Certificate issuance throughout the year
</p>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid
    stroke="#334155"
    strokeDasharray="4 4"
/>
<XAxis
    dataKey="month"
    tick={{ fill: "#CBD5E1" }}
    axisLine={false}
    tickLine={false}
/>

          <YAxis
    tick={{ fill: "#CBD5E1" }}
    axisLine={false}
    tickLine={false}
/>

          <Tooltip
    cursor={{
        stroke: "#3B82F6",
        strokeWidth: 2,
    }}
    contentStyle={{
        background: "#020617",
        border: "1px solid #334155",
        borderRadius: "16px",
        color: "#fff",
        boxShadow: "0 15px 35px rgba(59,130,246,.25)",
    }}
    labelStyle={{
        color: "#fff",
    }}
/>

        <Line
    type="monotone"
    dataKey="certificates"
    stroke="#3B82F6"
    strokeWidth={4}
    dot={{
        r: 5,
        fill: "#3B82F6",
        stroke: "#fff",
        strokeWidth: 2,
    }}
    activeDot={{
        r: 8,
        fill: "#60A5FA",
    }}
    animationDuration={1200}
/>
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default MonthlyChart;
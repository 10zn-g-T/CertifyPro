import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

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
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Monthly Certificate Trend
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="certificates"
            stroke="#2563eb"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default MonthlyChart;
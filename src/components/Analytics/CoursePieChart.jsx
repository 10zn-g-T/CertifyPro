import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f97316",
  "#9333ea",
  "#ef4444",
];

function CoursePieChart({ certificates }) {

  const courseData = Object.values(
    certificates.reduce((acc, certificate) => {

      acc[certificate.course] ??= {
        name: certificate.course,
        value: 0,
      };

      acc[certificate.course].value++;

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

      <h2 className="text-2xl font-bold text-white mb-6">

        Course Distribution

      </h2>

      <ResponsiveContainer width="100%" height={350}>

       <PieChart>

  <Pie
    data={courseData}
    dataKey="value"
    nameKey="name"
    innerRadius={60}
    outerRadius={130}
    isAnimationActive
    animationDuration={1000}
    label={{
      fill: "#fff",
      fontSize: 13,
      fontWeight: 600,
    }}
  >
    {courseData.map((entry, index) => (
      <Cell
        key={index}
        fill={COLORS[index % COLORS.length]}
      />
    ))}
  </Pie>

  <Tooltip
    contentStyle={{
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "16px",
      color: "#fff",
    }}
    labelStyle={{
      color: "#fff",
    }}
  />

</PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default CoursePieChart;
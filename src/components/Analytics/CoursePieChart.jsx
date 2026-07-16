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

    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Course Distribution

      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={courseData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >

            {courseData.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );
}

export default CoursePieChart;
function DashboardCard({
  title,
  value,
  color,
  icon,
  subtitle,
  change,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Top */}

      <div className="flex justify-between items-center">

        <div className={`text-4xl ${color}`}>
          {icon}
        </div>

        <span className="text-green-600 text-sm font-semibold">
          {change}
        </span>

      </div>

      {/* Value */}

      <h1 className={`text-4xl font-bold mt-6 ${color}`}>
        {value}
      </h1>

      {/* Title */}

      <h2 className="text-xl font-semibold mt-2">
        {title}
      </h2>

      {/* Subtitle */}

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}

export default DashboardCard;
function ActivityCard({ icon, title, time }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition">

      <div className="flex items-center gap-4">

        <div className="text-2xl">
          {icon}
        </div>

        <div>

          <h3 className="font-semibold text-gray-800">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            {time}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ActivityCard;

function RecentActivity({ certificates }) {

  return (

    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Recent Certificates

      </h2>

      <div className="space-y-4">

        {certificates.slice(0,5).map((certificate)=>(

          <div
            key={certificate._id}
            className="flex justify-between border-b pb-3"
          >

            <div>

              <h3 className="font-semibold">

                {certificate.studentName}

              </h3>

              <p className="text-gray-500">

                {certificate.course}

              </p>

            </div>

            <span className="text-sm text-blue-600">

              {certificate.certificateId}

            </span>

          </div>

        ))}

      </div>

    </div>

  );
}

export default RecentActivity;
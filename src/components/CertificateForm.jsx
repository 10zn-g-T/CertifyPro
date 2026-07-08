function CertificateForm({
  formData,
  handleChange,
  handleSubmit,
  errors,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">

      <h1 className="text-4xl font-bold text-blue-600">
        Issue Certificate
      </h1>

      <p className="text-gray-500 mt-2 mb-10">
        Fill in the student's information below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Student Information */}

        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Student Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-2 font-medium">
                Student Name
              </label>

              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter Student Name"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              />
            {errors.studentName && (
                 <p className="text-red-500 text-sm mt-2">
                     {errors.studentName}
                </p>
            )}

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Student Email
              </label>

              <input
                type="email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
                placeholder="Enter Student Email"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              />

            {errors.studentEmail && (
  <p className="text-red-500 text-sm mt-2">
    {errors.studentEmail}
  </p>
)}

            </div>

          </div>

        </div>

     {/* Course Information */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Course Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Course Name
              </label>

              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Enter Course Name"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              />

              {errors.course && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.course}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Institution
              </label>

              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Enter Institution"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              />

              {errors.institution && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.institution}
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Certificate Details */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Certificate Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Issue Date
              </label>

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              />

              {errors.issueDate && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.issueDate}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Grade
              </label>

              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Grade</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C</option>
                <option>Pass</option>
              </select>

              {errors.grade && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.grade}
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Description */}
        <div>

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Certificate Description..."
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500"
          ></textarea>

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 rounded-xl transition"
        >
          Issue Certificate
        </button>

      </form>

    </div>
  );
}

export default CertificateForm;
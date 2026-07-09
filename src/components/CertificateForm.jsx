import {
  User,
  Mail,
  GraduationCap,
  Building2,
  Calendar,
  Award,
  FileText,
  Send,
} from "lucide-react";

function CertificateForm({
  formData,
  handleChange,
  handleSubmit,
  errors,
}) {
        return (
            <div 
             data-aos="fade-right"
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10">

                <div className="flex items-center gap-4 mb-10">

  <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">

    <GraduationCap className="text-blue-600" size={30} />

  </div>

  <div>

    <h1 className="text-4xl font-black text-slate-900">
      Issue Certificate
    </h1>

    <p className="text-gray-500 mt-1">
      Create secure digital certificates in seconds.
    </p>

  </div>

</div>

                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Student Information */}

                    <div>
                        <h2 className="text-xl font-bold text-slate-800 border-b pb-3 mb-8">
                            Student Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>

                              <label className="block mb-2 font-medium">
                                  Student Name
                              </label>

                          <div className="relative">

                            <User
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                           />

                              <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                placeholder="Enter Student Name"
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14  px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                              />
                              </div>

                              {errors.studentName && (
                                  <p className="text-red-500 text-sm mt-2">
                                    {errors.studentName}
                                  </p>
                                )
                              }

                            </div>

                            <div>

                              <label className="block mb-2 font-medium">
                                Student Email
                              </label>
 
 <div className="relative">

    <Mail
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />


                              <input
                                type="email"
                                name="studentEmail"
                                value={formData.studentEmail}
                                onChange={handleChange}
                                placeholder="Enter Student Email"
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14 px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                              />
</div>
                              {errors.studentEmail && (
                                  <p className="text-red-500 text-sm mt-2">
                                    {errors.studentEmail}
                                  </p>
                                )
                              }

                            </div>

                        </div>

                      </div>

                      {/* Course Information */}
                      <div>
                        
                        <h2 className="text-xl font-bold text-slate-800 border-b pb-3 mb-8">
                            Course Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                          <div>
                            
                            <label className="block mb-2 font-medium">
                              Course Name
                            </label>
                      <div className="relative">    
                      <GraduationCap
  size={20}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>    
                        
                            <input
                              type="text"
                              name="course"
                              value={formData.course}
                              onChange={handleChange}
                              placeholder="Enter Course Name"
                              className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14 px-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            />
   </div>
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
<div className="relative">
<Building2
  size={20}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>

                            <input
                              type="text"
                              name="institution"
                              value={formData.institution}
                              onChange={handleChange}
                              placeholder="Enter Institution"
                              className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14 px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            />
</div>

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

          <h2 className="text-xl font-bold text-slate-800 border-b pb-3 mb-8">
            Certificate Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Issue Date
              </label>
<div className="relative">
  <Calendar
  size={20}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>



              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14 px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
</div>
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

<div className="relative">
  <Award
  size={20}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
/>

              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-12 pr-4 py-3 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Grade</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C</option>
                <option>Pass</option>
              </select>
</div>
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
<div className="relative">

  <FileText
    size={20}
    className="absolute left-4 top-4 text-gray-400"
  />
          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Certificate Description..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-14 px-4 py-3 outline-none transition duration-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
          ></textarea>
</div>
        </div>

        {/* Submit Button */}
        <button
  type="submit"
  className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-300 hover:scale-[1.02]"
>
  <Send
    size={20}
    className="group-hover:translate-x-1 transition"
  />

  Issue Certificate
</button>

        </form>

        </div>
  );
}

export default CertificateForm;
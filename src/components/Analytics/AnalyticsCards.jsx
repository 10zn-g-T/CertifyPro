import {
  Award,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";

function AnalyticsCards({ certificates }) {

  const totalCertificates = certificates.length;

  const totalCourses = new Set(
    certificates.map(c => c.course)
  ).size;

  const totalInstitutions = new Set(
    certificates.map(c => c.institution)
  ).size;

  return (

    <div className="grid md:grid-cols-4 gap-6">

      <Card
        title="Certificates"
        value={totalCertificates}
        icon={<Award size={30}/>}
        color="bg-blue-600"
      />

      <Card
        title="Courses"
        value={totalCourses}
        icon={<GraduationCap size={30}/>}
        color="bg-green-600"
      />

      <Card
        title="Institutions"
        value={totalInstitutions}
        icon={<Building2 size={30}/>}
        color="bg-orange-500"
      />

      <Card
        title="Students"
        value={totalCertificates}
        icon={<Users size={30}/>}
        color="bg-purple-600"
      />

    </div>
  );
}

function Card({ title, value, icon, color }) {

  return (

    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6 flex justify-between items-center">

      <div>

        <p className="text-gray-500">{title}</p>

        <h2 className="text-4xl font-black mt-2">
          {value}
        </h2>

      </div>

      <div className={`${color} text-white p-5 rounded-2xl`}>
        {icon}
      </div>

    </div>

  );
}

export default AnalyticsCards;
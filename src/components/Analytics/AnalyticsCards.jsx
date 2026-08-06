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
    <div
      className="
      group
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-slate-700
      rounded-3xl
      p-7
      shadow-2xl
      hover:border-blue-500
      hover:-translate-y-2
      hover:shadow-blue-500/20
      transition-all
      duration-300
      flex
      justify-between
      items-center
      "
    >
      <div>
        <p className="text-slate-400 text-sm tracking-wide uppercase">
          {title}
        </p>

        <h2 className="text-5xl font-black mt-3 text-white">
          {value}
        </h2>
      </div>

      <div
        className={`${color}
        p-5
        rounded-2xl
        shadow-lg
        group-hover:scale-110
        transition-transform
        duration-300
        text-white`}
      >
        {icon}
      </div>
    </div>
  );
}


export default AnalyticsCards;
import {
  FaCertificate,
  FaCheckCircle,
  FaClock,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ActivityCard from "../components/ActivityCard";


function Dashboard() {

  const stats = [
  {
    title: "Certificates",
    value: 120,
    subtitle: "Total Certificates Issued",
    color: "text-blue-600",
    icon: <FaCertificate />,
    change: "+12%",
  },
  {
    title: "Verified",
    value: 98,
    subtitle: "Successfully Verified",
    color: "text-green-600",
    icon: <FaCheckCircle />,
    change: "+8%",
  },
  {
    title: "Pending",
    value: 22,
    subtitle: "Waiting for Approval",
    color: "text-yellow-500",
    icon: <FaClock />,
    change: "-3%",
  },
  {
    title: "Institutions",
    value: 15,
    subtitle: "Registered Organizations",
    color: "text-purple-600",
    icon: <FaUniversity />,
    change: "+2%",
  },
];

   const activities = [
  {
    icon: <FaCertificate className="text-blue-600" />,
    title: "Certificate issued to John Doe",
    time: "2 minutes ago",
  },
  {
    icon: <FaCheckCircle className="text-green-600" />,
    title: "Certificate verified successfully",
    time: "10 minutes ago",
  },
  {
    icon: <FaUniversity className="text-purple-600" />,
    title: "New Institution Registered",
    time: "1 hour ago",
  },
  {
    icon: <FaUser className="text-orange-500" />,
    title: "New User Joined",
    time: "3 hours ago",
  },
];


  return (
    <div className="flex min-h-screen bg-gray-100">

  {/* Sidebar */}
  <Sidebar />

  {/* Main Content */}
  <main className="flex-1 p-8 ">

    <Topbar />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {stats.map((card, index) => (

        <DashboardCard
          key={index}
          title={card.title}
          value={card.value}
          color={card.color}
          icon={card.icon}
          subtitle={card.subtitle}
          change={card.change}
        />

      ))}

    </div>

      <div className="bg-white rounded-2xl shadow-lg mt-10">

  <div className="p-6 border-b">

    <h2 className="text-2xl font-bold">
      Recent Activity
    </h2>

  </div>

  {activities.map((activity, index) => (

    <ActivityCard
      key={index}
      icon={activity.icon}
      title={activity.title}
      time={activity.time}
    />

  ))}

</div>

  </main>

</div>
  );
}

export default Dashboard;
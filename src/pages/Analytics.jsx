import { useEffect, useState } from "react";
import API from "../api/CertificateApi";

import AnalyticsCards from "../components/Analytics/AnalyticsCards";
import MonthlyChart from "../components/Analytics/MonthlyChart";
import CoursePieChart from "../components/Analytics/CoursePieChart";
import InstitutionChart from "../components/Analytics/InstitutionChart";
import RecentActivity from "../components/Analytics/RecentActivity";

function Analytics() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await API.get("/certificates");
      setCertificates(response.data.certificates);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <AnalyticsCards certificates={certificates} />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <MonthlyChart certificates={certificates} />

         <CoursePieChart certificates={certificates}/>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

    <InstitutionChart certificates={certificates}/>

    <RecentActivity certificates={certificates}/>

</div>


    </div>
  );
}

export default Analytics;
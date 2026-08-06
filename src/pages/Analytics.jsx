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
  <div
    className="
      min-h-screen
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-black
      text-white
      px-10
      pt-30
      pb-10
    "
  >
    {/* Floating Background */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />

    <div className="relative z-10">

      {/* Header */}
      <div className="mb-12">

        <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
          Analytics
        </p>

        <h1 className="text-5xl font-black mt-2">
          Dashboard Overview
        </h1>

        <p className="text-slate-400 mt-3">
          Track certificate issuance, verification, institutions and growth.
        </p>

      </div>

      {/* Stats */}
      <AnalyticsCards certificates={certificates} />

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-8 mt-10">

        <MonthlyChart certificates={certificates} />

        <CoursePieChart certificates={certificates} />

      </div>

      {/* Bottom Section */}
      <div className="grid xl:grid-cols-2 gap-8 mt-10">

        <InstitutionChart certificates={certificates} />

        <RecentActivity certificates={certificates} />

      </div>

    </div>

  </div>
);
}

export default Analytics;
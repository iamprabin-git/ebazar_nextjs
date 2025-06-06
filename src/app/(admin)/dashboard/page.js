import DashboardCard from "@/components/dashboard/Card";
import React from "react";

function DashPage() {
  return (
    <div>
      <div className="flex justify-between items-center pb-5 px-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <DashboardCard
        label="confirmeb orders"
        value={4}
        className="bg-green-100"
        icon="https://img.icons8.com/ios/50/000000/checked--v1.png"
      />
    </div>
  );
}

export default DashPage;

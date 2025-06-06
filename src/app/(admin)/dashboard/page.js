import DashboardCard from "@/components/dashboard/Card";
import OrdersDashbord from "@/components/dashboard/Orders";
import React from "react";

function DashPage() {
  return (
    <div>
      <div className="flex justify-between items-center pb-5 px-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <OrdersDashbord className="flex mt-5"/>
    </div>
  );
}

export default DashPage;

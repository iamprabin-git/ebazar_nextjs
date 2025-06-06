import Link from "next/link";
import React from "react";

function DashboardCard({ label, value, icon, className }) {
  return (
    <div
      className={`max-w-sm p-2 border border-gray-200 rounded-xl shadow-sm dark:border-gray-700 ${className}`}
    >
      {icon}

      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {label}
      </h5>

      <p className="font-bold text-gray-800 dark:text-gray-400">{value}</p>
    </div>
  );
}

export default DashboardCard;

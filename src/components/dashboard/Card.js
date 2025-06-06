import Link from 'next/link';
import React from 'react'

function DashboardCard({label, value, icon, className}) {
  return (
<div className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${className}`}>
  {icon}

    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{label}</h5>

  <p className="mb-3 font-bold text-gray-800 dark:text-gray-400">{value}</p>
  
</div>

  )
}

export default DashboardCard;

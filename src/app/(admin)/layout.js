'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/Sidebar';
import { ROLE_ADMIN, ROLE_AGENT } from '@/constants/roles';
import { all } from 'axios';
import { allowedAdminRoles } from '@/helpers/auth';
import { HOME_ROUTE } from '@/constants/routes';

function AdminLayout({ children }) {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  // Function to check if the user has the allowed role
  function allowedRoles(roles){
    return roles.some((role) => [ROLE_ADMIN, ROLE_AGENT].includes(role));
  } 

  useEffect(() => {
  if (!user) {
    router.push(HOME_ROUTE);
    return;
  }

  const isAllowed = allowedAdminRoles(user.roles);
  if (!isAllowed) {
    router.push(HOME_ROUTE);
  }
}, [user, router]);


  return (
    <div className="relative min-h-screen">
      <AdminSidebar />
      <div className="pl-64 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;

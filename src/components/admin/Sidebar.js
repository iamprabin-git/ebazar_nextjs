'use client';

import { HOME_ROUTE, DASHBOARD_ROUTE, PRODUCT_MANAGEMENT_ROUTE, USER_MANAGEMENT_ROUTE} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillPieChart } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";

const sidebarMenu = [
  {
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
    icon: <AiFillPieChart className="w-5 h-5 text-gray-500" />,
  },

  {
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
    icon: <GrProductHunt className="w-5 h-5 text-gray-500" />,

  },
    {
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
    icon: <FaHouseUser className="w-5 h-5 text-gray-500" />,
  },
];

function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="absolute top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden sm:block">
      <div className="h-full px-3 pb-6 pt-5 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {sidebarMenu.map((navLink, i) => {
            const isActive =
              pathname === navLink.route ||
          pathname.startsWith(navLink.route);

            return (
              <li key={i}>
                <Link
                  href={navLink.route}
                  className={`flex items-center p-2 rounded-lg group transition-all ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{navLink.icon}</span>
                  <span>{navLink.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default AdminSidebar;

"use client";
import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navlink({ navLink }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const pathname = usePathname();
  const isActive =
    pathname == navLink.route ||
    (navLink.route !== HOME_ROUTE && pathname.startsWith(navLink.route));

  return (
    <li
      onMouseEnter={() => {
        if (navLink.submenu?.length > 0) setShowDropdown(true);
      }}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <Link
        href={navLink.route}
        className={`${
          isActive
            ? "text-red-600"
            : "block relative py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        } `}
      >
        {navLink.label}
      </Link>

      <div>
        {/* Dropdown menu */}

        {navLink.submenu?.length > 0 ? (
          <div
            className={`${
              showDropdown ? "block" : "hidden"
            } absolute top-15 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              {navLink.submenu.map((menu, menuindex) => (
                <li key={menuindex}>
                  <Link
                    href={`${navLink.route}/${menu.route}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default Navlink;

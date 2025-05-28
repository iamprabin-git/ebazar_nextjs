"use client";

import Image from "next/image";
import logo from "../assets/images/Logoz.png";
import Link from "next/link";
import navLinks from "@/constants/navLinks";
import Navlink from "./Navlink";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/auth/authSlice";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "@/redux/userPreference/userPreferenceSlice";
import AuthUser from "./AuthUser";
import { DARK_THEME } from "@/constants/theme";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/constants/routes";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.userPreference);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === DARK_THEME) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-xl shadow-lg flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            href={HOME_ROUTE}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              height={150}
              width={150}
              className="h-15 w-auto"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lele Store
            </span>
          </Link>

          {/* Auth + Theme + Toggle */}
          <div className="flex gap-4 items-center md:order-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 text-xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Toggle Theme"
            >
              {theme === DARK_THEME ? <FaSun /> : <FaMoon />}
            </button>

            {!user ? (
              <>
                <Link
                  href={LOGIN_ROUTE}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href={REGISTER_ROUTE}
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <AuthUser user={user} />
            )}

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6 font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-slate-900 dark:border-gray-700 dark:text-white">
              {navLinks.map(
                (navLink, i) =>
                  (user || !navLink.isAuth) && (
                    <Navlink navLink={navLink} key={i} />
                  )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

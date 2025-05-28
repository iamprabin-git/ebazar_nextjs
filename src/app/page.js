import Image from "next/image";
import logo from "../assets/images/logo-3.png";
import Link from "next/link";
import { HOME_ROUTE } from "@/constants/routes";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <h1 className="text-3xl font-bold underline pt-6 text-center">Recently Listed Properties</h1>
        <div className="flex flex-col-4 gap-3 items-center justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Sale</span>
            <Link href={HOME_ROUTE}>
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
            <div className="p-5">
              <Link href={HOME_ROUTE}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href={HOME_ROUTE}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Sale</span>
            <Link href={HOME_ROUTE}>
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
            <div className="p-5">
              <Link href={HOME_ROUTE}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href={HOME_ROUTE}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Sale</span>
            <Link href={HOME_ROUTE}>
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
           
            <div className="p-5">
              <Link href={HOME_ROUTE}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href={HOME_ROUTE}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span className="relative bg-red-600 text-white font-semibold px-2 py-1">Rent</span>
            <Link href={HOME_ROUTE}>
              <Image className="rounded-t-lg" src={logo} alt="property" />
            </Link>
            <div className="p-5">
              <Link href={HOME_ROUTE}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Land on sale At Lele
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs. 1,00,000 per Anna
              </p>
              <Link
                href={HOME_ROUTE}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                view Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

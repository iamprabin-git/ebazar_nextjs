"use client";

import { CONTACT_ROUTE, PRODUCTS_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

function Call() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-600 to-purple-600 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <FiShoppingBag className="w-12 h-12 mx-auto text-white mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of happy customers and discover the best deals today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={PRODUCTS_ROUTE}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              Shop Now <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href={CONTACT_ROUTE}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Call;

"use client";

import React from "react";
import BestSeller1 from "@/assets/images/iphone16.webp";
import BestSeller2 from "@/assets/images/watch.jpg";
import BestSeller3 from "@/assets/images/HdCamera.jpg";
import BestSeller4 from "@/assets/images/bluetoothSpeaker.jpg";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const BestSellers = () => {
  // Sample data - replace with your actual data fetching
  const bestSellers = [
    {
      id: 1,
      name: "iphone 16",
      price: 199000,
      originalPrice: 249990,
      rating: 4.8,
      reviewCount: 124,
      image: BestSeller1,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 1599,
      originalPrice: 1799,
      rating: 4.6,
      reviewCount: 89,
      image: BestSeller2,
      isNew: true,
      isBestSeller: true,
    },
    {
      id: 3,
      name: "Bluetooth Portable Speaker",
      price: 999,
      originalPrice: 1599,
      rating: 4.4,
      reviewCount: 56,
      image: BestSeller4,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 4,
      name: "Ultra HD 4K Camera",
      price: 499999,
      originalPrice: 599999,
      rating: 4.9,
      reviewCount: 203,
      image: BestSeller3,
      isNew: false,
      isBestSeller: true,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Best Selling Products
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Most loved by our customers
            </p>
          </div>
          <Link
            href={PRODUCTS_ROUTE}
            className="flex items-center text-primary-600 hover:text-blue-600 dark:text-primary-400  dark:hover:text-primary-300 font-medium"
          >
            View all <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id} 
              product={product}
              className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
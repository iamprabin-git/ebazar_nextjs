"use client";

import React from "react";
import PopularProducts from "@/components/home/PopularProducts";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Popular Products Section */}
      <PopularProducts />
    </div>
  );
};

export default HomePage;

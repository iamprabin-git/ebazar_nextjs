"use client";

import React from "react";
import PopularProducts from "@/components/home/PopularProducts";
import Partners from "@/components/home/Partners";
import HomepageSlider from "@/components/home/Slider";
import FeatureSection from "@/components/home/Feature";
import Call from "@/components/home/Call";
import BestSellers from "@/components/home/BestSeller";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HomepageSlider />
      <FeatureSection />
      
      {/* Popular Products Section */}
      <PopularProducts />
      <BestSellers />
      <Partners />
      <Call />
    </div>
  );
};

export default HomePage;

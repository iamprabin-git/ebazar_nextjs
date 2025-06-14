"use client";

import React from "react";
import PopularProducts from "@/components/home/PopularProducts";
import Partners from "@/components/home/Partners";
import HomepageSlider from "@/components/home/Slider";
import FeatureSection from "@/components/home/Feature";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HomepageSlider />
      <FeatureSection />
      
      {/* Popular Products Section */}
      <PopularProducts />
      <Partners />
    </div>
  );
};

export default HomePage;

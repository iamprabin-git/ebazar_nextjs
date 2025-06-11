"use client";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

function SearchProduct() {
  const [productName, setProductName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  function searchProduct() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", productName);
    router.push(`?${params.toString()}`);
  }

  function clearSearch() {
    setProductName("");
    router.push(PRODUCTS_ROUTE);
  }
  

  return (
    <div className="w-full mx-auto">
      <div className="relative">
        <input
          type="search"
          id="search-product"
          className="block px-1 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Products..."
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          onClick={searchProduct}
          className="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-xl p-1 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <CiSearch />
        </button>
        {productName && (
          <button
          onClick={clearSearch}
           className="absolute end-10 bottom-1 mt-2 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg text-sm px-2.5 py-1 dark:bg-gray-800 dark:hover:bg-gray-700">
            <MdClear className="w-5 h-5 cursor-pointer"/>
            </button>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;

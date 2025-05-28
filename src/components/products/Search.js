"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchProduct() {
 const [productName, setProductName] = useState('');

 const Router = useRouter();
 const searchParams=useSearchParams();
 
 function searchProduct(){
  const params= new URLSearchParams(searchParams.toString());
 params.set("name", productName);
  Router.push(`?${params.toString()}`);
 }
 useEffect(() => {
     if (productName === "") {
       searchProduct();
     }
    }, [productName]);
 
 
  return (
    <div className="max-w-md mx-auto">
      
      <div className="relative">
       <input
          type="search"
          id="search-property"
          className="block px-1 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Search Products..."
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
        onClick={searchProduct}
          className="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl p-1 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <CiSearch/>   
        </button>
      </div>
    </div>
  );
}

export default SearchProduct;

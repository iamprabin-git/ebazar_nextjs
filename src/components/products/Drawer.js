"use client";

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

function ProductDrawer({
  showFilters = true,
  setShowFilters,
  brands,
  categories,
}) {
  const [sort, setSort] = useState(
    JSON.stringify({
      createdAt: -1,
    })
  );
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minPrice, setMinPrice] = useState(0);
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  const router = useRouter();
  const searchParams=useSearchParams();

  function handleBrandsFilterChange(brand) {
    setBrandsFilter((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  }

  function setFilters() {
    const params = new URLSearchParams();
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("sort", sort);
    params.set("brands", brandsFilter.join(","));
    params.set("category", categoryFilter);
    router.push(`?${params.toString()}`);
    setShowFilters(false);
  }
   function resetFilters() {
    router.push(PRODUCTS_ROUTE);
    setShowFilters(false);
  }

  useEffect(() => {
    console.log(brandsFilter);
  }, [brandsFilter]);
  return (
    <div
      className={`h-svh w-full bg-[#0000002d] fixed top-0 left-0 z-10 ${
        showFilters ? "block" : "hidden "
      }`}
    >
      <div
        className={`fixed top-20 left-0 z-50 w-72 h-screen pt-8 px-5 pb-20 overflow-y-auto transition-transform translate-x-0 bg-white dark:bg-gray-800 ${
          showFilters ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <h4 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Filter Products
        </h4>
        <button
          onClick={() => setShowFilters(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoIosClose className="w-7 h-7" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="my-4">
          <div>
            <label
              htmlFor="orderBy"
              className="mb-2 text-sm font-medium text-gray-900 uppercase dark:text-white justify-center"
            >
              order By
            </label>
            <select
              id="orderBy"
              onChange={(e) => setSort(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
              <option value={JSON.stringify({ createdAt: +1 })}>Oldest</option>
              <option value={JSON.stringify({ price: -1 })}>
                Price: High to Low
              </option>
              <option value={JSON.stringify({ price: +1 })}>
                Peice: Low to High
              </option>
            </select>
          </div>
        </div>
        <div className="py-4 overflow-y-auto">
          <div className="py-2">
            <h5 className="mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center">
              Price Range
            </h5>
            <label
              htmlFor="min"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Minimum Price:
            </label>
            <input
              type="number"
              id="min"
              name="min"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={0}
              min="{0}"
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <label
              htmlFor="max"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Maximum Price:
            </label>
            <input
              type="number"
              id="max"
              name="max"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={10000000000}
              min={0}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          <div>
            <label
              htmlFor="orderBy"
              className="text-sm font-medium text-gray-900 uppercase dark:text-white justify-center"
            >
              Category
            </label>
            <select
              id="category"
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select Category</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h5 className="mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center">
            Brands Filter
          </h5>
          {brands?.map((brand, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                id={brand}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={brandsFilter.includes(brand)}
                onChange={() => handleBrandsFilterChange(brand)}
              />
              <label
                htmlFor={brand}
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-1">
          <button
            onClick={setFilters}
            className="px-2 py-2 bg-slate-900 text-white items-center border rounded-lg hover:opacity-80 dark:bg-amber-100"
          >
            Apply Filter
          </button>

          <button
            onClick={resetFilters}
            className="px-2 py-2 bg-red-800 text-white items-center border rounded-lg hover:opacity-80 dark:bg-amber-100"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDrawer;

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import AddToCart from "./AddToCart";

import ProductDescription from "./Description";
import AddToFavourite from "./AddToFavourite";

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.imageUrls[0]);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Main Image */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto ">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
            {/* Thumbnails */}
            <div className="flex space-x-3 mb-6 mt-5">
              {product.imageUrls.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`border rounded-md overflow-hidden ${
                    img === mainImage ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    width={100}
                    height={60}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <div className="text-sm text-yellow-300 border border-gray-200 rounded-lg h-6 flex items-center mb-4 w-fit bg-blue-700 px-2.5 py-0.5 dark:text-white">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </div>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Brand: {product.brand} | Category: {product.category}
            </p>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {" "}
                Rs. {product.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
                <Link
                  href="#"
                  className="text-sm font-medium leading-none m-5 text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </Link>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              {product?.brand && (
                <Link
                  href={``}
                  className="text-sm font-medium leading-none rounded-lg py-1 px-3 bg-blue-500 text-gray-900 hover:underline hover:opacity-80 dark:text-white"
                >
                  {product?.brand}
                </Link>
              )}
              {product?.category && (
                <Link
                  href={``}
                  className="text-sm font-medium leading-none rounded-lg py-1 px-3 bg-gray-500 text-gray-900 hover:underline hover:opacity-80 dark:text-white"
                >
                  {product?.category}
                </Link>
              )}
            </div>
            <div className="flex gap-3 h-10">
              <AddToFavourite />
              <AddToCart product={product} className="mt-4 px-5 py-5" />
              
             
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
          </div>
        </div>
      </div>
      <ProductDescription description={product?.description} />
      <p className="text-sm text-gray-400 mt-7">
        Posted on {new Date(product.createdAt).toLocaleDateString()}
      </p>
    </section>
  );
};

export default ProductDetail;

import { getProducts } from '@/api/products';
import React from 'react'
import ProductCard from '../products/Card';

function PopularProducts() {
    const response= getProducts({category: "iphone"});
    const products = response?.data || [];
  return (
   <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our best-selling items loved by customers worldwide
          </p>
        </div>

        {/* Products Grid */}
         <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 ">
          {products?.length > 0 ? (
            products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))):(
            <div className="text-center text-2xl text-red-600 ">No Products Found</div>
          )
        }
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors duration-300 inline-flex items-center gap-2">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;


"use client";

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from '../products/Card';
import { getProducts } from '@/api/products';
import { FiAlertCircle } from 'react-icons/fi';
import Spinner from '../products/Spinner';
import Link from 'next/link';
import { PRODUCTS_ROUTE } from '@/constants/routes';


function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({category: "Smartphones"});
        // Sort by popularity or rating - adjust as needed
        const sortedProducts = response.data
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 6); // Show top 6 popular products
        setProducts(sortedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.response?.data || 'Failed to load popular products');
        toast.error(error.response?.data || 'Failed to load products', {
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-500 dark:text-red-400">
        <FiAlertCircle className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Popular Products
          </h2>
          <Link href={PRODUCTS_ROUTE}className="text-primary-600 hover:text-blue-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300"
            />
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No popular products found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularProducts;
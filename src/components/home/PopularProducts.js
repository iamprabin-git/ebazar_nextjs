"use client";

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from '../products/Card';
import { getProducts } from '@/api/products';

function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        toast.error(error.response?.data || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading popular products...</div>;
  }

  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
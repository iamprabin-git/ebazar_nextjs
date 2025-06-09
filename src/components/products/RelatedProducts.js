'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/api/products';
import Link from 'next/link';
import Image from 'next/image';

const RelatedProducts = ({ category, currentProductId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await getProducts({ category });
        const filtered = res.data?.filter(p => p.id !== currentProductId) || [];
        setRelated(filtered);
      } catch (err) {
        console.error('Failed to load related products:', err);
      }
    }

    if (category) fetchRelated();
  }, [category, currentProductId]);

  if (!related.length) return null;

  return (
    <div className="mt-1">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
        Related Products
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {related.filter((product)=>product.id!== currentProductId)
        .map((product, index) => index < 4 ? (
          <Link href={`/products/${product.id}`} key={index}>
            <div className="border rounded-lg  p-3 hover:bg-gray-100 transition dark:border-gray-700">
              <Image
                src={product.imageUrls[0]}
                alt={product.name}
                width={200}
                height={150}
                className="h-20 w-20 rounded-md object-cover items-center justify-center mb-2"
              />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-1">
                {product.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Rs. {product.price}
              </p>
            </div>
          </Link>
        ): null)}
      </div>
    </div>
  );
};

export default RelatedProducts;

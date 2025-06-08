
import { getProducts } from '@/api/products';
import React from 'react'

async function RelatedProducts({ category}) {
    const response = await getProducts({category});

    const products= response?.data;
  return (
    <div>
      {products.map((product, index)=> <div key={index}>{product.name}</div>)}
    </div>
  )
}

export default RelatedProducts;

import React from 'react'
import Image from 'next/image'
import card from '../../assets/images/product-card.jpg'
import Link from 'next/link';

function ProductCard({product}) {
  return (
    <div className='w-full h-max rounded-2xl shadow-blue-600 dark:shadow dark:shadow-amber-50 px-5 py-4 border border-b-amber-950 '>
       <Link href={`/products/${product.id}`}>
       <div className='flex justify-center'>
        <Image src={product.imageUrls[0] ?? card} alt='image' height={500} width={500} className='max-h-40 w-auto'/>
        </div>
        </Link>
    
       <div className='py-3 '>
      <Link href={`/products/${product.id}`}>
        <h2 className='text-2xl font-semibold justify-center'>{product.name}</h2>
       
        </Link>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{product.category}</span>
  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{product.brand}</span>
</div>

        <p className='py-2'>Rs.{product.price}</p>
        <button className='px-4 py-2 bg-amber-400 rounded-3xl text-white'>Add to Cart</button>
    </div>
  )
}

export default ProductCard;
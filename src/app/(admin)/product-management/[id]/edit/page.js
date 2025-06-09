import { getCategories, getProductById } from '@/api/products';
import BackButton from '@/components/BackButton';
import ProductForm from '@/components/products/Form';


import React from 'react'

async function ProductEditPage({params}) {
  const id = (await params).id;
  const response= await getProductById(id);
  const categoriesResponse = await getCategories();
  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
        <BackButton/>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit <span className='text-amber-400 italic'>{response?.data?.name}</span>
        </h2>
        <ProductForm
        id={id}
        product={response?.data} 
        categories={categoriesResponse?.data}/>
      </div>
  )
}

export default ProductEditPage;
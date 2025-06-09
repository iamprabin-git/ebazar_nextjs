import Spinner from '@/components/products/Spinner';
import React from 'react'

function ProductLoader() {
  return (
    <div className='flex justify-center items-center'>
      <Spinner className='h-20 w-20'/>
    </div>
  )
}

export default ProductLoader;

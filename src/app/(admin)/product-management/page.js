"use client";
import { getProductByUser } from '@/api/products';
import ProductTable from '@/components/products/Table';
import { setDeleted } from '@/redux/product/productSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PRODUCT_ADD_ROUTE } from '@/constants/routes';

function ProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { deleteStatus }= useSelector(state=>state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductByUser()
      .then(response => setProducts(response?.data))
      .catch(error => toast.error(error.response?.data))
      .finally(() => setLoading(false));dispatch(setDeleted(null));
  }, [deleteStatus,dispatch]);

  return (
    <section className='py-3 pr-5'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <h1 className='text-2xl font-bold'>Product Management</h1>
        <Link
          href={PRODUCT_ADD_ROUTE}
          className='btn btn-primary bg-slate-200 rounded-lg px-3 py-1 dark:bg-slate-800 dark:text-white hover:bg-slate-400'
        >
          Add New Product +
        </Link>
      </div>

      {loading ? (
        <div className='text-center text-2xl'>Product Loading.....</div>
      ) : (
        <ProductTable products={products} />
      )}
    </section>
  );
}

export default ProductManagementPage;

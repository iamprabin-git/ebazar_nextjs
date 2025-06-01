"use client";
import { confirmOrder } from '@/api/orders';
import Spinner from '@/components/products/Spinner';
import { ORDERS_ROUTE } from '@/constants/routes';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

function OrderPaymentPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params=useParams();
  const searchParams=useSearchParams();

  const transactionId=searchParams.get("transaction_id");
  const status=searchParams.get("status");

  const router= useRouter();

  useEffect(() => {
    confirmOrder(params.id, {
      transactionId, 
      status: status.toLowerCase(),})
    .catch((error) => setError(error.response?.data, { autoClose: 750 }))
    .finally(() => setLoading(false));

    setTimeout(()=>{
      router.push(ORDERS_ROUTE)
    }, 2500);
  }, []);

  return (
    <section className='max-w-screen-xl container mx-auto px-4 py-10'>
      { loading ? <div className='rounded-xl border boarder-slate-300 py-5 px-6 flex items-center justify-center flex-col bg-slate-100 dark:bg-slate-700'><Spinner className='h-20 w-20'/>
     <h2 className='dark:text-white text-2xl font-semibold mt-3'>Verifying Payment</h2>
     </div> : error ? <div className='rounded-xl border boarder-slate-300 py-5 px-6 flex items-center justify-center flex-col bg-red-200 dark:bg-red-700'>
     <h2 className='dark:text-white text-2xl font-semibold mt-3'>Payment Failed</h2>
     <p className='dark:text-red-500 text-lg font-semibold mt-3'>Error: {error}</p>
     </div>:
     
     <div className='rounded-xl border boarder-slate-300 py-5 px-6 flex items-center justify-center flex-col bg-green-200 dark:bg-green-700'>
     <h2 className='dark:text-white text-2xl font-semibold mt-3'>Payment Success</h2>
     </div>}     
    </section>
  )
};

export default OrderPaymentPage;

"use client";

import { getOrders } from '@/api/orders';
import { ORDER_STATUS_CONFIRMED, ORDER_STATUS_DELIVERED, ORDER_STATUS_PENDING, ORDER_STATUS_SHIPPED } from '@/constants/orderStatus';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DashboardCard from './Card';
import Spinner from '../products/Spinner';
import { LuClockAlert } from 'react-icons/lu';
import { FaRegClock, FaShippingFast } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

function OrdersDashbord() {
  const [loading, setLoading] = useState(true);
  const [orderCount, setOrderCount] = useState([{
    pending: 0,
    confirmed: 0,
    shipped: 0,
    delivered: 0,}
]);

  const {status} = useSelector((state) => state.order);


  useEffect(() => {
    setLoading(true);

    getOrders()
    .then((response) => {
      const orders =  response?.data;

    let pending = 0;
    let confirmed = 0;
    let shipped = 0;
    let delivered = 0;
    orders.forEach((order) => {
        switch (order.status) {
            case ORDER_STATUS_PENDING:
                pending++;
                break;
            case ORDER_STATUS_CONFIRMED:
                confirmed++;
                break;
            case ORDER_STATUS_SHIPPED:
                shipped++;
                break;
            case ORDER_STATUS_DELIVERED:
                delivered++;
                break;
            default:
                break;
        }
    });
      setOrderCount({pending, confirmed, shipped, delivered});
    
    })
    .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
    .finally(() => setLoading(false));
   
  }, []);
  return (
    <div>
      <h2 className='text-xl font-semibold'>Order Status</h2>
      {loading ? (
        <div className="text-center text-2xl"><Spinner /></div>
      ) : (
          
     
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-2 px-3'>
        <DashboardCard
        label="pending orders"
        value={orderCount.pending}
        className="bg-red-200 dark:bg-red-900" 
        icon={<LuClockAlert className="h-7 w-7 text-red-500 dark:text-red-200 mb-3" />}
      />
      <DashboardCard
        label="confirmed orders"
        value={orderCount?.confirmed}
        className="bg-blue-200 dark:bg-blue-900" 
        icon={<FaRegClock className="h-7 w-7 text-blue-500 dark:text-blue-200 mb-3" />}
      />
      <DashboardCard
        label="shipped orders"
        value={orderCount?.shipped}
        className="bg-yellow-200 dark:bg-yellow-900" 
        icon={<FaShippingFast className="h-7 w-7 text-yellow-500 dark:text-yellow-200 mb-3" />}
      />
      <DashboardCard
        label="delivered orders"
        value={orderCount?.delivered}
        className="bg-green-200 dark:bg-green-900" 
        icon={<IoShieldCheckmarkSharp className="h-7 w-7 text-green-500 dark:text-green-200 mb-3" />}
      />

      </div> )}
    </div>
  )
}

export default OrdersDashbord;

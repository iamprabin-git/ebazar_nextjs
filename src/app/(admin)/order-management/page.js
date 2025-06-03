"use client";
import { getOrders } from "@/api/orders";
import OrdersTable from "@/components/orders/Table";
import Spinner from "@/components/products/Spinner";
import { setOrderStatus } from "@/redux/order/orderSlice";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function OrderManagementPage() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const {status} = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getOrders()
    .then((response) => setOrders(response?.data))
    .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
    .finally(() => setLoading(false));
    dispatch(setOrderStatus(null));  
  }, [status, dispatch]);
  return (
    <section className='py-3 pr-5'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <h1 className='text-2xl font-bold'>Order Management</h1>
        
      </div>

      {loading ? (
        <div className="text-center text-2xl"><Spinner /></div>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </section>
  );
}

export default OrderManagementPage;

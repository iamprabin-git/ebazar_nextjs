"use client";
import { getOrders } from "@/api/orders";
import OrdersTable from "@/components/orders/Table";
import React, { use, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

function OrderManagementPage() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders()
    .then((response) => setOrders(response?.data))
    .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
    .finally(() => setLoading(false));  
  }, []);
  return (
    <section className='py-3 pr-5'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <h1 className='text-2xl font-bold'>Order Management</h1>
        
      </div>

      {loading ? (
        <div className='text-center text-2xl'>Product Loading.....</div>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </section>
  );
}

export default OrderManagementPage;

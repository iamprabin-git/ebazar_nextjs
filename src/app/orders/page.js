"use client";

import { getOrderByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import { ORDER_STATUS_CONFIRMED, ORDER_STATUS_DELIVERED, ORDER_STATUS_PENDING, ORDER_STATUS_SHIPPED } from "@/constants/orderStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LuClockAlert } from "react-icons/lu";
import { GiConfirmed } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const orderStatuses = [{
  status: ORDER_STATUS_PENDING,
  label: "Pending",
  icon: <LuClockAlert />
},
{
  status: ORDER_STATUS_CONFIRMED,
  label: "Confirmed",
  icon: <FaRegClock />
},
{
  status: ORDER_STATUS_SHIPPED,
  label: "Shipped",
  icon: <FaShippingFast />
},
{
  status: ORDER_STATUS_DELIVERED,
  label: "Delivered",
  icon: <GiConfirmed />
}]
function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    getOrderByUser(user?.id, status)
      .then((response) => setOrders(response?.data))
      .catch((error) => toast.error(error.response?.data));
  }, [user?.id, searchParams]);
  
  return(
   <div className="max-w-screen mx-auto container "> 

   

<div className="border-b border-gray-200 dark:border-gray-700">
  <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    {orderStatuses.map((orderStatus, index) => (
      <li className="me-2" key={index}>
      <Link href={`?status=${orderStatuses.status}`} className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
      {orderStatus.icon}
       {orderStatus.label}
      </Link>
    </li>
    ))} 
  </ul>
</div>


    {orders?.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
   </div>);
}

export default OrdersPage;

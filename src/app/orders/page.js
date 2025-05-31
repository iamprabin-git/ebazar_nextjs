"use client";

import { getOrderByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getOrderByUser(user?.id)
      .then((response) => setOrders(response?.data))
      .catch((error) => console.log(error.response?.data));
  }, [user]);
  return(
   <div className="max-w-screen mx-auto container "> 
    {orders?.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
   </div>);
}

export default OrdersPage;

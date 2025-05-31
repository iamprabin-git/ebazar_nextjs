"use client";
import { getOrders } from "@/api/orders";
import React, { useState } from "react";

function OrderManagementPage() {
  const [orders, setOrders] = useState([]);

  getOrders()
    .then((response) => setOrders(response?.data))
    .catch((error) => console.error(error));

  return (
    <div>
      {orders.map((order) => (
       <OrderCard key={order.orderNumber} order={order} />
      ))}
    </div>
  );
}

export default OrderManagementPage;

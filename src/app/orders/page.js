"use client";

import { getOrderByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LuClockAlert } from "react-icons/lu";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { set } from "react-hook-form";
import Spinner from "@/components/products/Spinner";

const orderStatuses = [
  {
    status: ORDER_STATUS_PENDING,
    label: "Pending",
    icon: <LuClockAlert className="h-5 w-5" />,
  },
  {
    status: ORDER_STATUS_CONFIRMED,
    label: "Confirmed",
    icon: <FaRegClock className="h-5 w-5" />,
  },
  {
    status: ORDER_STATUS_SHIPPED,
    label: "Shipped",
    icon: <FaShippingFast className="h-5 w-5" />,
  },
  {
    status: ORDER_STATUS_DELIVERED,
    label: "Delivered",
    icon: <IoShieldCheckmarkSharp className="h-5 w-5" />,
  },
];
function OrdersPage() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  useEffect(() => {
    setLoading(true);
    getOrderByUser(user?.id, status??ORDER_STATUS_PENDING)
      .then((response) => setOrders(response?.data))
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }, [user?.id, searchParams]);

  return (
    <div className="max-w-screen mx-auto container ">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {orderStatuses.map((orderStatus, index) => (
            <li className="me-2" key={index}>
              <Link
                href={`?status=${orderStatus.status}`}
                className={`${
                  status === orderStatus.status
                    ? "text-blue-600 dark:text-gray-50"
                    : ""
                } inline-flex items-center justify-center p-5 gap-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-white group`}
              >
                {orderStatus.icon}
                {orderStatus.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {loading ? (
        <span className="flex items-center justify-center p-5">
          <Spinner className="h-5 w-5" />
        </span>
      ) : (
        orders?.length === 0 ? <h3 className="text-center text-2xl p-5">No orders found.</h3>:
        orders?.map((order, index) => <OrderCard key={index} order={order} />)
      )}
    </div>
  );
}

export default OrdersPage;

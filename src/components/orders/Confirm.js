"use client";
import Image from "next/image";
import { checkoutOrder } from "@/api/orders";
import { useState } from "react";
import { toast } from "react-toastify";
import config from "@/config";
import Spinner from "../products/Spinner";
import KhaltiPayment from "./KhaltiPayment";
import CashOnDelivery from "./CashOnDelivery";


function ConfirmOrder({ order }) {
  const [loading, setLoading] = useState(false);
  function initiatePayment() {
    const orderId = order._id;

    setLoading(true);
    checkoutOrder(orderId, {
      returnUrl: `${config.appUrl}/orders/${orderId}/payment`,
      websiteUrl: config.appUrl,
    })
      .then((response) => {
        const data = response?.data;

        window.location.href = data.payment_url;
      })
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }
  return (
    <div className="flex items-center justify-between bg-slate-300 py-3 px-6 rounded-b-lg gap-3 dark:bg-slate-900">
     <CashOnDelivery order={order} />
      <KhaltiPayment order={order} />
    </div>
  );
}

export default ConfirmOrder;

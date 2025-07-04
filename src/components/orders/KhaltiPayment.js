"use client";
import Image from "next/image";
import khalti from "../../assets/images/khalti-white.png";

import Spinner from "../products/Spinner";
import config from "@/config";
import { toast } from "react-toastify";
import { checkoutOrder } from "@/api/orders";
import { useState } from "react";

function KhaltiPayment({order}) {
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
     <button
        onClick={initiatePayment}
        type="button"
        disabled={loading}
        className="flex gap-2 items-center justify-between cursor-pointer text-white bg-[#9f18a9] hover:opacity-80 focus:ring-4 font-medium rounded-lg text-lg px-5 py-1 dark:bg-purple-600 dark:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Spinner className="h-5 w-5" />
        ) : (
          <Image
            src={khalti}
            alt="khalti"
            width={1000}
            height={1000}
            className="h-10 w-10"
          />
        )}
       Pay Via Khalti
      </button>
      
    </div>
  )
}

export default KhaltiPayment;

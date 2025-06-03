"use client";
import Image from "next/image";
import cod from "../../assets/images/cod.png";
import Spinner from "../products/Spinner";
import { toast } from "react-toastify";
import { confirmOrder } from "@/api/orders";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ORDERS_ROUTE } from "@/constants/routes";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";

function CashOnDelivery({order}) {
  const [loading, setLoading] = useState(false);

  const router=useRouter();

  function confirmPayment() {
    const orderId = order._id;

    setLoading(true);
    confirmOrder(orderId, {
      status: "completed",
      transactionId: crypto.randomUUID(),
      paymentMethod: "cash",
    })
      .then(() => {
        router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
        toast.success("Order Confirmed! payment via cash", { autoClose: 750 });
      })
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center justify-between bg-slate-300 py-3 px-6 rounded-b-lg gap-3 dark:bg-slate-900">
     <button
        onClick={confirmPayment}
        type="button"
        disabled={loading}
        className="flex gap-2 items-center justify-between cursor-pointer text-white bg-[#0b762f] hover:opacity-80 focus:ring-4 font-medium rounded-lg text-lg px-5 py-1 dark:bg-green-600 dark:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Spinner className="h-5 w-5" />
        ) : (
          <Image
            src={cod}
            alt="cod"
            width={1000}
            height={1000}
            className="h-10 w-10"
          />
        )}
      Cash on Delivery
      </button>
      
    </div>
  )
}

export default CashOnDelivery;


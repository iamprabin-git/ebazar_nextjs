import { createOrder } from "@/api/orders";
import { ORDERS_ROUTE } from "@/constants/routes";
import { clearCart } from "@/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Checkout({ products, totalPrice }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  function checkoutOrder() {
    createOrder({
      orderItems: products.map((item) => ({
        product: item.id,
        quantity: item.quantity,
      })),
      totalPrice,
    })
      .then(() => {
        router.push(ORDERS_ROUTE);
        
        toast.success("Order placed successfully!", {
          autoClose: 750,
          onClose: () => {dispatch(clearCart());},
        });
      })
      .catch((error) =>
        toast.error(error.response?.data?.message || "Failed to place order", {
          autoClose: 1000,
        })
      )
      .finally(() => setLoading(false));
  }
  return (
    <div className="flex items-center justify-between ">
      <div className="flex justify-start border-t border-b py-2 ">
        <span className="font-semibold pr-5 pl-65">Total Price:</span>
        <h4 className="pl-115">Rs. {totalPrice}</h4>
      </div>
      <button
        onClick={checkoutOrder}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Checkout
      </button>
    </div>
  );
}

export default Checkout;

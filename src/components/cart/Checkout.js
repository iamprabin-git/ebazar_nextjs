import { createOrder } from "@/api/orders";
import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const { totalPrice } = useSelector((state) => state.cart);

  function checkoutOrder() {
    createOrder({
      orderItems: Products.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      totalPrice,
    });
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

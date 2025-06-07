"use client";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/cart/cartSlice";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import RemoveFromCartModal from "./Modal";

function HandleQuantity({ product }) {
    const [showModal, setShowModal] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  
  return (
   
    <div className="flex items-center">
      <button
        onClick={() => dispatch(decreaseQuantity(product))}
        className="inline-flex items-center justify-center h-10 w-10 p-1 ms-3 text-sm font-medium text-gray-500 bg-white hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 "
      >
        <CiCircleMinus className="h-6 w-6 " />
      </button>
      <p className="px-4 py-2 border rounded-lg">{product.quantity}</p>
      <button
        onClick={() => dispatch(increaseQuantity(product))}
        className="inline-flex items-center justify-center h-10 w-10 p-1 ms-3 text-sm font-medium text-gray-500 bg-white hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 "
      >
        <CiCirclePlus className="h-6 w-6 " />
      </button>
      
   
    </div>
  );
}

export default HandleQuantity;

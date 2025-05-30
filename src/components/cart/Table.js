"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/cart/cartSlice";
import { GrSettingsOption } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import RemoveFromCartModal from "./Modal";

function CartTable({products}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const dispatch = useDispatch();

  function removeFromCart(product) {
    setShowModal(true);
    setSelectedProduct(product);
  }

  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total price
            </th>
            <th scope="col" className="px-6 py-3">
              < GrSettingsOption className="h-5 w-5"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <Image
                  src={product.imageUrls[0]}
                  className="w-10 md:w-25 max-w-full max-h-full"
                  alt={product.name}
                  height={100}
                  width={100}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.name}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button 
                  onClick={() => dispatch(decreaseQuantity(product))}
                  className="inline-flex items-center justify-center h-10 w-10 p-1 ms-3 text-sm font-medium text-gray-500 bg-white hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 ">
                    <CiCircleMinus className="h-6 w-6 " />
                  </button>
                <p className="px-4 py-2 border rounded-lg">{product.quantity}</p>
                  <button 
                  onClick={() => dispatch(increaseQuantity(product))}
                  className="inline-flex items-center justify-center h-10 w-10 p-1 ms-3 text-sm font-medium text-gray-500 bg-white hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 ">
                    <CiCirclePlus className="h-6 w-6 " />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Rs. {product.price}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Rs. {product.price * product.quantity}
              </td>
              <td className="px-6 py-4">
                <button
               onClick={() => removeFromCart(product)}
                  className="flex gap-2 items-center border rounded-lg px-3 py-1 font-medium text-red-600 dark:text-red-500 hover:bg-green-700 hover:text-white cursor-pointer"
                >
                  Remove 
                  <RiDeleteBin5Line className="h-6 w-6 "/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RemoveFromCartModal showModal={showModal} setShowModal={setShowModal} product={selectedProduct}/>
    </div>
  );
}

export default CartTable;

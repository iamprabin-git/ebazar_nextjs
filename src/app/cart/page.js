"use client";
import CartTable from '@/components/cart/Table';
import React from 'react'
import { useSelector } from 'react-redux';

function CartPage() {
   const { products, totalPrice } = useSelector((state) => state.cart);
  return (
    <section className='container mx-auto'>
      <h1 className='text-2xl font-bold items-center'>Your Cart Items</h1>
      {products.length>0 ? (
        <>
      <CartTable products={products}/>
      <div className='flex justify-end border-t border-b py-2'>
        <span className='font-semibold'>Total Price:</span>
        <h4>{totalPrice}</h4>
      </div></>
      ): (<div className="text-center text-2xl text-red-600 ">Cart is empty</div>)}
      
      </section>
  );
}

export default CartPage;
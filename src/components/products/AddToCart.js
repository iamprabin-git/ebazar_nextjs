"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { useDispatch } from "react-redux";

function AddToCart({ product }) {
    const dispatch = useDispatch();

    function addProductToCart() {
        dispatch(addToCart(product));
    }

    return (
        <button 
        onClick={addProductToCart} 
        className="px-4 py-2 bg-blue-500 hover:opacity-80 text-white rounded-md">
            Add to Cart
        </button>
    );
}

export default AddToCart;
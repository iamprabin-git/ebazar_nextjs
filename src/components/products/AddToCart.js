"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

function AddToCart({ product, className }) {
    const dispatch = useDispatch();

    function addProductToCart() {
        delete product.description;
        dispatch(addToCart(product));

        toast.success("Product added to cart successfully!", { autoClose: 750 });
    }

    return (
        <button 
        onClick={addProductToCart} 
        className={`bg-blue-500 hover:opacity-80 text-white rounded-md flex items-center justify-center gap-3 px-5 py-1 ${className}`}>
            <FaCartPlus />
            Add to Cart
        </button>
    );
}

export default AddToCart;
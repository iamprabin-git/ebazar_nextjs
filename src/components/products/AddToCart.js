"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function AddToCart({ product }) {
    const dispatch = useDispatch();

    function addProductToCart() {
        delete product.description;
        dispatch(addToCart(product));

        toast.success("Product added to cart successfully!", { autoClose: 750 });
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
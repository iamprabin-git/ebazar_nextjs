"use client";
import profile from "@/assets/images/product-card.jpg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
import AuthUserPopup from "./AuthUserPopup";

function AuthUser({ user }) {
    const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button className=" p-2 "
      onClick={() => setShowPopup(!showPopup)}>
        <Image
               src={user?.profileImageUrl || profile}
               alt="user"
               height={100}
               width={100}
               className="w-10 h-10 rounded-full border-1 border-gray-300 p-1" 
             />
      </button>
      {showPopup && (
      <AuthUserPopup user={user} setShowPopup={setShowPopup}/>
          
      )}
      
      
    </div>
  );
}

export default AuthUser;

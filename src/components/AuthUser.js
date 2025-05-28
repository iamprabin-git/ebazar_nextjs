"use client";

import { useDispatch } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
import AuthUserPopup from "./AuthUserPopup";

function AuthUser({ user }) {
    const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button className="border-3 p-2 rounded-full cursor-pointer"
      onClick={() => setShowPopup(!showPopup)}>
        <FaUserTie />
      </button>
      {showPopup && (
      <AuthUserPopup user={user} setShowPopup={setShowPopup}/>
          
      )}
      
      
    </div>
  );
}

export default AuthUser;

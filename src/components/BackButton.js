"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
    const router= useRouter();
  return(
    <button className="flex items-center" onClick={() => router.back()} type="button">
        <FaArrowLeft />
    Back

   </button>
  )

}

export default BackButton;

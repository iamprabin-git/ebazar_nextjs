import Image from "next/image";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import profile from "../../assets/images/product-card.jpg";
import { uploadProfileImage } from "@/api/users";
import { updateUserData } from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../products/Spinner";

function ProfileImage({ user }) {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

 const dispatch=useDispatch();
  function updateImage() {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", profileImage);
    uploadProfileImage(formData)
      .then((response) => {
        console.log(response);
        dispatch(
          updateUserData({
            ...user,
            profileImageUrl: response?.data?.profileImageUrl,
          })
        );
        toast.success("Image updated successfully!", { autoClose: 750 });
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 750 });
      })
      .finally(() => {
        setLoading(false);
        setProfileImage(null);
     
      });
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <Image
        src={user?.profileImageUrl || profile}
        alt="user"
        height={100}
        width={100}
        className="w-20 h-20 rounded-full border-3 border-gray-300 p-1" 
      />
      <div className="flex flex-col items-start gap-3">
        <input
          type="file"
          id="profile-image"
          className="border rounded-md px-3 py-1"
          accept=".png, .jpg, .jpeg"
          defaultValue={profileImage}
          onChange={(e) => {
            const files = [];
            Array.from(e.target.files).forEach((file) => {
              files.push(file);
            })
              setProfileImage(files[0]);
            
          }}
        />
       
        <button
          onClick={updateImage}
          disabled={!profileImage}
          type="button"
          className="bg-blue-500 rounded-lg px-3 py-2 dark:bg-blue-800 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors cursor-pointer flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <span className="mr-2"><Spinner /></span>:(
          <FaUpload className="w-4 h-4 me-2" />)}
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
import Image from "next/image";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import profile from "../../assets/images/product-card.jpg";
import { uploadProfileImage } from "@/api/users";

function ProfileImage({ user }) {
  const [profileImage, setProfileImage] = useState(null);

  function updateImage() {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    uploadProfileImage(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <Image
        src={user?.profileImageUrl || profile}
        alt="user"
        height={100}
        width={100}
        className="w-20 h-20 rounded-full bg-contain overflow-hidden"
      />
      <div className="flex flex-col items-start gap-3">
        <input
          type="file"
          id="profile-Image"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setProfileImage(file);
            }
          }}
        />
        <label
          htmlFor="profile-Image"
          className="cursor-pointer bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Choose Image
        </label>
        <button
          onClick={updateImage}
          disabled={!profileImage}
          type="button"
          className="bg-blue-500 rounded-lg px-3 py-2 dark:bg-blue-800 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors cursor-pointer flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaUpload className="w-4 h-4 me-2" />
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
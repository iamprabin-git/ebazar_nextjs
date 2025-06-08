import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
function AddToFavourite() {
    const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
      <button
        href="#"
        onClick={() => setIsFavourite(!isFavourite)}
        className="flex items-center justify-center cursor-pointer py-2.5 px-5 text-sm font-medium text-white  bg-green-800 rounded-lg  hover:bg-green-400 hover:text-grey-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-400"
      
      >
        {isFavourite ? (
          <GoHeartFill className="w-5 h-5 -ms-2 me-2 text-red-600"/>
        ) : (
          <GoHeart className="w-5 h-5 -ms-2 me-2" />
        )}
        
        
        Add to favorites
      </button>
    </div>
  );
}

export default AddToFavourite;

import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import DeleteOrderModal from "./DeleteModal";

function DeleteOrderButton({id}) {
    const [showModal, setShowModal] = useState(false);
    

    function removeOrder() {
      setShowModal(true);
      
    }
  return (
    <>
    <button 
    onClick={removeOrder}
    className="px-2 py-2  text-red-700 rounded-3xl">
      <RiDeleteBin6Fill className="w-5 h-5" />
    </button>

    <DeleteOrderModal showModal={showModal} setShowModal={setShowModal} orderId={id} />
    </>
  );
}

export default DeleteOrderButton;

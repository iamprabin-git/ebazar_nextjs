import React, { useState } from "react";

import { TiPencil } from "react-icons/ti";
import EditOrderModal from "./EditModal";

function EditOrderButton({id, defaultStatus}) {
    const [showModal, setShowModal] = useState(false);
    

    function editOrder() {
      setShowModal(true);
      
    }
  return (
    <>
    <button 
    onClick={editOrder}
    className="px-2 py-2  text-red-700 rounded-3xl">
      <TiPencil className="w-5 h-5"/>
    </button>

    <EditOrderModal showModal={showModal} setShowModal={setShowModal} orderId={id} defaultStatus={defaultStatus}/>
    </>
  );
}

export default EditOrderButton;

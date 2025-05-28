import { IoAlertCircleSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { set } from "react-hook-form";
import { deleteProduct } from "@/api/products";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDeleted } from "@/redux/product/productSlice";

function DeleteProductModal({
  showModal = false,
  setShowModal,
  product,
  setProduct,
}) {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function confirmDelete() {
    setLoading(true);
    deleteProduct(product?.id)
      .then(() =>{
        toast.success("Product deleted successfully!", { autoClose: 750 });
      dispatch(setDeleted("success"));
   } )
      .catch((error) =>
        toast.error(
          error.response?.data?.message || "Failed to delete product",
          { autoClose: 1000 }
        )
      )
      .finally(() => {
        setLoading(false);
        setShowModal(false);
        setProduct(null);
      });
  }
  return (
    <div className={showModal ? "block" : "hidden"}>
      <div className="w-full h-svh flex items-center justify-center bg-black/50 fixed top-0 right-0 bottom-0 left-0 z-50">
        <div className="relative p-5 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <IoIosClose className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>

            <div className="p-4 md:p-5 text-center">
              <IoAlertCircleSharp className="mx-auto mb-4 text-red-600 w-12 h-12 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <p className="mb-3 text-sm text-gray-800 dark:text-gray-400">
                Product: <span className="font-bold">{product?.name}</span>
              </p>
              <button
                onClick={confirmDelete}
                disabled={loading}
                data-modal-hide="popup-modal"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                {"Yes, I'm sure"}
                {loading && 
                <Spinner className="w-4 h-4 fill-red-500 ml-2" />}
              </button>
              <button
                data-modal-hide="popup-modal"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductModal;

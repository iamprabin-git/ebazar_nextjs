import Image from "next/image";
import Link from "next/link";
import { IoIosCog } from "react-icons/io";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import React, { useState } from "react";
import DeleteProductModal from "./Modal";

function ProductTable({ products }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  function removeProduct(product) {
    setShowModal(true);
    setSelectedProduct(product);
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              <IoIosCog className="text-2xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
                <Image
                  src={product.imageUrls?.[0] || "/default-product.jpg"}
                  alt={product.name}
                  height={100}
                  width={100}
                  className="max-h-20 w-auto"
                />
              </td>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">Rs. {product.price}</td>
              <td className="px-6 py-4">{product.createdAt}</td>
              <td className="px-6 py-10 flex">
                <Link
                  href={`product-management/${product.id}/edit`}
                  className="bg-blue-500 text-white text-xs font-medium me-2 px-3 py-3 rounded-sm dark:bg-blue-900 dark:text-blue-300 hover:opacity-90"
                >
                  <TiPencil />
                </Link>
                <button
                  className="bg-red-600 text-white text-xs font-medium me-2 px-3 py-3 rounded-sm cursor-pointer dark:bg-red-900 dark:text-red-500"
                  onClick={() => removeProduct(product)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={selectedProduct}
        setProduct={setSelectedProduct}
      />
    </div>
  );
}

export default ProductTable;

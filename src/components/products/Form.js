"use client";
import {
  createProduct,
  getCategories,
  updateProduct,
} from "@/api/products";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";

function ProductForm({ id, product, categories }) {
  const [loading, setLoading] = useState(false);
  const [localImageUrls, setLocalImageUrls] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    values: product,
  });

  function prepareData(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    if (data.description) {
      formData.append("description", data.description);
    }
    if (productImages.length > 0) {
       productImages.map((image) => {
      formData.append("images", image);
    });
    }
   

    return formData;
  }

  async function submitForm(data) {
    setLoading(true);
    const formData = prepareData(data);

    try {
      if (product) {
        await updateProduct(id, formData);
        toast.success("Product updated successfully!", { autoClose: 750 });
        return;
      }
      await createProduct(formData);
      reset();
      toast.success("Product created successfully!", { autoClose: 750 });
      // Clear form if needed
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create product", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
      setProductImages([]);
      setLocalImageUrls([]);
    }
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
            required
            {...register("name")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product brand"
            required
            {...register("brand")}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            list="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product category"
            required
            {...register("category")}
          />
          <datalist id="categories">
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </datalist>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Rs.2999"
            required
            {...register("price")}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your description here"
            {...register("description")}
          />
        </div>

        <div className="sm:col-span-2 ">
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <IoCloudUploadOutline className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG
              </p>
            </div>
            <input
              id="images"
              type="file"
              className="hidden"
              multiple
              accept=".png, .jpg, .jpeg .svg"
              onChange={(e) => {
                const files = [];
                const Urls = [];
                Array.from(e.target.files).map((file) => {
                  files.push(file);
                  Urls.push(URL.createObjectURL(file));
                });
                setLocalImageUrls(Urls);
                setProductImages(files);
              }}
            />
          </label>
          {localImageUrls.length > 0 && (
            <div className="flex flex-wrap gap-5 mt-4">
              {localImageUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`Image ${index}`}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white ${
          loading ? "bg-gray-500" : "bg-slate-700 hover:bg-primary-800"
        } rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 cursor-pointer`}
      >
        {loading ? (
          <>
            Saving...
            <Spinner />
          </>
        ) : (
          <>{product ? "Edit product" : "Add product"}</>
        )}
      </button>
    </form>
  );
}

export default ProductForm;

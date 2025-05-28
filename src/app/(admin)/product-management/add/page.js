import { getCategories } from "@/api/products";
import BackButton from "@/components/BackButton";
import PropertyForm from "@/components/products/Form";
import React from "react";

async function ProductAddPage() {
const categoriesResponse = await getCategories();
  return (
    <section className="bg-white dark:bg-gray-900">
      <BackButton/>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <PropertyForm categories={categoriesResponse?.data}/>
      </div>
    </section>
  );
}

export default ProductAddPage;

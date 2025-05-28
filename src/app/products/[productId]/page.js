
import { getProductById } from "@/api/products";
import ProductDetail from "@/components/products/ProductsDetails";

export default async function ProductByIdPage({ params }) {
  try {
    const response = await getProductById((await params).productId);
    const product = response.data;

    return <ProductDetail product={product} />;
  } catch (error) {
    return (
      <div className="p-4 text-red-600">
        Failed to load product. {error?.message || "Please try again later."}
      </div>
    );
  }
}
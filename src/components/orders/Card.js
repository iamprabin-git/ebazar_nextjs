import Image from "next/image";

function OrderItemCard({ product, quantity }) {
  return (
    <div className="flex items-center border rounded m-2 p-2 gap-5">
      <Image
        src={product.imageUrls[0]}
        alt={product.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
      <p className="font-semibold">{product.name}</p>
      <p className="text-sm">Price: Rs. {product.price} * {quantity}</p>
    </div>
    </div>
  );
}

function OrderCard({ order }) {
  return (
    <div className="bg-gray-100 p-4 border rounded-lg my-2 dark:bg-gray-800 ">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold"># {order.orderNumber}</h2>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 uppercase">{order.status}</span>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {order.orderItems.map((item, index) => (
          <OrderItemCard key={index} product={item.product} quantity={item.quantity}/>
        ))}
      </div>
    </div>
  );
}

export default OrderCard;

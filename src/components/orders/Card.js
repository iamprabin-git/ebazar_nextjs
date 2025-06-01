import Image from "next/image";
import ConfirmOrder from "./Confirm";


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
        <p className="text-sm">
          Price: Rs. {product.price} * {quantity}
        </p>
      </div>
    </div>
  );
}

function OrderCard({ order }) {
  return (
    <div className="bg-gray-100 border rounded-lg my-2 dark:bg-gray-800 ">
      <div className="flex items-center justify-between mb-2 pt-4 px-6">
        <h2 className="text-lg font-semibold"># {order.orderNumber}</h2>
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 uppercase">
          {order.status}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 px-6">
        {order.orderItems.map(
          (item, index) =>
            item.product && (
              <OrderItemCard
                key={index}
                product={item.product}
                quantity={item.quantity}
              />
            )
        )}
      </div>
      <div className="flex items-center justify-between bg-slate-300 py-3 px-6 rounded-b-lg dark:bg-slate-900">
        <h4 className="mt-2 font-semibold">
          Total Price: Rs. {order.totalPrice}
        </h4>
        <ConfirmOrder order={order}/>
      </div>
    </div>
  );
}

export default OrderCard;

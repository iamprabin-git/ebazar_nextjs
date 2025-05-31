import Image from "next/image";

function OrderItemCard({ product }) {
    return (
        <div className="border rounded m-2 p-2">
            <Image
                src={product.imageUrls[0]}
                alt={product.name}
                width={50}
                height={50}
                className="rounded-full"
            />
            <p>{product.name}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
        </div>
    );
}

function OrderCard({ order }) {
    return (
        <div className="bg-gray-100 p-4 border rounded-lg my-2 dark:bg-gray-800 ">
           <h2 className="text-lg font-semibold">Order Number: {order.orderNumber}</h2>
           {order.orderItems.map((item, index) => (
            <OrderItemCard key={index} product={item.product} />
          ))}
        </div>
    );
}

export default OrderCard;
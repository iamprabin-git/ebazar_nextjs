import { HiOutlineCog } from "react-icons/hi2";
import OrderStatus from "./Status";

import DeleteOrderButton from "./DeleteButton";

import EditOrderButton from "./EditButton";

function OrdersTable({ orders }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 items-center justify-center">
              Order ID
            </th>

            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Products
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Methods
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              <HiOutlineCog className="w-6 h-6" />
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                title={order.orderNumber}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                # {index +1}
              </th>
              <td className="px-6 py-4">{order.user.name}</td>
              <td className="px-6 py-4">
                {order.orderItems.map((item, productIndex) =>
                  item.product ? (
                    <li key={productIndex}>
                     <span className="font-semibold">{item?.product?.name}</span>  X {item.quantity}
                    </li>
                  ) : null
                )}
              </td>
              <td className="px-6 py-4">{order.totalPrice}</td>
              <td className="px-6 py-4">{order?.payment?.paymentMethod || "-"}</td>
              <td className="px-6 py-4"><OrderStatus status={order.status}/></td>
              <td className="px-6 py-4 flex">
                <EditOrderButton id={order._id} defaultStatus={order.status} />
                <DeleteOrderButton id={order._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;

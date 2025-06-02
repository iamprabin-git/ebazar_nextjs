import { HiOutlineCog } from "react-icons/hi2";

function OrdersTable({ orders }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
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
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              <HiOutlineCog />
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
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                # {order.orderNumber}
              </th>
              <td className="px-6 py-4">{order.user.name}</td>
              <td className="px-6 py-4">{order.customerName}</td>
              <td className="px-6 py-4">{order.products}</td>
              <td className="px-6 py-4">{order.totalPrice}</td>
              <td className="px-6 py-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {order.status}
                </span> 
              </td> 
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;

import { USER_UPDATE_ROUTE } from '@/constants/routes';
import Link from 'next/link';
import React, { use } from 'react'
import { IoIosCog } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';

function UsersTable({users, o}) {
  return (
   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
             S.N.
            </th>
            <th scope="col" className="px-6 py-3">
              Users name
            </th>
            <th scope="col" className="px-6 py-3">
             Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Roles
            </th>
            <th scope="col" className="px-6 py-3">
              <IoIosCog className="text-2xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">
               {index +1}
              </td>

              <th
              
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user?.name}
              </th>
              <td className="px-6 py-4">{user?.email}</td>
              <td className="px-6 py-4">{user?.phone}</td>
              <td className="px-6 py-4">Rs. {user?.address.city}, {user?.address.province}</td>
              <td className="px-6 py-4">{user.role?.join(", ")}</td>
              <td className="px-6 py-10 flex">
                <Link
                  href={USER_UPDATE_ROUTE}
                  className="bg-blue-500 text-white text-xs font-medium me-2 px-3 py-3 rounded-sm dark:bg-blue-900 dark:text-blue-300 hover:opacity-90"
                >
                  <TiPencil />
                </Link>
                <button
                  className="bg-red-600 text-white text-xs font-medium me-2 px-3 py-3 rounded-sm cursor-pointer dark:bg-red-900 dark:text-red-500"
                  onClick={() => removeuser(user)}
                >
                  <RiDeleteBin6Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <DeleteuserModal
        showModal={showModal}
        setShowModal={setShowModal}
        user={selecteduser}
        setuser={setSelecteduser}
      /> */}
    </div>
  )
}

export default UsersTable;

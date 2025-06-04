"use client";
import { getAllUsers } from '@/api/users';
import Spinner from '@/components/products/Spinner';
import UsersTable from '@/components/users/Table';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setOrderStatus } from '@/redux/order/orderSlice';

function UserManagementPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { status } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((response) => setUsers(response?.data))
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
    dispatch(setOrderStatus(null));
  }, [dispatch]);

  return (
    <section className='py-3 pr-5'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <h1 className='text-2xl font-bold'>User Management</h1>
      </div>

      {loading ? (
        <div className="text-center text-2xl"><Spinner /></div>
      ) : (
        <UsersTable users={users} />
      )}
    </section>
  );
}

export default UserManagementPage;
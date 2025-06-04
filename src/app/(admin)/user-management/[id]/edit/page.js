"use client";
import { getUserById } from '@/api/users';
import BackButton from '@/components/BackButton';
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function UserUpdatePage() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
      getUserById(userId)
      .then((response) => setUser(response?.data))
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
    }, []);
  return (
    <div>
      <BackButton/>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit <span className='text-amber-400 italic'>{user?.name}</span>
        </h2>
    </div>
  )
}

export default UserUpdatePage;

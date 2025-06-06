"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

import { getUserById } from "@/api/users";
import BackButton from "@/components/BackButton";
import UserForm from "@/components/users/Form";

function UserUpdatePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // default to null
  const params = useParams();
  const userId = params?.id;

  useEffect(() => {
    if (!userId) return;

    getUserById(userId)
      .then((response) => setUser(response?.data))
      .catch((error) =>
        toast.error(error?.response?.data || "Failed to fetch user.", {
          autoClose: 750,
        })
      )
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <section className="py-3">
      <BackButton />
      <div className="py-5 px-4 mx-auto max-w-2xl">
        {loading ? (
          <p className="text-center text-gray-600 dark:text-white">Loading...</p>
        ) : (
          <>
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Edit <span className="text-amber-400 italic">{user?.name}</span>
            </h2>
            <UserForm user={user} />
          </>
        )}
      </div>
    </section>
  );
}

export default UserUpdatePage;

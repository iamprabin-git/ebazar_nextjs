"use client";
import { EMAIL_REGEX } from "@/constants/regex";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/api/users";
import { toast } from "react-toastify";
import { updateUserData } from "@/redux/auth/authSlice";
import ProfileImage from "@/components/profile/Image";

function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      city: user?.address?.city || "",
      province: user?.address?.province || "",
      street: user?.address?.street || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await updateUser(user.id, {
        name: data.name,
        phone: data.phone,
        address: {
          city: data.city,
          province: data.province,
          street: data.street,
        },
      });
      dispatch(
        updateUserData({
          ...user,
          name: data.name,
          phone: data.phone,
          address: {
            city: data.city,
            province: data.province,
            street: data.street,
          },
        })
      );
      toast.success("User updated successfully!", { autoClose: 750 });
    } catch (error) {
      toast.error(error.response?.data || "Update failed", { autoClose: 750 });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div>Loading user...</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-6 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-center mb-4">Account</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImage user={user} />

        {/* Full Name */}
        <div className="py-2">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Full name is required" })}
            placeholder="John Doe"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <p className="text-red-600">{errors?.name?.message}</p>
        </div>

        {/* Email */}
        <div className="py-2">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
            placeholder="example@gmail.com"
            disabled
            className="w-full border rounded py-1 px-2 my-1 disabled:text-gray-500"
          />
          <p className="text-red-600">{errors?.email?.message}</p>
        </div>

        {/* Phone Number */}
        <div className="py-2">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="+977-9812345678"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <p className="text-red-600">{errors?.phone?.message}</p>
        </div>

        {/* City */}
        <div className="py-2">
          <label htmlFor="city">Address City</label>
          <input
            type="text"
            id="city"
            {...register("city")}
            placeholder="Kathmandu, Nepal"
            className="w-full border rounded py-1 px-2 my-1"
          />
        </div>

        {/* Street */}
        <div className="py-2">
          <label htmlFor="street">Address Street</label>
          <input
            type="text"
            id="street"
            {...register("street")}
            placeholder="Newroad"
            className="w-full border rounded py-1 px-2 my-1"
          />
        </div>

        {/* Province */}
        <div className="py-2">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            {...register("province", { required: "Province is required" })}
            className="w-full border rounded py-1 px-2 my-1"
          >
            <option value="">Choose a Province</option>
            <option value="KP">Koshi Province</option>
            <option value="MP">Madhesh Province</option>
            <option value="BP">Bagmati Province</option>
            <option value="GP">Gandaki Province</option>
            <option value="LP">Lumbini Province</option>
            <option value="KA">Karnali Province</option>
            <option value="SP">Sudurpashchim Province</option>
          </select>
          <p className="text-red-600">{errors?.province?.message}</p>
        </div>

        {/* Submit */}
        <div className="py-4">
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Updating..." : "Update Profile"}
            className="w-full bg-pink-600 hover:opacity-80 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-70"
          />
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
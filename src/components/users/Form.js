"use client";

import { updateUser } from "@/api/users";
import { EMAIL_REGEX } from "@/constants/regex";
import { ROLE_ADMIN, ROLE_AGENT, ROLE_USER } from "@/constants/roles";
import { allowedAdminRoles, getRole } from "@/helpers/users";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function UserForm({ user }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      city: user?.address?.city || "",
      province: user?.address?.province || "",
      street: user?.address?.street || "",
      role: getRole(user?.roles) || ROLE_USER,
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    updateUser(user.id, {
      name: data.name,
      phone: data.phone,
      address: {
        city: data.city,
        province: data.province,
        street: data.street,
      },
      roles: allowedAdminRoles(data.role),
    })
      .then(() => {
        toast.success("User updated successfully!", { autoClose: 750 });
        // Optionally redirect after update
        // router.push("/admin/users");
      })
      .catch((error) =>
        toast.error(error?.response?.data || "Failed to update user", {
          autoClose: 750,
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6 border-b border-gray-900/10 pb-12"
    >
      {/* Full Name */}
      <div className="py-2">
        <label htmlFor="name">User Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Full name is required" })}
          className="w-full border rounded py-1 px-2 my-1"
          placeholder="John Doe"
        />
        <p className="text-red-600">{errors?.name?.message}</p>
      </div>

      {/* Email */}
      <div className="py-2">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          disabled
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
          className="w-full border rounded py-1 px-2 my-1 disabled:text-gray-500"
          placeholder="example@gmail.com"
        />
        <p className="text-red-600">{errors?.email?.message}</p>
      </div>

      {/* Phone */}
      <div className="py-2">
        <label htmlFor="phone">Contact Number</label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full border rounded py-1 px-2 my-1"
          placeholder="+977-9812345678"
        />
        <p className="text-red-600">{errors?.phone?.message}</p>
      </div>

      {/* City */}
      <div className="py-2">
        <label htmlFor="city">Address City</label>
        <input
          id="city"
          type="text"
          {...register("city")}
          className="w-full border rounded py-1 px-2 my-1"
          placeholder="Kathmandu"
        />
      </div>

      {/* Street */}
      <div className="py-2">
        <label htmlFor="street">Address Street</label>
        <input
          id="street"
          type="text"
          {...register("street")}
          className="w-full border rounded py-1 px-2 my-1"
          placeholder="Newroad"
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

      {/* Roles */}
      <div className="py-2">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          {...register("role")}
          className="w-full border rounded py-1 px-2 my-1"
        >
          <option value={ROLE_ADMIN}>{ROLE_ADMIN}</option>
          <option value={ROLE_AGENT}>{ROLE_AGENT}</option>
          <option value={ROLE_USER}>{ROLE_USER}</option>
        </select>
      </div>

      {/* Submit */}
      <div className="py-4">
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Updating..." : "Update User Profile"}
          className="w-full bg-pink-600 hover:opacity-80 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-70"
        />
      </div>
    </form>
  );
}

export default UserForm;

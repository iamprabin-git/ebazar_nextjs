"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX } from "@/constants/regex"; // Adjust path as needed
import { useEffect } from "react";
import Link from "next/link";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/auth/authActions";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const { user, error, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function onSubmit(data){
     dispatch(registerUser({
      address: {
        city: data.city,
        province: data.province,
      
      },
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
     }));

      }
      useEffect(() => {
        if (user) return router.push(HOME_ROUTE);
    
        if (error)
          toast.error(error, {
            autoClose: 750,
          });
      }, [user, error, loading]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-6 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            className="w-full border rounded py-1 px-2 my-1"
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
        {/* city */}
        <div className="py-2">
          <label htmlFor="city">Address city</label>
          <input
            type="text"
            id="city"
            {...register("city")}
            placeholder="Kathmandu, Nepal"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <p className="text-red-600">{errors?.city?.message}</p>
        </div>
        {/* Province */}
        <div className="max-w-sm mx-auto">
          <label
            htmlFor="province"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Province
          </label>
          <select
            id="province"
            {...register("province", { required: "province is required" })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a Province</option>
            <option value="KP">Koshi Province: Formerly Province No. 1</option>
            <option value="MP">
              Madhesh Province: Formerly Province No. 2
            </option>
            <option value="BP">
              Bagmati Province: Formerly Province No. 3
            </option>
            <option value="GP">
              Gandaki Province: Formerly Province No. 4
            </option>
            <option value="LP">
              Lumbini Province: Formerly Province No. 5
            </option>
            <option value="KA">
              Karnali Province: Formerly Province No. 6
            </option>
            <option value="SP">
              Sudurpashchim Province: Formerly Province No. 7
            </option>
          </select>
          <p className="text-red-600">{errors?.province?.message}</p>
        </div>

        {/* Password */}
        <div className="py-2 relative">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="********"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-11"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-600">{errors?.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div className="py-2 relative">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="********"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-11"
          >
            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-600">{errors?.confirmPassword?.message}</p>
        </div>
        {/* Submit */}
        <div className="py-2">
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Registering..." : "Register"}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-70"
          />
        </div>

        {/* Login Link */}
        <div className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href={LOGIN_ROUTE} className="text-blue-600 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;

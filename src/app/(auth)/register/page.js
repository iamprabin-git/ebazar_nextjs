"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX } from "@/constants/regex"; // Adjust path as needed
import { registerUser } from "@/api/auth";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constants/routes";


function RegisterPage() {
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await registerUser(data);
      toast.success("Registration successful!");
      router.push(LOGIN_ROUTE);
    } catch (error) {
      toast.error(error.response?.data || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-6">
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
            className="absolute right-2 top-9"
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
            className="absolute right-2 top-9"
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

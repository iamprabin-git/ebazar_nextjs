"use client";
import { forgotPassword, resetPassword } from "@/api/auth";
import Spinner from "@/components/products/Spinner";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  
  const params= useParams();
  const searchParams=useSearchParams();

  function submitForm(data) {
    setLoading(true);
    resetPassword(params.id, searchParams.get("token"), data)
      .then(()=> {toast.success("Password reset successfully!", { autoClose: 750 });
      reset();
    })
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }
  return (
    <section className="bg-white dark:bg-gray-700">
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Reset Password
      </h2>
      <form
        className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="py-2 relative">
                  <label htmlFor="password">New Password</label>
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

        
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Reset passwod
          {loading && <Spinner className="ml-2" />}
        </button>
      </form>
    </section>
  );
}

export default ResetPasswordPage;


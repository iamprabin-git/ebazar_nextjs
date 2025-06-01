"use client";
import { forgotPassword } from "@/api/auth";
import Spinner from "@/components/products/Spinner";
import { EMAIL_REGEX } from "@/constants/regex";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    setLoading(true);
    forgotPassword(data)
      .then(()=> toast.success("Password reset link sent successfully!", { autoClose: 750 }))
      .catch((error) => toast.error(error.response?.data, { autoClose: 750 }))
      .finally(() => setLoading(false));
  }
  return (
    <section className="bg-white dark:bg-gray-700">
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Forgot Password
      </h2>
      <form
        className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
        onSubmit={handleSubmit(submitForm)}
      >
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

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="newsletter"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="newsletter"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <Link
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="#"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Send Request
          {loading && <Spinner className="ml-2" />}
        </button>
      </form>
    </section>
  );
}

export default ForgotPasswordPage;

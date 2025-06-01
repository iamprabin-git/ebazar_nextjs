"use client";
import { set, useForm } from "react-hook-form";
import { login } from "@/api/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { EMAIL_REGEX } from "@/constants/regex";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";
import { HOME_ROUTE, REGISTER_ROUTE } from "@/constants/routes";

function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, error, loading } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(loginUser(data));
  }
  useEffect(() => {
    if (user) return router.push(HOME_ROUTE);

    if (error)
      toast.error(error, {
        autoClose: 750,
      });
  }, [user, error]);

  return (
   
    <section className="bg-white dark:bg-slate-800 p-5">
      <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form
        className="space-y-2 md:space-y-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border rounded py-1 px-2 my-1"
            placeholder="name@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
              },
            })}
          />
           <p className="text-red-600">{errors?.email?.message}</p>
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="*********"
            className="w-full border rounded py-1 px-2 my-1"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-12 right-2 transform -translate-y-1/2"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-600">{errors?.password?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </Link>
        </div>
        <div>
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Logging in..." : "Login"}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <Link
            href={REGISTER_ROUTE}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Loginpage;

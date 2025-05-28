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
import { HOME_ROUTE } from "@/constants/routes";

function Loginpage() {
  
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, error, loading } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch=useDispatch();

   function submitForm(data) {
    
      dispatch(loginUser(data));

   }
   useEffect(() => {
    if (user) return router.push(HOME_ROUTE);

    if(error)
      toast.error(error, {
        autoClose: 750,
      });
    },[user, error]);
    
    
  return (
    <div>
      <h1 className="text-2xl font-bold italic text-center">Login</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="py-2">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
              },
            })}
            className="w-full border rounded py-1 px-2 my-1"
          />
          <p className="text-red-600">{errors?.email?.message}</p>
        </div>
        <div className="py-2 relative">
          <label htmlFor="password">Password</label>
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
            className="absolute top-13 right-2 transform -translate-y-1/2"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-600">{errors?.password?.message}</p>
        </div>
        <div className="py-2">
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Logging in..." : "Login"}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </div>
        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="REGISTER_ROUTE"
              className="text-blue-600 hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;

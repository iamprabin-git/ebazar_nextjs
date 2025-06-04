import { LOGIN_ROUTE } from "@/constants/routes";
import { allowedAdminRoles } from "@/helpers/auth";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

function AuthUserPopup({ user, setShowPopup }) {
  const dispatch = useDispatch();
  const isAllowed = allowedAdminRoles(user?.roles);

  const router = useRouter();

  function logout() {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");

    router.push(LOGIN_ROUTE);
  }
  return (
    <div className="absolute top-10 right-0 bg-white shadow-lg p-4">
      <h4 className="whitespace-nowrap font-medium text-lg">
        Hi!, {user.name || "User"}
      </h4>

      {isAllowed && (
        <span className="my-1 flex ">
          <Link
            href="/dashboard"
            className="bg-slate-700 text-white items-center border rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-black"
            onClick={() => setShowPopup(false)}
          >
            Admin Panel
          </Link>
        </span>
      )}
      <span className="my-1 flex ">
        <Link
          href="/profile"
          className="bg-slate-700 text-white items-center border rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-black"
          onClick={() => setShowPopup(false)}
        >
          Profile Details
        </Link>
      </span>

      <button
        onClick={logout}
        className="flex gap-5 bg-slate-700 text-white items-center border rounded-lg px-3 py-1 hover:bg-slate-100 hover:text-black"
      >
        <span onClick={() => setShowPopup(false)}>Logout</span>
        <RiLogoutBoxRLine />
      </button>
    </div>
  );
}

export default AuthUserPopup;

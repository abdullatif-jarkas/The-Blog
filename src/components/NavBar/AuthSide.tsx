import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/slice/authSlice";

export default function AuthSide() {
  const [activeButton, setActiveButton] = useState("login");
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-between gap-3.5 items-center">
      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">{user?.name}</span>

          {user?.isAdmin && (
            <Link
              to="/admin/dashboard"
              className="mr-3.5 font-normal  dark:pb-5-5 text-lg  lg:text-xl leading-6"
            >
              Dashboard
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="mr-3.5 font-normal  dark:pb-5-5 text-lg  lg:text-xl leading-6"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <NavLink
            className={
              activeButton === "login"
                ? "text-white bg-violet-700 py-3.5 px-5 rounded-lg font-normal h-full transition-all text-sm desktop:text-lg duration-300"
                : "py-3.5 px-5 rounded-lg font-normal h-full text-sm desktop:text-lg"
            }
            to="/auth/login"
            onClick={() => setActiveButton("login")}
          >
            Login
          </NavLink>
          <NavLink
            className={
              activeButton === "signUp"
                ? "text-white bg-violet-700 py-3.5 px-5 rounded-lg font-normal h-full transition-all text-sm desktop:text-lg duration-300"
                : "py-3.5 px-5 rounded-lg font-normal h-full text-sm desktop:text-lg"
            }
            to="/auth/signUp"
            onClick={() => setActiveButton("signUp")}
          >
            Sign Up
          </NavLink>
        </>
      )}
    </div>
  );
}

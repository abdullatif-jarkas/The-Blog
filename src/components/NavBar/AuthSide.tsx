import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AuthSide() {
  const [activeButton, setActiveButton] = useState("login"); 
  return (
    <div className="flex justify-between gap-3.5 items-center">
      <NavLink
        className={
          activeButton === "login"
            ? "text-white bg-violet-700 py-3.5 px-5 rounded-lg font-normal bg-White/95 h-full transition-all text-sm desktop:text-lg desktop:leading-6.5 duration-300"
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
            ? "text-white bg-violet-700 py-3.5 px-5 rounded-lg font-normal bg-White/95 h-full transition-all text-sm desktop:text-lg desktop:leading-6.5 duration-300"
            : "py-3.5 px-5 rounded-lg font-normal h-full text-sm desktop:text-lg"
        }
        to="/auth/signUp"
        onClick={() => setActiveButton("signUp")}
      >
        Sign Up
      </NavLink>
    </div>
  );
}
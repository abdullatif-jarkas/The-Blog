import { DataPropsInput } from "../../types/types";
import passIcon from "../../assets/Icon (5).png";
import { useLocation } from "react-router-dom";

export default function Input({
  type,
  placeholder,
  name,
  onClickIcon,
  onChangeInput,
  value, // ✅ Added value prop
}: DataPropsInput) {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Password Field with Toggle Icon */}
      {(name === "password" || name === "confirmPassword") &&
      (location.pathname === "/auth/signUp" || location.pathname === "/auth/login") ? (
        <div className="flex justify-between gap-2 lg:w-9/12 w-full items-center">
          <div className="h-max relative w-full">
            <img
              src={passIcon}
              className="cursor-pointer absolute bottom-1/2 right-5"
              onClick={onClickIcon}
              alt="password icon"
            />
            <input
              type={type}
              placeholder={placeholder}
              required
              name={name}
              value={value} // ✅ Controlled Input
              onChange={onChangeInput} // ✅ Update formData
              className="w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border"
            />
          </div>
        </div>
      ) : (
        // Default Input
        <input
          type={type}
          placeholder={placeholder}
          required
          name={name}
          value={value} // ✅ Controlled Input
          onChange={onChangeInput} // ✅ Update formData
          className="lg:w-9/12 w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border"
        />
      )}
    </div>
  );
}

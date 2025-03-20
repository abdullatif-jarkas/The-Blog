import { BtnProps } from "../../types/types";
import { BarLoader } from "react-spinners";

export default function Button({
  text,
  Bg,
  type,
  textColor,
  onClick,
  isLoading,
  disabled,
  className,
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`py-3 px-5 outline-none border-0 rounded-lg transition-all font-medium md:px-5 p-2.5 sm:text-base text-sm 
        ${Bg} ${textColor} ${
        isLoading || disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading ? <BarLoader color="#ffffff" /> : text}
    </button>
  );
}

import { btn } from "../../types/types";

export default function Button({text , Bg ,type, textColor,onClick } : btn ) {
  return (
    <button type={type} onClick={onClick} className={`py-3  px-5 outline-none border-0 rounded-lg font-medium  md:px-5 p-2.5 sm:text-base text-sm ${Bg} ${textColor} `}>
      {text}
    </button>
  )
}

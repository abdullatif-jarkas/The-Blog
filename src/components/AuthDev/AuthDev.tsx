import { divProps } from "../../types/types";
import img from '../../assets/Main_layout.png'
export default function AuthDev({text} : divProps) {
  return (
    <div className=" relative w-1/2 flex items-center ">
      <h2 className="  w-3/4 z-10  font-extrabold text-7xl">{text}</h2>
      <img src={img} alt="" className="w-10/12 absolute bottom-0  right-8 mt-28" />
    </div>
  )
}

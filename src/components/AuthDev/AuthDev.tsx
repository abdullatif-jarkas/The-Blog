import { divProps } from "../../types/types";
import img from '../../assets/Main_layout.png'
export default function AuthDev({text} : divProps) {
  return (
    <div className="relative md:w-1/2 w-full overflow-hidden md:h-auto h-[400px]  flex items-center ">
      <h2 className=" lg:w-3/4 md:1/2 lg:ml-0 md:ml-10 w-full z-10  font-extrabold lg:text-7xl sm:text-6xl text-5xl">{text}</h2>
      <img src={img} alt="auth img" className="md:w-10/12 sm:w-1/2 w-2/3 absolute bottom-0  right-8 " />
    </div>
  )
}

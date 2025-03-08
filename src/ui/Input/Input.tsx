import { DataPropsInput } from "../../types/types";
import passIcon from '../../assets/Icon (5).png'
export default function Input( {type , placeholder , name ,onClickIcon,} :  DataPropsInput) {
  return (
    <div className=" w-full">
      {name == 'password' ? 
      (
        <div className=" h-max relative lg:w-9/12 w-full">
          <img src={passIcon} className=" cursor-pointer absolute bottom-1/2 right-5" onClick={onClickIcon}  alt="password icon" />
          <input type={type} placeholder={placeholder} required name={name} className="w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>
        </div> 
      ) : 
      (<input type={type} placeholder={placeholder} required name={name} className="lg:w-9/12 w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>)}
    </div>
  )
}

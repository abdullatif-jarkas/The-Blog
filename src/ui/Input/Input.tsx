import { DataPropsInput } from "../../types/types";
import passIcon from '../../assets/Icon (5).png'
import { useLocation } from "react-router-dom";
export default function Input( {type , placeholder , name ,onClickIcon, onChangeInput , value } :  DataPropsInput) {
    const location = useLocation();
  
  return (
    <div className=" w-full">
      {type === 'password'  && location.pathname === '/auth/signUp' ?
      (
        <div className="flex justify-between gap-2 lg:w-9/12 w-full items-center">
          {name === 'password' ? (          
          <div className=" h-max relative  w-full">
            <img src={passIcon} className=" cursor-pointer absolute bottom-1/2 right-5" onClick={onClickIcon}  alt="password icon" />
            <input 
            type={type}
            placeholder={placeholder} 
            required 
            name={name} 
            onChange={onChangeInput}
            {...(value !== undefined ? { value } : {})}
            className="w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>
          </div>  
          ) : ( 
          <div className=" h-max relative    w-full">
            <img src={passIcon} className=" cursor-pointer absolute bottom-1/2 right-5" onClick={onClickIcon}  alt="password icon" />
            <input type={type} placeholder={placeholder} required name={name} className="w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>
          </div> )} 
        </div>
      ) : type === 'password' && location.pathname === '/auth/login' ? 
      (        
      <div className="flex justify-between gap-2 lg:w-9/12 w-full items-center"> 
      <div className=" h-max relative  w-full">
        <img src={passIcon} className=" cursor-pointer absolute bottom-1/2 right-5" onClick={onClickIcon}  alt="password icon" />
        <input type={type} placeholder={placeholder} required name={name} className="w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>
      </div> 
      </div> ) : 
      (<input type={type} placeholder={placeholder} required name={name} className="lg:w-9/12 w-full py-3 px-4 outline-violet-700 rounded-md mb-6 border "/>)}
    </div>
  )
}

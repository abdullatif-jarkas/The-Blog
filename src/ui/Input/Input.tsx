import { DataPropsInput } from "../../types/types";

export default function Input( {type , placeholder , name} :  DataPropsInput) {
  return (
    <div className=" w-full">
      <input type={type} placeholder={placeholder} required name={name} className="w-9/12 py-3 px-4 rounded-md mb-6 border "/>
    </div>
  )
}

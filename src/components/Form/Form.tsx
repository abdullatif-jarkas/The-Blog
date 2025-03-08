import { Link, NavLink } from "react-router-dom";
import { DataPropsInput } from "../../types/types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Title from "../../ui/Title/Title";
import google from '../../assets/icon/google-icon.svg'
import GoogleBtn from "../../ui/Button/GoogleBtn";
export interface formDataHH {
    btn : string;
    navto: string;
    to: string;
    title: string;
    data: DataPropsInput[];
    googletext:string;
    formType: "login" | "signup"; 
  }
export default function Form({title ,  data , btn ,formType ,navto , to , googletext} : formDataHH) {
  return (
    <form className="w-full flex flex-col ">
      <Title title={title}/>
      {data.map((item, index) => (
      <Input 
          key={index}
          type={item.type}
          placeholder={item.placeholder}
          name={item.name}
        />
      ))}
      {formType === 'login' ?
        (<div className="flex justify-between items-center w-9/12 ">
          <Button text={btn} type="submit" textColor="w-2/6 bg-violet-700 text-white"/>   
           <NavLink to={''}>Forgot your password?</NavLink>
          </div>)
        :
        (
          <Button text={btn} type="submit" textColor="w-9/12 bg-violet-700 text-white"/> )
        }
        <div className=" mt-5  flex flex-col gap-4  w-9/12 ">
        <GoogleBtn text={googletext} src={google}/>
        <Link className="text-sm font-semibold text-gray-700 dark:text-gray-500" to={to}>{navto}</Link>
        </div>
    </form>
  )
}

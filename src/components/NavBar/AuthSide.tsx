import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";

export default function AuthSide() {
    const navigate = useNavigate();
   
  return (
    <div className=" flex justify-between gap-3.5 items-center ">
      <Button text="Login" textColor=" text-white  bg-violet-700 " onClick={ () => navigate('/auth/login')}/>
      <Button text="Sign Up" textColor=" text-black hover:text-white bg-transparent hover:bg-violet-700 " onClick={ () => navigate('/auth/signUp')}/>
    </div>
  )
}

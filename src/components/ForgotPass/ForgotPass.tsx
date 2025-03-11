import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PText from "../../ui/PText/PText";
import Title from "../../ui/Title/Title";
import ResetPasswordCode from "../ResetPasswordCode/ResetPasswordCode";
import { useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const [step , setStep] = useState(1);
  const navigate = useNavigate()
  const handelNext = () => 
  {
    setStep (step + 1 );
  }
  return (
    <div className="w-full flex flex-col mt-[88px]">
      {step === 1 ? 
      (
        <>
            <div className=" mb-5">
            <Title title="Reset your password" />
            <PText title="Type in your registered email address to reset password"/>
            </div>
            <Input name="email" type="email" placeholder="Email Address *" />
            <div className="lg:w-9/12 w-full mb-20">
              <Button text="Next" onClick={handelNext} type="submit" textColor="w-1/3 bg-violet-700 text-white"/>
            </div>
            <div className="lg:w-9/12 w-full ">
              <Button text="BACK to login" onClick={() => navigate('/auth/login')}  type="submit" textColor="w-full uppercase !border border-white bg-black text-white"/>
            </div>
        </>
      )
      : step === 2? 
      (        
      <>
        <div className=" mb-5">
        <Title title="Recovery Email Sent!" />
        <PText title="Please check your email for next steps to reset your password."/>
        </div>
        <div className="lg:w-9/12 w-full mb-32">
          <Button text="Next" onClick={handelNext} type="submit" textColor="w-1/3 bg-violet-700 text-white"/>
        </div>
        <div className="lg:w-9/12 w-full ">
          <Button text="BACK to login"  type="submit" onClick={() => navigate('/auth/login')} textColor="w-full uppercase !border border-white bg-black text-white"/>
        </div>
      </>
      ) :
      (
        <>
        <ResetPasswordCode/>
        <div className="lg:w-9/12 w-full ">
          <Button text="BACK to login"  type="submit" onClick={() => navigate('/auth/login')} textColor="w-full uppercase !border border-white bg-black text-white"/>
        </div>
    </>
      )
      }

    </div>
  )
}

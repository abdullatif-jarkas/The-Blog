import { useLocation } from "react-router-dom";
import AuthDev from "../../components/AuthDev/AuthDev";
import Form from "../../components/Form/Form";
import { LoginInputs, SignupInputs } from "../../data/form";
import ForgotPass from "../../components/ForgotPass/ForgotPass";

export default function Auth() {
  const location = useLocation();

  return (
    <section className="md:h-screen lg:px-28 lg:py-30 py-[88px] px-8 md:py-8  flex-col md:flex-row lg:justify-center gap-y-7  text-black dark:text-white  flex justify-between">
      <div className="md:w-1/2 w-full items-center flex">
      {location.pathname === '/auth/login'? 
      <Form title={'Login'} data={LoginInputs} formType="login" btn = 'Login' googletext='Login with Google' navto="Don’t have an account? Sign Up" to="/auth/signUp"/>
      : location.pathname === '/auth/signUp' ?
      <Form title={'Sign Up'} data={SignupInputs} formType="signup" btn="Sign Up" googletext="Sign Up with Google" navto="Already have an account? Login"  to="/auth/login"/> 
      : 
      <ForgotPass/>
      }
      </div>
      <AuthDev text="sharing your stories."/>
    </section>
  )
}

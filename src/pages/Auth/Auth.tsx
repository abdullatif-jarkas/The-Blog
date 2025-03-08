import { useLocation } from "react-router-dom";
import AuthDev from "../../components/AuthDev/AuthDev";
import Form from "../../components/Form/Form";
import { LoginInputs, SignupInputs } from "../../data/form";

export default function Auth() {
  const location = useLocation();

  return (
    <section className="h-screen lg:px-28 lg:py-30 py-5 px-8 md:py-8 md:px-8  flex-col md:flex-row lg:justify-center lg:gap-8 gap-4 text-black dark:text-white  flex justify-between">
      <div className="w-1/2  items-center flex">
      {location.pathname === '/auth/login'? 
      <Form title={'Login'} data={LoginInputs} formType="login" btn = 'Login' googletext='Login with Google' navto="Don’t have an account? Sign Up" to="/auth/signup"/>
      :  
      <Form title={'Sign Up'} data={SignupInputs} formType="signup" btn="Sign Up" googletext="Sign Up with Google" navto="Already have an account? Login"  to="/auth/login"/>}

       
      </div>
      <AuthDev text="sharing your stories."/>
    </section>
  )
}

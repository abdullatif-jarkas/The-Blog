import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { DataPropsInput } from "../../types/types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Title from "../../ui/Title/Title";
import GoogleBtn from "../../ui/Button/GoogleBtn";
import google from "../../assets/icon/google-icon.svg";

export interface formDataHH {
  btn: string;
  navto: string;
  to: string;
  title: string;
  fields: DataPropsInput[];
  googletext: string;
  formType: "login" | "signup";
}

export default function Form({ title, fields, btn, formType, navto, to, googletext }: formDataHH) {
  const { formRef, formData, isPasswordVisible, setIsPasswordVisible, handleInputChange, handleSubmit } = useAuth(formType);

  return (
    <form ref={formRef} className="w-full flex flex-col mt-[88px]" onSubmit={handleSubmit}>
      <Title title={title} />
      {fields.map((item, index) => (
        <Input
          key={index}
          type={(item.name === "password" || item.name === "confirmPassword") && !isPasswordVisible ? "password" : item.type}
          placeholder={item.placeholder}
          name={item.name}
          value={formData[item.name] || ""}
          onChangeInput={(e) => handleInputChange(item.name, e.target.value)}
          onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      ))}

      {formType === "login" ? (
        <div className="flex justify-between items-center lg:w-9/12 w-full">
          <Button text={btn} type="submit" textColor="w-2/6 bg-violet-700 text-white" />
          <NavLink className="text-sm font-semibold text-gray-700 dark:text-gray-500" to="/auth/forgot">
            Forgot your password?
          </NavLink>
        </div>
      ) : (
        <Button text={btn} type="submit" textColor="lg:w-9/12 w-full bg-violet-700 text-white" />
      )}

      <div className="mt-5 flex flex-col gap-4 lg:w-9/12 w-full">
        <GoogleBtn text={googletext} src={google} />
        <Link className="text-sm font-semibold text-gray-700 dark:text-gray-500" to={to}>
          {navto}
        </Link>
      </div>
    </form>
  );
}

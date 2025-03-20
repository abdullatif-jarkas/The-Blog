import { Link, NavLink } from "react-router-dom";
import { DataPropsInput } from "../../types/types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Title from "../../ui/Title/Title";
import GoogleBtn from "../../ui/Button/GoogleBtn";
import google from "../../assets/icon/google-icon.svg";
import { useForm } from "../../hooks/useForm";
import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import { useAuth } from "../../hooks/useAuth";
export interface formDataHH {
  btn: string;
  navto: string;
  to: string;
  title: string;
  fields: DataPropsInput[];
  googletext: string;
  formType: "login" | "signup";
}

export default function Form({
  title,
  fields,
  btn,
  formType,
  navto,
  to,
  googletext,
}: formDataHH) {
  const { formRef, formData, handleInputChange } = useForm(formType);
  const { isPasswordVisible, togglePasswordVisibility } =
    usePasswordVisibility();
  const { handleSubmit, isLoading, isError } = useAuth(formType, formData);

  return (
    <form
      ref={formRef}
      className="w-full flex flex-col mt-[88px]"
      onSubmit={handleSubmit}
    >
      <Title title={title} />

      {fields.map((item, index) => (
        <Input
          key={index}
          type={
            (item.name === "password" || item.name === "confirmPassword") &&
            !isPasswordVisible
              ? "password"
              : "text"
          }
          placeholder={item.placeholder}
          name={item.name}
          value={formData[item.name] || ""}
          onChangeInput={(e) => handleInputChange(item.name, e.target.value)}
          onClickIcon={togglePasswordVisibility}
        />
      ))}

      {/* عرض رسالة خطأ عند حدوث مشكلة */}
      {isError && (
        <p className="text-red-500 text-sm mb-3">
          Something went wrong! Please try again.
        </p>
      )}

      {formType === "login" ? (
        <div className="flex justify-between items-center lg:w-9/12 w-full">
          <Button
            text="Login"
            type="submit"
            Bg="bg-violet-700"
            textColor="text-white"
            isLoading={isLoading}
          />
          <NavLink
            className="text-sm font-semibold text-gray-700 dark:text-gray-500"
            to="/auth/forgot"
          >
            Forgot your password?
          </NavLink>
        </div>
      ) : (
        <Button
          text={isLoading ? "Creating account..." : btn}
          type="submit"
          textColor="lg:w-9/12 w-full bg-violet-700 text-white"
          disabled={isLoading} 
        />
      )}

      <div className="mt-5 flex flex-col gap-4 lg:w-9/12 w-full">
        <GoogleBtn text={googletext} src={google} />
        <Link
          className="text-sm font-semibold text-gray-700 dark:text-gray-500"
          to={to}
        >
          {navto}
        </Link>
      </div>
    </form>
  );
}

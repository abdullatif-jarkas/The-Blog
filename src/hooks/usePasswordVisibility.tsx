import { useState } from "react";

export const usePasswordVisibility = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return { isPasswordVisible, togglePasswordVisibility };
};

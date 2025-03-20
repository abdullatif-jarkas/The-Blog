import { useState, useRef, useEffect } from "react";

export const useForm = (formType: "login" | "signup") => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) formRef.current.reset();
    setFormData({});
  }, [formType]);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return { formRef, formData, handleInputChange };
};

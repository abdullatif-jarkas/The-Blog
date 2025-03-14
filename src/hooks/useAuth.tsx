import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser, registerUser } from "../api/auth";

export const useAuth = (formType: "login" | "signup") => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (formRef.current) formRef.current.reset();
    setFormData({});
  }, [formType]);

  const submitFormData = formType === "login" ? () => loginUser(formData) : () => registerUser(formData);

  const mutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: (data) => {
      if (formType === "login") {
        if (data.token) {
          localStorage.setItem("token", data.token);
          toast.success("Login successful!");
          navigate("/");
        }
      } else {
        toast.success("Account created successfully! Please login.");
        navigate("/auth/login");
      }
    },
    onError: () => toast.error("Something went wrong! Please try again."),
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return {
    formRef,
    formData,
    isPasswordVisible,
    setIsPasswordVisible,
    handleInputChange,
    handleSubmit,
  };
};

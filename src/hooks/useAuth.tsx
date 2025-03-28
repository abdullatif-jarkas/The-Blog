import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { loginUser, registerUser } from "../api/auth";
import { loginSuccess } from "../redux/slice/authSlice";

export const useAuth = (
  formType: "login" | "signup",
  formData: { [key: string]: string }
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveUserData = (data: any) => {
    const user = {
      name: data.username,
      email: data.email,
      isAdmin: data.isAdmin,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(loginSuccess(user));
  };

  const mutation = useMutation({
    mutationFn: () =>
      formType === "login" ? loginUser(formData) : registerUser(formData),
    onSuccess: (response) => {
      const data = response.data;

      if (formType === "login" && data.token) {
        saveUserData(data);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.success("Account created successfully! Please login.");
        navigate("/auth/login");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong! Please try again.";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    mutation.mutate();
  };

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
  };
};

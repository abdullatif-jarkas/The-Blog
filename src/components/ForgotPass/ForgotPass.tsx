import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PText from "../../ui/PText/PText";
import Title from "../../ui/Title/Title";
import ResetPasswordCode from "../ResetPasswordCode/ResetPasswordCode";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function ForgotPass() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendResetEmail = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/forgot-password", { email });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: sendResetEmail,
    onSuccess: () => {
      setStep(2); 
    },
    onError: (error) => {
      console.error("❌ Error:", error);
      alert("Something went wrong! Please try again.");
    },
  });

  const handleNext = () => {
    if (step === 1) {
      mutation.mutate(); 
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="w-full flex flex-col mt-[88px]">
      {step === 1 ? (
        <>
          <div className="mb-5">
            <Title title="Reset your password" />
            <PText title="Type in your registered email address to reset password" />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address *"
            value={email}
            onChangeInput={(e) => setEmail(e.target.value)}
          />
          <div className="lg:w-9/12 w-full mb-20">
            <Button
              text={mutation.isPending ? "Sending..." : "Next"}
              onClick={handleNext}
              type="submit"
              textColor="w-1/3 bg-violet-700 text-white"
              disabled={mutation.isPending}
            />
          </div>
          {mutation.isError && <p className="text-red-500">❌ Failed to send email</p>}
          <div className="lg:w-9/12 w-full">
            <Button
              text="BACK to login"
              onClick={() => navigate("/auth/login")}
              type="submit"
              textColor="w-full uppercase !border border-white bg-black text-white"
            />
          </div>
        </>
      ) : step === 2 ? (
        <>
          <div className="mb-5">
            <Title title="Recovery Email Sent!" />
            <PText title="Please check your email for next steps to reset your password." />
          </div>
          <div className="lg:w-9/12 w-full mb-32">
            <Button
              text="Next"
              onClick={handleNext}
              type="submit"
              textColor="w-1/3 bg-violet-700 text-white"
            />
          </div>
          <div className="lg:w-9/12 w-full">
            <Button
              text="BACK to login"
              type="submit"
              onClick={() => navigate("/auth/login")}
              textColor="w-full uppercase !border border-white bg-black text-white"
            />
          </div>
        </>
      ) : (
        <>
          <ResetPasswordCode />
          <div className="lg:w-9/12 w-full">
            <Button
              text="BACK to login"
              type="submit"
              onClick={() => navigate("/auth/login")}
              textColor="w-full uppercase !border border-white bg-black text-white"
            />
          </div>
        </>
      )}
    </div>
  );
}

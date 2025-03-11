import  { useState } from "react";
import PText from "../../ui/PText/PText";
import Title from "../../ui/Title/Title";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import VerificationInput from "react-verification-input"; 

export default function ResetPasswordCode() {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault();
        if (code.length !== 6) {
            alert("enter 6 degit");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("password don't match");
            return;
        }
    };

    return (
        <div className=" ">
            <div className="mb-6">
                <Title title="Reset your password" />
                <PText title="Enter verification code and your new password" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <VerificationInput
                        length={6}  
                        onChange={(value) => setCode(value)} 
                        placeholder="" 
                        classNames={{
                            container: "flex  gap-4 mb-6 justify-between items-center  lg:w-9/12 w-full", 
                            character: "outline-violet-700 rounded-md border text-violet-700  !bg-transparent  w-1/6  h-[50px]  border-violet-700 focus:outline-none ",   
                        }}
                    />
                </div>
                <Input
                    name="newPassword"
                    type="password"
                    placeholder="New password *"
                    value={newPassword}
                    onChangeInput={(e) => setNewPassword(e.target.value)}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Retry new password *"
                    value={confirmPassword}
                    onChangeInput={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="w-9/12  mb-10">
                    <Button text="Reset" type="submit" textColor="w-1/3 bg-violet-700 text-white" />
                </div>
            </form>
        </div>
    );
}
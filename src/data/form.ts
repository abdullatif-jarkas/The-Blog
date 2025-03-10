import { DataPropsInput } from "../types/types";
import passIcon from '../assets/Icon (5).png'

export const LoginInputs: DataPropsInput[] = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email Address *',
    },
    {
        type: 'password',
        name: 'password',
        icon: passIcon,
        placeholder: 'Password *',
    },
]
export const SignupInputs: DataPropsInput[] = [
    {
        type: 'text',
        name: 'username',
        placeholder: 'username *',
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email Address *',
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password *',
        icon: passIcon,
    },
    {
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'confirm Password*',
        icon: passIcon,
    },
]

export const forgotEmail: DataPropsInput[] = 
[
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email Address *',
    }
]
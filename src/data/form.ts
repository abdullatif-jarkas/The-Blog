import { DataPropsInput } from "../types/types";
import passIcon from '../assets/Icon (5).png'

export const LoginInputs: DataPropsInput[] = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email Address *',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        type: 'password',
        name: 'password',
        icon: passIcon,
        placeholder: 'Password *',
        className : 'desktop:h-auto flex flex-col mb-2.5 ',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5 mt-0 flex justify-between',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm',
        classIcon: ' md:w-6 md:h-6 w-5 h-5'
    },
]
export const SignupInputs: DataPropsInput[] = [
    {
        type: 'text',
        name: 'username',
        placeholder: 'username *',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'Email Address *',
        className : 'desktop:h-auto flex flex-col  desktop:mb-6 mb-5',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm placeholder:leading-6',
    },
    {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Password *',
        icon: passIcon,
        className : 'desktop:h-auto flex flex-col mb-2.5 ',
        classParent : 'desktop:p-6 desktop:h-[75px] md:h-[64px] h-[61px] mt-2.5 mt-0 flex justify-between',
        classInput: 'desktop:placeholder:text-lg md:placeholder:text-base placeholder:text-sm',
        classIcon: ' md:w-6 md:h-6 w-5 h-5'
    },
]
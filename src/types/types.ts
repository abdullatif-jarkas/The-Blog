export interface BtnProps {
    text: string; 
    Bg?: string;
    textColor?: string;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean; 
    type?: "button" | "reset" | "submit";
    className?: string; 
  }
  
export interface divProps
{
    text: string;
}
export interface DataPropsInput {
    label?: string;
    placeholder: string;
    type: string;
    name: string;
    className?: string;
    classLabel?: string;
    classInput?: string;
    icon?: string;
    classIcon?: string;
    classParent?: string;
    onClickInput?:  (event: React.MouseEvent<HTMLInputElement>) => void;
    onClickIcon?:  (event: React.MouseEvent<HTMLImageElement>) => void;
    onClickTextarea?:  (event: React.MouseEvent<HTMLTextAreaElement>) => void;
    onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
}  
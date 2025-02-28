export interface btn 
{
    text?: string;
    Bg?: string;
    textColor?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "reset" | "submit" | undefined
}

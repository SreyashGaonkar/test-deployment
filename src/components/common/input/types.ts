import { InputHTMLAttributes, ReactNode } from "react";

export interface inputPropsType extends React.HTMLProps<HTMLInputElement> {
    phone?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
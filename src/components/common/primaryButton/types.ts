import { ReactNode } from "react";

export enum ButtonType {
    PRIMARY,
    BORDER,
    DARK
}
export interface ButtonPropsType extends React.HTMLProps<HTMLButtonElement> {
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    text?: string;
    onPress: () => void;
    border?: boolean;
    buttonType?: ButtonType;
    type?: "button" | "submit" | "reset" | undefined
}


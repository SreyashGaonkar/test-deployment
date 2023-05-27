import { ReactNode } from "react";

export interface HeaderPropType {
    imageUrl?: string;
    title?: string;
    back: () => void;
    rightIcon?: ReactNode;
}
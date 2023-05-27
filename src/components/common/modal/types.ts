import { ReactNode } from "react";

export interface ModalPropsType {
    show: boolean;
    children: ReactNode;
    onClose: () => void;
}
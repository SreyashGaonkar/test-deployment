import { UserType } from "@/types/userType";

export interface OtpPageProps {
    phone: string;
    newUser: boolean;
    next: (token: string, id: string,) => void;
    back: () => void;
}
import { SportInterestType } from "@/routes/game/type";
import { ReactNode } from "react";
export interface PlayerItemProps {
    id: string;
    title: string;
    subTitle: string;
    imageUrl: string;
    sportName?: string;
    extra?: boolean;
    skill_rating?: {
        football: number;
        basketball: number;
        cricket: number;
        badminton: number;
    };
    sportInterest?: SportInterestType[];
    showFollow?: boolean;
    onFollow?: () => void;
}
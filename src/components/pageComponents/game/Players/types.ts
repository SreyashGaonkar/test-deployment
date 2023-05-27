import { PlayerType } from "@/routes/game/type";
export interface PlayerPropsType {
    users: PlayerType[];
    host: PlayerType[];
    sportName?: string;
    onFollow?: () => void;
    showFollow?: boolean;
}
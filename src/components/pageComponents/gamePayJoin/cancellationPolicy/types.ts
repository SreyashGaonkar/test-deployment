import { GameType } from "@/routes/game/type";

export interface CancellationPolicyType {
    game: GameType;
    safe_to_leave: number;
}
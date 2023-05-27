

import AxiosInstance, { getAxiosConfig } from "@/instance/instance";
import { GameType } from "@/routes/game/type";

export interface fetchGameResponse {
    data: {
        status: string;
        message: string;
        data: GameType[];
    }
}

export const upcomingGames = async (): Promise<GameType[]> => {
    try {
        console.log('getAxiosConfig(true)', getAxiosConfig(true))
        const response: fetchGameResponse = await AxiosInstance.post(
            `v2/game/upcoming_games`,
            {},
            getAxiosConfig(true),
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

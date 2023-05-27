

import AxiosInstance from "@/instance/instance";
import { GameType } from "@/routes/game/type";
import { UserType } from "@/types/userType";

export interface gameStatusResponse {
    data: {
        status: string;
        message: string;
        data: GameType;
    }
}


// export interface error {
//     status: string; // "failure",
//     errors: {
//         otp: string; // "incorrect otp"
//     }
// }


export const gameStatus = async (
    token: string,
    id: string
): Promise<GameType> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const response: gameStatusResponse = await AxiosInstance.get(
            `v2/game/${id}`,
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

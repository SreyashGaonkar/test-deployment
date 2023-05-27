

import AxiosInstance from "@/instance/instance";
import { GameType } from "@/routes/game/type";
import { UserType } from "@/types/userType";

export interface fetchGameResponse {
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


export const fetchGame = async (
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
        const response: fetchGameResponse = await AxiosInstance.post(
            `v2/game/fetch_game/${id}`,
            {},
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

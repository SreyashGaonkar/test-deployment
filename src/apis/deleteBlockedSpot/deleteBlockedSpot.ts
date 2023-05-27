import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";
import { SendOtpResponse } from "../sendOtp";
import { VerifyOtpResponse } from "../verifyOtpNewUser/verifyOtpNewUser";
import { GameType } from "@/routes/game/type";

export interface deleteBlockedSpotBody {
    game: string;
    _id: string;
}

export interface deleteBlockedSpotResponse {
    data: {
        status: string;
        message: string;
        data: GameType;
    }
}



export const deleteBlockedSpot = async (
    token: string,
    props: deleteBlockedSpotBody,
): Promise<any> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(props);
        const response: deleteBlockedSpotResponse = await AxiosInstance.post(
            'v2/game/cancel_block_spot_for_the_game',
            data,
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";
import { SendOtpResponse } from "../sendOtp";
import { VerifyOtpResponse } from "../verifyOtpNewUser/verifyOtpNewUser";
import { GameType } from "@/routes/game/type";

export interface updateGameBody {
    game: string;
    user_id: string;
    booking_id: string;
    payment_status: string;
    service_fee: number;
    refund_status: boolean,
    order_id: string,
    amount: number;
    coins: number;
    order_amount: number;
}

export interface GamePaymentType {
    game: string;
    booking_id: string;
    coins: number;
    service_fee: number;
    payment_status: string;
    refund_status: boolean;
    order_id: string;
    amount: number;
    order_amount: number;
    left_the_game: boolean;
    _id: string;
    __v: number;
    created_at: Date,
    modified_at: Date,
}
export interface updateGameResponse {
    data: {
        status: string;
        message: string;
        data: {
            game_data: GameType;
            game_payment: GamePaymentType;
        };
    }
}


export const updateGame = async (
    token: string,
    props: updateGameBody,
): Promise<updateGameResponse> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(props);
        const response: updateGameResponse = await AxiosInstance.post(
            'v2/game/block_spot_for_game',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

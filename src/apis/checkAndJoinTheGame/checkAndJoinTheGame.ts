import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";
import { SendOtpResponse } from "../sendOtp";
import { VerifyOtpResponse } from "../verifyOtpNewUser/verifyOtpNewUser";

export interface checkAndJoinTheGameBody {
    game: string;
    user_id: string;
    booking_id: string;
    payment_status: string;
    payment_id: string;
    razorpay_amount: number;
    _id: string;
}



export const checkAndJoinTheGame = async (
    token: string,
    props: checkAndJoinTheGameBody,
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
        const response: any = await AxiosInstance.post(
            'v2/game/book_pay_to_join_spot',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};



import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";

export interface refundTheMoneyBody {
    payment_id: string;
}
export interface PayToJoinDetailsResponse {
    data: {
        status: string;
        message: string;
        data: any;
    }
}


export interface error {
    status: string; // "failure",
    errors: {
        otp: string; // "incorrect otp"
    }
}


export const refundTheMoney = async (
    token: string,
    body: refundTheMoneyBody,
): Promise<any> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: any = await AxiosInstance.post(
            'v2/bookings/refund_the_money',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

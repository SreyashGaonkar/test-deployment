

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";


export interface createRazorpayOrderBody {
    amount: number;
    currency: string; // 'INR
    notes: {
        game_id: string;
        booking_id: string;
        type: string; //'pay_to_join_game'
        user_id: string;
    },
}
export interface createRazorpayOrderResponse {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: null,
    offer_id: null,
    status: string;
    attempts: 0,
    notes: {
        game_id: string;
        booking_id: string;
        type: string;
    },
    created_at: any
}


// export interface error {
//     status: string; // "failure",
//     errors: {
//         otp: string; // "incorrect otp"
//     }
// }


export const createRazorpayOrder = async (
    token: string,
    body: createRazorpayOrderBody,
): Promise<createRazorpayOrderResponse> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const response: any = await AxiosInstance.post(
            'v2/user/create_payment_order',
            body,
            axiosConfig,
        );
        return response?.data?.data as createRazorpayOrderResponse;
    } catch (error) {
        throw error;
    }
};

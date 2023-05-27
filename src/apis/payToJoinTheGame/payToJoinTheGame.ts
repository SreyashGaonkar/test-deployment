import AxiosInstance from "@/instance/instance";


export interface payToJoinTheGameBody {
    game: string;
    user_id: string;
    booking_id: string;
    payment_status: string;
    payment_id: string;
    razorpay_amount: number;
    _id?: string;
    service_fee?: number,
    refund_status?: boolean,
    order_id?: string,
    amount?: number,
    coins?: number,
    order_amount?: number,
}



export const payToJoinTheGame = async (
    token: string,
    props: payToJoinTheGameBody,
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

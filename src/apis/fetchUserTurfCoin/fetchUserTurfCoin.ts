

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";


export interface FetchUserTurfCoinResponse {
    data: {
        status: string;
        message: string;
        data: number;
    }
}


export const fetchUserTurfCoin = async (
    token: string,
): Promise<number> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const response: FetchUserTurfCoinResponse = await AxiosInstance.post(
            'v2/user/fetch_turf_coins_for_user',
            {},
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

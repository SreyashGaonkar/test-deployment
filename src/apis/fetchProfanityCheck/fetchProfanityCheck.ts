

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";


export interface fetchProfanityCheckResponse {
    data: {
        status: string;
        message: string;
        data: string[];
    }
}

export const fetchProfanityCheck = async (
    token: string,
): Promise<string[]> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify({});
        const response: fetchProfanityCheckResponse = await AxiosInstance.post(
            'v2/user/fetch_profanity',
            data,
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

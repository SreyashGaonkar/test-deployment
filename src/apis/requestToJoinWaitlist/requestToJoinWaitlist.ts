

import AxiosInstance from "@/instance/instance";

export interface requestToJoinWaitlistResponse {
    data: {
        status: string;
        message: string;
        data: any;
    }
}

export const requestToJoinWaitlist = async (
    token: string,
    gameId: string,
): Promise<requestToJoinWaitlistResponse> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };

        const response: requestToJoinWaitlistResponse = await AxiosInstance.post(
            `v2/game/join/waitlist/${gameId}`,
            {},
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};



import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";

export interface CheckUserNameBody {
    handle: string;
    id: string;
}
export interface CheckUserNameResponse {
    data: {
        status: string;
        message: string;
        data: string[];
    }
}


export interface error {
    status: string; // "failure",
    errors: {
        otp: string; // "incorrect otp"
    }
}


export const CheckUserName = async (
    token: string,
    body: CheckUserNameBody,
): Promise<CheckUserNameResponse> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: CheckUserNameResponse = await AxiosInstance.post(
            'v2/user/check_user_name',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

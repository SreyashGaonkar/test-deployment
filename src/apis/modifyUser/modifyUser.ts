import AxiosInstance, { UnAuthorizedError, } from "@/instance/instance";
import { UserType } from "@/types/userType";
import { SendOtpResponse } from "../sendOtp";

export interface ModifyUserBody {
    name?: string;
    name_status?: boolean;
    handle?: string;
}

export interface ModifyUserResponse {
    data: {
        status: string;
        message: string;
        data: UserType;
    }
}

export const ModifyUser = async (
    token: string,
    id: string,
    body: ModifyUserBody,
): Promise<UserType> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: ModifyUserResponse = await AxiosInstance.post(
            'v2/user/modify_user/' + id,
            data,
            axiosConfig,
        );
        console.log('ModifyUser res', response)
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

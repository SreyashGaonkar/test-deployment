

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { AppConfigType } from "@/types/appConfigType";

export interface FetchpAppConfigBody {
    venue_id: string;
}
export interface FetchpAppConfigResponse {
    data: {
        status: string;
        message: string;
        data: AppConfigType;
    }
}


export const fetchpAppConfig = async (
    token: string,
    body: FetchpAppConfigBody,
): Promise<AppConfigType> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: FetchpAppConfigResponse = await AxiosInstance.post(
            'v2/user/app_config',
            data,
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

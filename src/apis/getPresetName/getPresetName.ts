

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";

export interface getPresetNameBody {
    firstName: string;
}
export interface getPresetNameResponse {
    data: {
        status: string;
        message: string;
        data: {
            handle: string
        };
    }
}

export const getPresetName = async (
    token: string,
    body: getPresetNameBody,
): Promise<string> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: getPresetNameResponse = await AxiosInstance.post(
            'v2/user/get_unique_handle',
            data,
            axiosConfig,
        );
        return response?.data?.data?.handle;
    } catch (error) {
        throw error;
    }
};

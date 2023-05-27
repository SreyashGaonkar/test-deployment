

import AxiosInstance from "@/instance/instance";
import { UserType } from "@/types/userType";

export interface getUserResponse {
    data: {
        status: string;
        message: string;
        data: UserType;
    }
}


// export interface error {
//     status: string; // "failure",
//     errors: {
//         otp: string; // "incorrect otp"
//     }
// }


export const getUser = async (
    token: string,
): Promise<UserType> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const response: getUserResponse = await AxiosInstance.post(
            'user/get_user1',
            {},
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

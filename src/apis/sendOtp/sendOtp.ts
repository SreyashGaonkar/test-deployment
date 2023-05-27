import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";

export interface SendOtpBody {
    phone: string;
}

export interface SendOtpResponse {
    data: {
        status: string;
        message?: string;
        data: UserType;
    }

}

export const SendOtp = async (
    body: SendOtpBody,
): Promise<SendOtpResponse> => {
    try {
        const data = JSON.stringify(body);
        const response: SendOtpResponse = await AxiosInstance.post(
            'v2/user/send_otp',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

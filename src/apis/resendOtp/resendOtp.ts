import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";

export interface ReSendOtpBody {
    phone: string;
}

export interface ReSendOtpResponse {
    status: string;
    message?: string;
    data: UserType;
}

export const resendOtp = async (
    props: ReSendOtpBody,
): Promise<ReSendOtpResponse> => {
    try {
        const data = JSON.stringify(props);
        const response: ReSendOtpResponse = await AxiosInstance.post(
            'v2/user/send_otp',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

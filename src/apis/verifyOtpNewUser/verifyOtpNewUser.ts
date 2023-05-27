import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { SendOtpResponse } from "../sendOtp";
import { VerifyOtpBody } from "../verifyOtp/verifyOtp";
import { UserType } from "@/types/userType";

export interface VerifyOtpResponse {
    status: string;
    message?: string;
    data: { data: UserType; }
}

export interface error {
    status: string; // "failure",
    errors: {
        otp: string; // "incorrect otp"
    }
}


export const VerifyOtpNewUser = async (
    props: VerifyOtpBody,
): Promise<VerifyOtpResponse> => {
    try {
        const data = JSON.stringify(props);
        const response: VerifyOtpResponse = await AxiosInstance.post(
            '/user/verify_otp1',
            data,
            axiosConfig,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

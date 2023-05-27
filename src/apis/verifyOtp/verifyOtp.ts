import AxiosInstance, { ErrorResponse, UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";
import { SendOtpResponse } from "../sendOtp";
import { VerifyOtpResponse } from "../verifyOtpNewUser/verifyOtpNewUser";

export interface VerifyOtpBody {
    phone: string;
    otp: string;
}



export const VerifyOtp = async (
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
        throw error as unknown as ErrorResponse;
    }
};

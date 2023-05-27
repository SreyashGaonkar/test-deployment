import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";
import { UserType } from "@/types/userType";

export interface UploadProfilePictureBody {
    uri: string;
    type: string;
    name: string;
}

export interface SendOtpResponse {
    status: string;
    message?: string;
    data: UserType;
}

export const UploadProfilePicture = async (
    token: string,
    props: any,
): Promise<SendOtpResponse> => {
    try {
        let axiosConfigForImage = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-access-token': token,
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };
        const response: SendOtpResponse = await AxiosInstance.post(
            '/user/upload_web_image',
            props,
            axiosConfigForImage,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

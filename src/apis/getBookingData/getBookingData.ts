

import AxiosInstance, { UnAuthorizedError, axiosConfig } from "@/instance/instance";

export interface GetBookingDataBody {
    booking_id: string;
}
export interface GetBookingDataResponse {
    data: {
        status: string;
        message: string;
        data: any;
    }
}

export const getBookingData = async (
    token: string,
    body: GetBookingDataBody,
): Promise<any> => {
    try {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
            },
        };
        const data = JSON.stringify(body);
        const response: GetBookingDataResponse = await AxiosInstance.post(
            'v2/bookings/get_booking_details',
            data,
            axiosConfig,
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

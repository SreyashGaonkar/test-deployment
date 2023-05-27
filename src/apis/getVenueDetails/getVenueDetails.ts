

import AxiosInstance, { UnAuthorizedError, axiosConfig, getAxiosConfig } from "@/instance/instance";


export interface GetVenueDetailsResponse {
    data: {
        status: string;
        message: string;
        data: any[];
    }
}


export const getVenueDetails = async (
    venueId: string,
): Promise<any[]> => {
    try {
        const response: GetVenueDetailsResponse = await AxiosInstance.post(
            `v2/venue/get_venue_details/${venueId}`,
            {},
            getAxiosConfig(true),
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

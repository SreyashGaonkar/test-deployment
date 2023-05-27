

import AxiosInstance, { UnAuthorizedError, axiosConfig, getAxiosConfig } from "@/instance/instance";


export interface GetVenueGamesResponse {
    data: {
        status: string;
        message: string;
        data: any[];
    }
}


export const getVenueGames = async (
    venueId: string,
): Promise<any[]> => {
    try {
        const response: GetVenueGamesResponse = await AxiosInstance.get(
            `v3/venue/games/${venueId}`,
            getAxiosConfig(true),
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

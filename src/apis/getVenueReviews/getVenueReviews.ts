

import { ReviewType } from "@/components/pageComponents/authenticatedVenue/reviews/type";
import AxiosInstance, { getAxiosConfig } from "@/instance/instance";


export interface GetVenueReviewsResponse {
    data: {
        status: string;
        message: string;
        data: ReviewType[];
    }
}


export const getVenueReviews = async (
    venueId: string,
): Promise<ReviewType[]> => {
    try {
        const response: GetVenueReviewsResponse = await AxiosInstance.post(
            `v2/venue/get_venue_reviews/${venueId}`,
            { limit: 120, skip: 0 },
            getAxiosConfig(true),
        );
        return response?.data?.data;
    } catch (error) {
        throw error;
    }
};

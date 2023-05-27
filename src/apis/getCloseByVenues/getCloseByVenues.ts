

import AxiosInstance, { getAxiosConfig } from "@/instance/instance";
import { VenueType } from "@/routes/game/type";
import { RatingReviews } from "@/routes/venue/types";

export interface GetCloseByVenueBody {
    user_id: string;
    sport: string;
}

export interface CloseByVenueData {
    allow_to_review: boolean;
    close_by_venue: CloseByVenueType[];
    edit_review: boolean;
};

export interface CloseByVenueType {
    _id: string;
    type: string;
    venue: VenueType;
    ratings_and_reviews: RatingReviews;
    configuration: {
        avg_price: String
    }
}

export interface GetCloseByVenueResponse {
    data: {
        status: string;
        message: string;
        data: CloseByVenueData;
    }
}


export const getCloseByVenues = async (
    venueId: string,
    body: GetCloseByVenueBody
): Promise<CloseByVenueType[]> => {
    try {

        const response: GetCloseByVenueResponse = await AxiosInstance.post(
            'v2/venue/near_by_venues/' + venueId,
            body,
            getAxiosConfig(true),
        );
        return response?.data?.data?.close_by_venue;
    } catch (error) {
        throw error;
    }
};

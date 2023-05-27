import { RatingReviews } from "@/routes/venue/types";

export interface VenueInfoCardPropType {
    imageUrl: string;
    name: string;
    area: string;
    type: string;
    address: string;
    ratingData: RatingReviews;
}
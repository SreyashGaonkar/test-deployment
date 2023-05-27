import { RatingEntity } from "@/routes/venue/types";

export interface ReviewPropType {
    // rating: RatingEntity[];
    id: string;
}

export interface ReviewType {
    created_at: Date;
    modified_at: Date;
    rating: number;
    review: string;
    status: boolean;
    user_id: ShortUserType;
    venue_id: string;
    __v: number;
}

export interface ShortUserType {
    handle: string;
    name: string;
    profile_picture: string;
    _id: string;
};
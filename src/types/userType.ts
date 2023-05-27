import { SportInterestType } from "@/routes/game/type";

export interface UserType {
    _id: string;
    created_at: Date | undefined;
    modified_at: Date | undefined;
    suggestion_reject: [];
    location_status: boolean;
    sync_contacts: boolean;
    email_status: boolean;
    name_status: boolean;
    gender_status: boolean;
    bio_status: boolean;
    referal_status: boolean;
    bio: [];
    visibility: string;
    role: string;
    past_convos: [];
    followers: string[];
    following: string[];
    requests: [];
    sent_requests: [];
    mute: [];
    device_id: deviceIdType[],
    sports_interest: SportInterestType[],
    activity_log: [],
    update_status: boolean;
    status: boolean;
    ignored_suggestions: [],
    coins: number;
    refer_id: string;
    phone: string;
    handle?: string;
    otp: number;
    temporary: boolean;
    conversation: [],
    clubs: [],
    __v: 2,
    email: string;
    history: historyType;
    name: string;
    password: string;
    token?: string;
    online_status: string;
    device_token: string;
    os: string;
    version: string;
    location: locationType,
    last_active: Date | undefined;
    last_login: Date | undefined;
    profile_picture: string;
    fav_sports: string[];
    sport_status: boolean;
    signup_status: boolean;
    device_tokens: deviceTokenType[],
    channel: [],
    fav_venues: [],
    games_month: number;
    hosted_game: number;
    played_with: number;
    reward_claimed: number;
    total_games: number;
}
export interface deviceIdType {
    device_id: string;
    device_token: string;
    created_date: Date | undefined;
}

export interface deviceTokenType {
    token: string;
    last_validated: Date | undefined;
    _id: string;
}

export interface historyType {

    football: {
        game: number;
        mvp: number;
    },
    basketball: {
        game: number;
        mvp: number;
    },
    cricket: {
        game: number;
        mvp: number;
    },
    badminton: {
        game: number;
        mvp: number;
    }

}

export interface locationType {
    lng: string;
    village: string;
    subSubLocality: string;
    district: string;
    city: string;
    pincode: string;
    area: string;
    lat: string;
    state: string;
    street: string;
    poi_dist: string;
    houseNumber: string;
    street_dist: string;
    subLocality: string;
    poi: string;
    formatted_address: string;
    houseName: string;
    locality: string;
    subDistrict: string;
}
export interface GameType {
    _id: string;
    created_by: string;
    created_type: string;
    created_at: Date,
    type: string;
    status: true,
    description: string;
    name: string;
    booking_date: Date,
    start_time: Date,
    end_time: Date,
    booking_status: string;
    image: string;
    limit: number,
    sport_name: string;
    venue: {
        _id: string;
        cancellation_time: number,
        venue: VenueType;
    },
    skipped: any[];
    completed: boolean;
    mvp: any[];
    voting: string;
    users: PlayerType[];
    host: PlayerType[];
    payment_flag: boolean;
    cost_per_head: number;
    host_refund: boolean;
    player_payment: boolean;
    paid_users: any[];
    iniated_time: Date;
    pay_to_join: boolean;
    booking_id: string;
    private_game: boolean;
    rewards_claimed: any[];
    feed: boolean;
    channel: string;
    spots_blocked: number;
    safe_to_leave: boolean;
    is_deleted: boolean;
    offline_players: number;
    venue_type: string;
    courts: number;
    service_fee: number;
    accepted_users: any[];
    waitlist: any[];
    removed_players: any[];
    players_left: string[];
    bookings: any[];
    mvp_votes: any[];
    users_payments: any[];
    split_up_users: any[];
    createdAt: Date;
    modified_at: Date;
    __v: number;
    offline_users: any[];
}

export interface VenueType {
    name: string;
    venue_display_picture: string;
    venue_cover_picture: string[];
    area: string;
    address: string;
    pincode: string;
    latLong: string[];
    full_payment_limit: string;
    full_payment: boolean;
    half_hour: boolean;
    number_of_courts: boolean;
    email: string;
    contact: string;
}

export interface PlayerType {
    _id: string;
    followers: string[];
    sports_interest: SportInterestType[],
    handle: string;
    name: string;
    profile_picture: string;
    skill_rating?: {
        football: number;
        basketball: number;
        cricket: number;
        badminton: number;
    }
}

export interface SportInterestType {
    sport: string;
    position: string;
}
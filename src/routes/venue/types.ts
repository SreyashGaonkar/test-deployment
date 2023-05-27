
export interface VenueData {
  venue: {
    name: string;
    address: string;
    area: string;
    venue_display_picture: string;
    contact: string;
    email: string;
    full_payment: boolean;
    full_payment_limit: string;
    half_hour: boolean;
    latLong: string[];
    number_of_courts: boolean;
    pincode: string;
    venue_cover_picture: string[];
  },
  ratings_and_reviews: RatingReviews;
  type: string;
  _id: string;
  features: Features;
  rating: RatingEntity[];
  configuration: Configuration;
  game_type: Game_Type;
}

export interface RatingReviews {
  rating: number;
  reviews: number;
  total_ratings: number;
}

export interface Features {
  parking: boolean;
  toilet: boolean;
  water: boolean;
  dressing_rooms: boolean;
  showers: boolean;
  phonepe: boolean;
  benches: boolean;
  lockers: boolean;
  paytm: boolean;
  card: boolean;
  googlePay: boolean;
  bibs: boolean;
  raquets: boolean;
}

export interface RatingEntity {
  user_id: string;
  name: string;
  time_stamp: string;
  user_profile_picture?: string | null;
  rating: Rating;
  date: string;
  sport_name: string;
}
export interface Rating {
  rating: number;
  review: string;
  name: string;
  time_stamp?: string | null;
  press?: boolean | null;
  profile_picture?: string | null;
  sport_name: string;
}

export interface Configuration {
  id: number;
  '5s': number;
  pricing?: PricingEntity[] | null;
  ratio: RatioOrSides;
  base_type: string;
  types?: string[] | null;
  sides: RatioOrSides;
  convertable: boolean;
  avg_price: string;
}

export interface PricingEntity {
  day: string;
  rate?: RateEntity[] | null;
  toggle: boolean;
  isFixed: boolean;
}


export interface RateEntity {
  pricing?: (number)[] | null;
  time: string;
  days: string;
  id: number;
  types?: (string)[] | null;
}

// export interface RatioOrSides {
//   // [key: string]
//   ['5s':string]? : number;
//   ground?: number;
//   net?: number;
// }

export type RatioOrSides = {
  [key: string]: number;
};

export type Game_Type = {
  surface: string;
  outs: string;
  '11s': boolean;
  '9s': boolean;
  '7s': boolean;
  '5s': string;
}

// export interface Weather {
//     status: string;
//     data: VenueData;
//   }
//   export interface VenueData {
//     _id: string;
//     created_at: string;
//     modified_at: string;
//     rating?: (RatingEntity)[] | null;
//     review?: (null)[] | null;
//     featured?: (null)[] | null;
//     offers?: (OffersEntity)[] | null;
//     status: boolean;
//     type: string;
//     exclusive: boolean;
//     bank: Bank;
//     features: Features;
//     venue: Venue;
//     configuration: Configuration;
//     game_type: GameType;
//     created_by: string;
//     __v: number;
//     modified_by: string;
//     secondary_venue: boolean;
//     loc: Loc;
//     amount_receivable: number;
//     coins: number;
//     coupons: number;
//     total_completed_bookings: number;
//     group_id: string;
//     payments: boolean;
//     bookings?: (null)[] | null;
//     subscription: Subscription;
//     subscription_status: boolean;
//     advance_collected: number;
//     pending_subscription_fee: number;
//     cancellation_time: number;
//     city: string;
//     region: string;
//     secondary_venue_id: string;
//     ratings_and_reviews: RatingsAndReviews;
//     account_manager?: (string)[] | null;
//     magic_settelment: boolean;
//     account_managers?: (string)[] | null;
//     sales_manager?: (string)[] | null;
//   }

//   export interface OffersEntity {
//     _id: string;
//     created_at: string;
//     modified_at: string;
//     days?: (DaysEntity)[] | null;
//     venue?: (string)[] | null;
//     event?: (null)[] | null;
//     status: boolean;
//     custom: boolean;
//     discount: number;
//     discount_type: string;
//     end_date: string;
//     end_time: string;
//     minhours: number;
//     offer_type: string;
//     start_date: string;
//     start_time: string;
//     title: string;
//     usage_limit_per_user: number;
//     description: string;
//     __v: number;
//     modified_by: string;
//     first_time_user?: boolean | null;
//     format: string;
//     no_of_courts: number;
//     set_format_status: boolean;
//     special_offer: boolean;
//     min_hour_exculsive?: boolean | null;
//   }
//   export interface DaysEntity {
//     day: string;
//     startTime: string;
//     endTime: string;
//     toggle: boolean;
//     isFixed: boolean;
//   }
//   export interface Bank {
//     account_type: string;
//     contact_id: string;
//     id: string;
//     upi_id: string;
//     account_verified: boolean;
//   }

//   export interface Venue {
//     name: string;
//     venue_display_picture: string;
//     venue_cover_picture?: (string)[] | null;
//     area: string;
//     address: string;
//     pincode: string;
//     latLong?: (string)[] | null;
//     full_payment_limit: string;
//     full_payment: boolean;
//     half_hour: boolean;
//     number_of_courts: boolean;
//     email: string;
//     contact: string;
//   }



//   export interface Loc {
//     type: string;
//     coordinates?: (number)[] | null;
//   }
//   export interface Subscription {
//     subscription: boolean;
//     plan: boolean;
//     start_date: string;
//     subscription_amount: number;
//   }
//   export interface RatingsAndReviews {
//     rating: number;
//     reviews: number;
//     total_ratings: number;
//   }

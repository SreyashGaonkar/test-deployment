import { UserType } from "@/types/userType";
import { actionTypes, setUserActionType, setPreviousGameActionType } from "./app.actions";
import {produce ,  Draft,  } from "immer"
import { GameType } from "@/routes/game/type";

export interface AppState {
    user: UserType;
    gameData: GameType | undefined;
}

export const APP_INITIAL_STATE: AppState = {
    gameData: undefined,
    user: {
        _id: "",
        created_at: undefined,
        modified_at: undefined,
        suggestion_reject: [],
        location_status: false,
        sync_contacts: false,
        email_status: false,
        name_status: false,
        gender_status: false,
        bio_status: false,
        referal_status: false,
        bio: [],
        visibility: "",
        role: "",
        past_convos: [],
        followers: [],
        following: [],
        requests: [],
        sent_requests: [],
        mute: [],
        device_id: [],
        sports_interest: [],
        activity_log: [],
        update_status: false,
        status: false,
        ignored_suggestions: [],
        coins: 0,
        refer_id: "",
        phone: "",
        otp: 0,
        temporary: false,
        conversation: [],
        clubs: [],
        __v: 2,
        email: "",
        history: {
            football: {
                game: 0,
                mvp: 0
            },
            basketball: {
                game: 0,
                mvp: 0
            },
            cricket: {
                game: 0,
                mvp: 0
            },
            badminton: {
                game: 0,
                mvp: 0
            }
        },
        name: "",
        password: "",
        online_status: "",
        device_token: "",
        os: "",
        version: "",
        location: {
            lng: "",
            village: "",
            subSubLocality: "",
            district: "",
            city: "",
            pincode: "",
            area: "",
            lat: "",
            state: "",
            street: "",
            poi_dist: "",
            houseNumber: "",
            street_dist: "",
            subLocality: "",
            poi: "",
            formatted_address: "",
            houseName: "",
            locality: "",
            subDistrict: ""
        },
        last_active: undefined,
        last_login: undefined,
        profile_picture: "",
        fav_sports: [],
        sport_status: false,
        signup_status: false,
        device_tokens: [],
        channel: [],
        fav_venues: [],
        games_month: 0,
        hosted_game: 0,
        played_with: 0,
        reward_claimed: 0,
        total_games: 0
    },
} as unknown as AppState;

type AppAction =
    | setUserActionType | setPreviousGameActionType ;


export const appReducer:React.Reducer<AppState, AppAction> = (prevState = APP_INITIAL_STATE, action): AppState => {
        switch (action.type) {
            case actionTypes.SET_USER:
                return {
                    ...prevState, 
                    ...action.payload ,
                  };

            case actionTypes.SET_PREVIOUS_GAME:
                return {
                    ...prevState, 
                   ...action.payload,
                };
        
            default:
                return prevState;
        }
        // return produce(APP_INITIAL_STATE, (draftState: Draft<AppState>) => {
        //     switch (action.type) {
        //       case actionTypes.SET_USER:
        //         // Update user properties
        //        return draftState['user'] = action.payload ;
                
        
        //       case actionTypes.SET_PREVIOUS_GAME:
        //         // Update gameData properties
        //         return draftState['gameData'] = action.payload ;
                
        
        //       default:
        //         return draftState;
        //     }
        //   });
   
}

// export const appReducer =(state: AppState = APP_INITIAL_STATE, action: AppAction): AppState => {
   
//       switch (action.type) {
//         case 'ADD_TODO': {
//             return produce(prevState, draft => {
//                 draft['chat'] = action.payload;
//               });
        
//         }
//         case 'TOGGLE_TODO': {
//           const todo = draft.todos.find((todo) => todo.id === action.payload.id);
//           if (todo) {
//             todo.completed = !todo.completed;
//           }
//           break;
//         }
//       }
//    ;
//   }





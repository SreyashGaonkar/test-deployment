import { UserType } from "@/types/userType";
import { AppState } from "./app.reducer";
import { createContext } from "react";
import { NotificationType } from "@/components/common/notification/types";

export interface AppContext extends AppState {
    actions: {
        getUserData: (token: string) => void;
        showNotification: (message: string, type: NotificationType) => void;
        setGameData: (gameData: AppState['gameData'] | undefined) => void;
    }
}

export const AppContext = createContext<AppContext>({} as AppContext);
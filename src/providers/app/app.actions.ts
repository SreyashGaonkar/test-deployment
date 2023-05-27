import { AppState } from "./app.reducer";

const base = "App";

export const actionTypes = {
    SET_USER: `${base}/SET_USER`,
    SET_PREVIOUS_GAME: `${base}/SET_PREVIOUS_GAME`,
} as const

export type setUserActionType = {
    type: typeof actionTypes.SET_USER
    payload: Pick<AppState, 'user'>;
}

export const setUser =
    (dispatch: React.Dispatch<setUserActionType>) =>
        (payload: AppState['user']) => {

            dispatch({
                type: actionTypes.SET_USER,
                payload: { user: payload }
            })
        }

export type setPreviousGameActionType = {
    type: typeof actionTypes.SET_PREVIOUS_GAME
    payload: Pick<AppState, 'gameData'>;
}

export const setGameData =
    (dispatch: React.Dispatch<setPreviousGameActionType>) =>
        (payload: AppState['gameData']) => {

            dispatch({
                type: actionTypes.SET_PREVIOUS_GAME,
                payload: { gameData: payload }
            })
        }

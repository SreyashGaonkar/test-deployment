
import { Fragment, useMemo, useState, useEffect, useCallback, useReducer } from "react";
import { AppContext } from "./app.context";
import { UserType } from "@/types/userType";
import useSWR from 'swr'
import Cookies from 'js-cookie';
//component
import Notification from "@/components/common/notification/notification";
import { NotificationType } from "@/components/common/notification/types";
//styles
import styles from '../../routes/login/login.module.scss';
import classNames from "classnames";
//api
import { getUser, getUserResponse } from "@/apis/getUser";
import { APP_INITIAL_STATE, AppState, appReducer } from "./app.reducer";
import { setGameData, setUser } from "./app.actions";


type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props): JSX.Element => {

  const token = Cookies.get('ACCESS_TOKEN');
  const [state, dispatch] = useReducer(
    appReducer,
    APP_INITIAL_STATE
  );

  //actions
  const setUserDetails = setUser(dispatch);
  const setGame = setGameData(dispatch);

  const [notification, setNotification] = useState<{ message: string, type: NotificationType, show: boolean }>({
    message: '',
    type: NotificationType.NORMAL,
    show: false
  })



  const value = useMemo((): AppContext => ({
    ...state,
    actions: {
      getUserData: async (token) => {
        try {
          const data: UserType = await getUser(token);

          setUserDetails(data);

        } catch (e) {
          console.log('getUser error', e)
        }
      },
      showNotification: (message, type) => {
        setNotification({ show: true, message: message, type: type })
      },
      setGameData: (gameData) => {
        setGame(gameData);
      },
    },
  }), [setGame, setUserDetails, state]);

  useEffect(() => {
    if (token) {
      console.log('getUserData called')
      value.actions.getUserData(token)
    }
  }, [token]);


  return (
    <div className={classNames(styles["App1"], styles["p-0"])}>
      <AppContext.Provider value={value}>
        {notification.show && (<Notification onClose={() => {
          setNotification({ message: '', type: NotificationType.NORMAL, show: false });
        }} message={notification.message} />)}
        <Fragment>{children}</Fragment>
      </AppContext.Provider>
    </div>
  )
}

export default AppProvider;
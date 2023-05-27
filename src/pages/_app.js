// pages/_app.js
import "../styles/common.scss";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { PUBLIC_ROUTES } from '../helper/whiteList'
import AppProvider from '../providers/app/app.provider'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (Cookies.get('ACCESS_TOKEN') && PUBLIC_ROUTES.includes(router.pathname)) { //
      console.log('_app route to home')
      router.replace('/home', '/home').catch((e) => console.error(e));
    }
  }, [router]);


  return (
    <>
      {/* <AppProvider> */}
      <Component {...pageProps} />
      {/* </AppProvider> */}
    </>
  );
}

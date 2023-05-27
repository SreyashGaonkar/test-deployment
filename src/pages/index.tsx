import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { PUBLIC_ROUTES } from '../helper/whiteList'
//constext
import { AppContext } from '@/providers/app';
import Landingpages_Mobile from '@/components/landingpageComponents/landingpages_Mobile/landingpages_Mobile';
import Landingpage_desktop from '@/components/landingpageComponents/landingpage_Desktop/landingpage_desktop';

const Index = () => {

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  const checkViewport = () => {
    const isMobileView = window.matchMedia('(max-width: 767px)').matches;
    setIsMobileView(isMobileView);
  };

  return (
    <div>
      {isMobileView ? (
        <Landingpages_Mobile />
      ) : (
        <Landingpage_desktop />
      )}
    </div>)

}

export default Index
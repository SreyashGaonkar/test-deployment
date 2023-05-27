
import React from 'react'
//components
import Heropage from './heropage/heropage';
import Yourgame from './yourgame/yourgame';
import Newfriends from './newfriends/newfriends';
import Winrewards from './winrewards/winrewards';
import ReviewTitle from './reviewsByPlayers/reviewTitle';
import CardsTitle from './cards/cardsTitle/cardsTitle';
import VenuesList from './venuesList/venuesList';
import Footer from './footer/footer';
import Readytoplay from './ready_to_play/readytoplay';
import Navbar from './navbar/navbar';


const Landingpages_Mobile = () => {
  return (
    <>
      <Navbar />
      <Heropage />
      <Yourgame />
      <Newfriends />
      <Winrewards />
      <ReviewTitle />
      <CardsTitle />
      <VenuesList />
      <Readytoplay />
      <Footer />
    </>
  );
};

export default Landingpages_Mobile;

import React from 'react'
//components
import Navbar_desktop from './navbar_desktop/navbar_desktop'
import Top_shadows from '@/components/common/top_shadows/top_shadows'
import Heropage_desktop from './heropage_desktop/heropage_desktop'
import Footer_desktop from './footer_desktop/footer_desktop'
import Yourgame_desktop from './yourgame_desktop/yourgame_desktop'
import Winrewards_desktop from './winrewards_desktop/winrewards_desktop'
import Makenewfriends_desktop from './makenewfriends_desktop/makenewfriends_desktop'
import Towntalk_desktop from './towntalk_desktop/towntalk_desktop'
import Venue_animate from './venue_animate_desktop/venue_animate'
import Readyplayer_desktop from './readyplayer_desktop/readyplayer_desktop'
import Gamecards_desktop from './gamecards_desktop/gamecards_desktop'
import Review_animate_desktop from './review_animate_desktop/review_animate_desktop'

const Landingpage_desktop = () => {
  return (
    <div >
      <Navbar_desktop />
      <Top_shadows />
      <Heropage_desktop />
      <Yourgame_desktop />
      <Makenewfriends_desktop />
      <Winrewards_desktop />
      <Review_animate_desktop />
      <Gamecards_desktop />
      <Towntalk_desktop />
      <Venue_animate />
      <Readyplayer_desktop />
      <Footer_desktop />
    </div>
  )
}

export default Landingpage_desktop
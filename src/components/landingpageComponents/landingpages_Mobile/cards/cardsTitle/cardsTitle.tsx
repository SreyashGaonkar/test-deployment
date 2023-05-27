import classNames from 'classnames'
import styles from './cardsTitle.module.scss'
import CardsTypes from '../cardsTypes/cardsTypes'
import TownTalk from '../townTalk/townTalk'

const CardsTitle = () => {
  return (
    <>
    <div className={classNames(styles.cards_container)}>
    <div className={classNames(styles.cards_title1, styles["mb-24"])}>Made for host in you</div>
    <div className={classNames(styles.cards_title2, styles["mb-64"])}>Organising a game has never been this easy!</div>

    </div>
    <CardsTypes /> 
    <TownTalk />  
    </>
  )
}

export default CardsTitle
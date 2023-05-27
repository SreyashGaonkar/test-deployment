import React from 'react'
import styles from "./banner.module.css"

const Banner = ({ buttonText, onClick }: { buttonText: string, onClick: () => void }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local coffee shops!</p>
            <div className={styles.buttonWrapper}>
                <button onClick={onClick} className={styles.button}>{buttonText}</button>
            </div>

        </div>
    )
}

export default Banner
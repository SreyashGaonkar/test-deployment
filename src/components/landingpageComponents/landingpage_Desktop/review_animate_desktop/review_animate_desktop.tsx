import classNames from 'classnames'
import React from 'react';
import styles from './review_animate_desktop.module.scss'
import Reviews_slide from './reviews_slide/reviews_slide';

const Review_animate_desktop = () => {
    return (
        <div style={{ background: "#191A1C", borderBottom: "1px solid rgba(41,39,39, 1)", borderTop: "1px solid rgba(41,39,39, 1)" }}>
            <div className={classNames(styles.scrollers_view)}>
                <div className={styles.row}>
                    <div className={styles.col_1}>
                    </div>
                    <div className={classNames(styles.col_10, styles.love_review_textalignment)}>
                        <div className={styles.row}>
                            <div className={styles.col_1}>
                            </div>
                            <div className={styles.col_12}>
                                <div className={styles.lovetext_align} id='biggestvenue'>
                                    <div className={styles.lovetext}> Loved by players all around{" "}
                                        <span className='animate__animated animate__bounceIn animate__infinite animate__slow 1s'>❤️ </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col_1}>
                            </div>
                        </div>
                        <div className={styles.linearbackgrounds}></div>
                        <Reviews_slide />                      
                        <div className={styles.col_1}>
                        </div>
                    </div>
                </div>
                <div className={styles.linearbackground}></div>
            </div>
        </div>
    )
}

export default Review_animate_desktop
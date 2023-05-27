import React from 'react';
//image
import Image from 'next/image';
import review1 from '../../../../../../public/landingimages/testimonial10.svg';
import review2 from '../../../../../../public/landingimages/testimonial7.svg';
import review3 from '../../../../../../public/landingimages/testimonial2.webp';
import review4 from '../../../../../../public/landingimages/testimonial3.webp';
import review5 from '../../../../../../public/landingimages/testimonial6.svg';
import review6 from '../../../../../../public/landingimages/testimonial4.webp';
import review7 from '../../../../../../public/landingimages/testimonial5.webp';
import review8 from '../../../../../../public/landingimages/testimonial8.svg';
import review9 from '../../../../../../public/landingimages/testimonial9.svg';
//styles
import classNames from 'classnames';
import styles from './review_slide.module.scss'

const Reviews_slide = () => {
    const reviewanimation = [
        {
          "theme_name": "reviewpics",
          "path": review1
        },
        {
          "theme_name": "reviewpics",
          "path": review7
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review3
        },
        {
          "theme_name": "reviewpics",
          "path": review1
        },
        {
          "theme_name": "reviewpics",
          "path": review7
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review3
        }
      ]
      const reviewanimation2 = [
        {
          "theme_name": "reviewpics",
          "path": review3
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review6
        },
        {
          "theme_name": "reviewpics",
          "path": review4
        },
        {
          "theme_name": "reviewpics",
          "path": review5
        },
        {
          "theme_name": "reviewpics",
          "path": review3
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review6
        }
      ]
      const reviewanimation3 = [
        {
          "theme_name": "reviewpics",
          "path": review8
        },
        {
          "theme_name": "reviewpics",
          "path": review9
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review3
        },
        {
          "theme_name": "reviewpics",
          "path": review5
        },
        {
          "theme_name": "reviewpics",
          "path": review7
        },
        {
          "theme_name": "reviewpics",
          "path": review2
        },
        {
          "theme_name": "reviewpics",
          "path": review6
        }
      ]
  return (
    <>
    <div className={classNames(styles.row, styles.animate_container)} id='newreviews'>
        <div className={styles.scroll_container_new}>
      <div className={classNames(styles.col_4, styles.marquee1)} id='marquee1'>
        {
          reviewanimation.map((data, key) => {
            return (
              <>
                <Image key={key} src={data.path} alt='venuegroundsview' loading='lazy' className={styles.desktopreviews}/>
              </>
            )
          })
        }
      </div>
      <div className={classNames(styles.col_4, styles.marquee2)} id='marquee2'>
        {
          reviewanimation2.map((data, key) => {
            return (
              <>
                <Image key={key} src={data.path} alt='venuegroundsview' loading='lazy' className={styles.desktopreviews}/>
              </>
            )
          })
        }
      </div>
      <div className={classNames(styles.col_4, styles.marquee3)} id='marquee3'>
        {
          reviewanimation3.map((data, key) => {
            return (
              <>
                <Image key={key} src={data.path} alt='venuegroundsview' loading='lazy' className={styles.desktopreviews}/>
              </>
            )
          })
        }
      </div>
      </div>
    </div>
    </>
  )
}

export default Reviews_slide
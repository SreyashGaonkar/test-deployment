//styles
import Image from 'next/image'
import styles from './header.module.scss'
//types
import { HeaderPropType } from './types'
import classNames from 'classnames'

const Header = ({ back, title, imageUrl, rightIcon }: HeaderPropType) => {
    return (
        <div className={styles.container}>

            <div className={styles.back_button_wrapper} >
                <div className={classNames(styles['row'], styles['align-center'])}>
                    <Image className={classNames(styles['mr-12'])} onClick={back} height={22} width={22} alt='back button' src={'/icons/arrow-right-small.png'} />
                    {imageUrl && (<Image className={classNames(styles.round_image)} height={36} width={36} alt="Image" src={imageUrl} />)}
                    {title && (<p className={classNames(styles['title_2'], styles['white1'], styles['ml-20'])}>{title}</p>)}
                </div>

                {rightIcon && rightIcon}
            </div>
        </div>
    )
}

export default Header
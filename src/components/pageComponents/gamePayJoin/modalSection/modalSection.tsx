
import { ReactNode, useCallback, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
//styles
import styles from './modalSection.module.scss'
//types
import { ButtonType } from '@/components/common/primaryButton/types'
import { ModalSectionPropType, ModalType } from './types'
//components
import Modal from '@/components/common/modal/modal'
import PrimaryButton from '@/components/common/primaryButton'





const ModalSection = ({ modalType, onAccept, onCancel, onClose, onTrack }: ModalSectionPropType): JSX.Element => {

    const modal = useCallback((icon: ReactNode, title: string, subtitle: ReactNode, description: string | undefined, buttonText1: string | undefined, buttonText2: string) => {
        return (
            <div className={styles.modal}>
                <div>
                    {icon && icon}
                </div>

                <p className={styles.modalTitle}>{title}</p>
                {subtitle && subtitle}
                {description && (<p className={styles.modalSubTitle}>
                    {description}
                </p>)}
                <div className={styles["row"]}>
                    {buttonText1 ? (<> <div className={styles.width_45}>
                        <PrimaryButton
                            buttonType={ButtonType.BORDER}
                            text={buttonText1}
                            onPress={onCancel}
                        />
                    </div>
                        <div className={styles.width_45}>
                            <PrimaryButton
                                text={buttonText2}
                                onPress={onAccept}
                            />
                        </div>
                    </>) : (
                        <div className={styles.width_95}>
                            <PrimaryButton
                                text={buttonText2}
                                onPress={onAccept}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }, [onAccept, onCancel])

    const renderMdoal = useCallback(() => {
        switch (modalType) {
            case ModalType.GAME_FULL:
                return (
                    <>{modal(<></>,
                        'Oops! Game full',
                        <p className={styles.modalSubTitle}>Another player is making a payment to join this game. Try again in a few minutes or join the waitlist to get notified when a spot opens up.</p>,
                        undefined,
                        'Cancel',
                        'Join waitlist')}
                    </>)
            case ModalType.RETRY:
                return (
                    <>{modal(<></>,
                        'Transaction failed!',
                        <p className={styles.modalSubTitle}>Your payment didn’t go through. Try again to confirm your spot.</p>,
                        undefined,
                        'Cancel',
                        'Retry')}
                    </>)
            case ModalType.TIME_OUT:
                return (
                    <>{modal(<></>,
                        'Sorry, you ran out of time!',
                        <p className={classNames(styles.modalSubTitle, styles['mb-16'])}>our booking didn’t go through as the session timed out. A refund has been initiated for the debited amount. <span onClick={onTrack} className={styles['blue1']}>Track refund</span></p>,
                        'Try again to book your slot.',
                        'Cancel',
                        'Retry')}
                    </>)

            case ModalType.SPOT_UNAVAILABE:
                return (
                    <>{modal(<></>,
                        'Oops! Game full',
                        <p className={styles.modalSubTitle}>Look’s like the spot is not available anymore. A refund has been initiated for the debited amount. <span onClick={onTrack} className={styles['blue1']}>Track refund</span></p>,
                        undefined,
                        undefined,
                        'Close')}
                    </>)
            case ModalType.SERVICE_FEE:
                return (
                    <>{modal(<></>,
                        'Service fee',
                        <p className={styles.modalSubTitle}>This helps us run our platform and offer services like 24/7 support.</p>,
                        undefined,
                        undefined,
                        'Close')}
                    </>)

            case ModalType.JOIN_WAIT_LIST:
                return (
                    <>{modal(<></>,
                        'Join the Waitlist?',
                        <p className={classNames(styles.modalSubTitle, styles['mb-16'])}>We’ll notify you if a spot opens up. </p>,
                        'After being notified, you’ll still have to join the game to confirm your spot.',
                        'Cancel',
                        'Join waitlist')}
                    </>)
            default: <></>
        }
    }, [modal, modalType, onTrack])



    return (
        <Modal
            show={modalType !== ModalType.NONE}
            onClose={onClose}
        >
            {renderMdoal()}
        </Modal>
    )
}

export default ModalSection;
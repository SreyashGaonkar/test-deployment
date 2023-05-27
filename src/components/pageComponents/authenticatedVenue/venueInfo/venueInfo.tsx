import React, { useCallback } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

//styles
import styles from './venueInfo.module.scss'
//types
import { VenueInfoPropType } from './types'
import { RatioOrSides } from '@/routes/venue/types'

const Types = (value: string) => {
    let x;
    if (value == "5s" || value == "6s" || value == "7s" || value == "8s" || value == "9s") {
        x = value.substring(0, 1) + " v " + value.substring(0, 1)
    } else if (value == "10s" || value == "11s" || value == "12s") {
        x = value.substring(0, 2) + " v " + value.substring(0, 2)
    }
    else {
        switch (value) {
            case "nonac":
                x = "Non AC";
                break;
            case "ac":
                x = "AC";
                break;
            case "hc":
                x = "Half Court";
                break;
            case "fc":
                x = "Full Court";
                break;
            case "net":
                x = "Net";
                break;
            case "ground":
                x = "Pitch";
                break;
            default:
                x = "";
        }
    }
    return x
}

const getCricketNetCount = (courts: RatioOrSides) => {
    const value = courts["net"] == 1 ? "Net" : "Nets"
    return `${value}`
}

const getCricketPitchCount = (courts: RatioOrSides) => {
    return `Pitch`
}

const getSurfaceForFootball = (type: string) => {
    if (type === 'artificalturf') {
        return ('Aritificial Football Turf')
    }
    else if (type === 'naturalturf' || type == "naturalgrass") {
        return ('Natural grass pitch')
    }
    else if (type === 'mudground' || type == "mudround") {
        return ('Mud ground')
    }
    else if (type === 'syntheticturf') {
        return ('Synthetic mat')
    } else {
        return ""
    }

}

const getOutsForFootball = (type: string) => {
    if (type === 'Caged') {
        return ('Caged')
    }
    else {
        return ('With Outs')
    }
}

const getSurfaceForBadminton = (type: string) => {
    if (type === 'wooden') {
        return ('Wooden Flooring')
    }
    else if (type === 'wooden&synthetic') {
        return ('Wooden & Synthetic')
    }
    else if (type === 'concrete') {
        return ('Concrete Flooring')
    }
    else if (type === 'synthetic') {
        return ('Synthetic Flooring')
    } else {
        return ""
    }

}

const getMarkingShoes = (type: string) => {
    if (type === 'nonmarkingshoes') {
        return ('Non Marking Shoes Only')
    }
    else if (type === 'norestictionfooter') {
        return ('No Restrictions')
    }

}

const getEquipmentForBadminton = (type: any) => {
    if (type) {
        return ('Equipment Provided')
    }
    else {
        return ('Bring Your Equipment')
    }

}

const getHoops = (type: string) => {
    if (type === 'adjustablehoops') {
        return ('Adjustable Hoops')
    }
    else if (type === 'nohoops') {
        return ('Non Adjustable Hoops')
    } else {
        return "";
    }

}

const getEquipmentForBoxCricket = (type: any) => {
    if (type) {
        return ('Equipment Provided')
    }
    else {
        return ('Bring Your Equipment')
    }
}

const getSurfaceGround = (type: string) => {
    if (type === 'artificalturf') {
        return 'Artificial Turf'
    }
    else if (type === 'naturalturf' || type == "naturalgrass") {
        return 'Natural grass pitch'
    }
    else if (type === 'mudground' || type == "mudround") {
        return 'Mud ground'
    }
    else if (type === 'syntheticturf') {
        return 'Synthetic Turf'
    }
}

const getSurfaceForCricketNet = (type: string) => {
    if (type === 'artificalturf') {
        return ('Artificial Turf')
    }
    else if (type === 'naturalwicket') {
        return ('Natural Turf')
    }
    else if (type === 'cement') {
        return ('Cement Turf')
    }
    else if (type === 'coyormat') {
        return ('Coyor mat')
    }

}

const getTurfForCricketNetImage = (type: string) => {
    if (type === 'artificalturf') {
        return '/turfs/natural_cricket_net.webp'
    }
    else if (type === 'naturalwicket') {
        return '/turfs/natural-turf-net.png'
    }
    else if (type === 'cement') {
        return '/turfs/cement-net.png'
    }
    else if (type === 'coyormat') {
        return '/turfs/coyor-net.png'
    } else {
        return ''
    }

}

const getTurfForCricketGround = (type: string) => {
    if (type === 'artificalturf') {
        return '/turfs/artificial_ground_turf.webp'
    }
    else if (type === 'naturalwicket' || type === 'naturalturf') {
        return '/turfs/natural_ground_turf.webp'
    }
    else if (type === 'mudground' || type === 'mudround') {
        return '/turfs/mud_ground_turf.webp'
    }
    else if (type === 'syntheticturf') {
        return '/turfs/synthetic_ground_turf.webp'
    }
    else if (type === 'cement') {
        return '/turfs/cement-net.png'
    }
    else if (type === 'coyormat') {
        return '/turfs/coyor-net.png'
    } else {
        return ''
    }
}

const getTurfForFootball = (type: string) => {
    switch (type) {
        case "artificalturf":
            return '/turfs/artificial-football.png'
        case "mudground":
        case "mudround":
            return '/turfs/mud_ground.webp'
        case "naturalgrass":
            return '/turfs/natural_ground.webp'
        case 'syntheticturf':
            return '/turfs/synthetic_ground.webp'
        default:
            return '/turfs/artificial-football.png'
    }
}

const getTurfForBadminton = (type: string) => {
    console.log('ty', type)
    switch (type) {
        case "wooden":
            return '/turfs/wooden-court.png'
        case "synthetic":
            return '/turfs/synthetic-court.png'
        case "concrete":
            return '/turfs/concerete_badminton.webp'
        case "wooden&synthetic":
            return '/turfs/wooden_sy_badminton.webp'
        default:
            return '/turfs/wooden-court.png'
    }

}
const getTurfForBasketball = (type: string) => {
    switch (type) {
        case "synthetic":
            return '/turfs/synthetic-court.png'
        case "wooden":
            return '/turfs/wooden-court.png'
        case 'concrete':
            return '/turfs/concerete_turf.webp'
        case 'wooden&synthetic':
            return '/turfs/wooden_synthetic.webp'
        default:
            return '/turfs/synthetic-court.png'
    }

}

const getOuts = (type: string) => {
    switch (type) {
        case "Caged":
            return '/turfs/caged.png'
        default:
            return '/turfs/sideline.png'
    }
}

const getRoof = (type: any) => {
    switch (type) {
        case true:
            return '/turfs/close-roof.png'
        default:
            return '/turfs/open-roof.png'
    }
}

const getBasketHoopsImage = () => {
    return '/turfs/basketball_hoop.webp'
}


const getShoes = (type: any) => {
    switch (type) {
        case "nonmarkingshoes":
            return '/turfs/non-marking-shoes.png'
        default:
            return '/turfs/no-shoe.png'
    }
}

const getEquipments = (type: any) => {
    switch (type) {
        case true:
            return '/turfs/shuttle.png'
        default:
            return '/turfs/shuttle.png'
    }
}

const VenueInfo = ({ sport, game_type, configuration }: VenueInfoPropType) => {

    const pitch = useCallback(() => {
        return (
            <>
                {Object.keys(configuration.sides).map((key, index) => {
                    return (
                        <div key={index} className={classNames(styles['row'], styles['align-center'], styles['mb-28'])}>
                            <div className={classNames(styles['capsule'], styles['mr-3'])}>
                                <p className={classNames(styles['sub_2'], styles['white1'])}>{Types(key)}</p>
                            </div>
                            <div className={classNames(styles['dot'])} />
                            <p className={classNames(styles['sub'], styles['white1'])}>{configuration?.sides[key]} {(sport == "football" || sport == "badminton" || sport == "basketball") ? configuration?.sides[key] == 1 ? " Court" : " Courts" : sport == "cricket" ? configuration?.base_type == "net" ? getCricketPitchCount(configuration.sides) : getCricketNetCount(configuration.sides) : ""}</p>
                        </div>
                    )
                })}
            </>

        )
    }, [configuration?.base_type, configuration.sides, sport])

    const infoItem = useCallback((imageUrl: string, title: string | undefined, subtitle: string | undefined) => {
        return (
            <div className={classNames(styles['row'], styles['align-center'])}>
                <Image height={36} width={36} alt={'turf-icon'} src={imageUrl ? imageUrl : '/turfs/dark_square.png'} className={classNames(styles.box, styles['mr-16'])} />
                <div className={classNames(styles['mr-3'])}>
                    {title && (<p className={classNames(styles['headline'], styles['white1'])}>{title}</p>)}
                    {subtitle && (<p className={classNames(styles['sub'], styles['white3'])}>{subtitle}</p>)}
                </div>


            </div>
        )
    }, []);

    const renderTurf = useCallback(() => {
        switch (sport) {
            case "football":
                return <div>
                    <div>
                        {infoItem(getTurfForFootball(game_type.surface), getSurfaceForFootball(game_type?.surface), undefined)}
                    </div>
                    <div className={styles['mt-24']}>
                        {infoItem(getOuts(game_type.outs), getOutsForFootball(game_type?.outs), game_type?.outs == "withouts" ? "No rebound walls" : "With rebound walls")}
                    </div>
                    {game_type?.roof && (
                        <>
                            {infoItem(getRoof(game_type.roof), game_type?.roof ? "Closed" : "Open to sky", game_type?.roof ? "Playable in heavy rain" : "No protection from rain")}
                        </>

                    )}
                </div>

            case "badminton":
                return <div>
                    <div>
                        {infoItem(getTurfForBadminton(game_type.floor), getSurfaceForBadminton(game_type?.surface), undefined)}
                    </div>
                    <div className={styles['mt-24']}>
                        {infoItem(getShoes(game_type.shoes), getMarkingShoes(game_type?.outs), undefined)}
                    </div>
                    {infoItem(getEquipments(game_type.shoes), getEquipmentForBadminton(game_type?.equipment), "Available for purchase")}
                </div>

            case "basketball":
                return <div>
                    <div>
                        {infoItem(getEquipments(game_type.shoes), getSurfaceForBadminton(game_type?.surface), undefined)}
                    </div>
                    <div className={styles['mt-24']}>
                        {infoItem(getShoes(game_type.shoes), getMarkingShoes(game_type?.outs), undefined)}
                    </div>
                    {(game_type?.hoops || 'nohoops') !== 'nohoops' && (
                        <>
                            {infoItem(getBasketHoopsImage(), getHoops(game_type?.hoops), undefined)}
                        </>
                    )}

                </div>

            case "cricket":
                if (configuration?.base_type == "net") {
                    return <div>
                        {game_type?.bowlingmachine && (<div>
                            {infoItem('/turfs/bowling_machine.webp', "Bowling machine", "Available")}
                        </div>)}
                        <div className={styles['mt-24']}>
                            {infoItem('/turfs/cricket_equipment.webp', getEquipmentForBadminton(game_type?.netsequipment), undefined)}
                        </div>
                        {infoItem(getTurfForCricketNetImage(game_type.netssurface[0].value), getSurfaceForCricketNet(game_type?.netssurface[0].value), undefined)}
                    </div>
                }
                if (configuration?.base_type == "ground") {
                    return <div>
                        <div>
                            {infoItem('/turfs/cricket_equipment.webp', getEquipmentForBoxCricket(game_type?.pitchequipment), undefined)}
                        </div>
                        <div className={styles['mt-24']}>
                            {infoItem(getTurfForCricketGround(game_type.pitchsurface), getSurfaceGround(game_type?.pitchsurface), undefined)}
                        </div>
                    </div>
                }
            default:
                return <></>
        }
    }, [configuration?.base_type, game_type?.bowlingmachine, game_type?.equipment, game_type.floor, game_type?.hoops, game_type?.netsequipment, game_type.netssurface, game_type.outs, game_type?.pitchequipment, game_type?.pitchsurface, game_type.roof, game_type.shoes, game_type.surface, infoItem, sport])


    return (
        <div className={classNames(styles.container, styles['borderTop'])}>
            <p className={classNames(styles['title_4'], styles['white1'])}>Venue info</p>
            <div className={classNames(styles['mt-28'])}>
                {pitch()}
            </div>
            <div className={classNames(styles['mt-42'])}>
                {renderTurf()}
            </div>
        </div>
    )
}

export default VenueInfo
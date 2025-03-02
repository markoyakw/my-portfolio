import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'
import classes from "../../HomePage.module.css"
import LocationCard from './LocationCard/LocationCard'
import LetsConnectButton from './LetsConnectButton/LetsConnectButton'
import { FC } from 'react'

const LocationAndLetsConnectCards: FC<{ isRevealAnimationReady: boolean }> = ({ isRevealAnimationReady }) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-left",
        delay: "0.1s",
        show: isRevealAnimationReady
    })

    const containerClassName = `${classes["location-and-connect-row"]} ${animationClassName}`

    return (
        <div className={containerClassName} style={delayStyle}>
            <LocationCard />
            <LetsConnectButton />
        </div>
    )
}

export default LocationAndLetsConnectCards
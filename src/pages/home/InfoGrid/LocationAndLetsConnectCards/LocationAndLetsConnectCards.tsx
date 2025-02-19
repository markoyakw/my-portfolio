import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'
import classes from "../../HomePage.module.css"
import LocationCard from './LocationCard/LocationCard'
import LetsConnectButton from './LetsConnectButton/LetsConnectButton'

const LocationAndLetsConnectCards = () => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-left",
        delay: "0.1s",
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
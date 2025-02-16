import useAppearAnimationAttributes from '@utils/useAppearAnimationProps/useAppearAnimationProps'
import classes from "../../HomePage.module.css"
import LocationCard from './LocationCard/LocationCard'
import LetsConnectButton from './LetsConnectButton/LetsConnectButton'

const LocationAndLetsConnectCards = () => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "from-left",
        delay: "1s"
    })

    const className = `${classes["location-and-connect-row"]} ${animationClassName}`

    return (
        <div className={className} style={delayStyle}>
            <LocationCard />
            <LetsConnectButton />
        </div>
    )
}

export default LocationAndLetsConnectCards
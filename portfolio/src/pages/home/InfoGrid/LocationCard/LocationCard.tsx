import { FaLocationDot } from 'react-icons/fa6'
import classes from "./LocationCard.module.css"

const LocationCard = () => {
    return (
        <div className={classes["container"]}>
            <div className={classes["location-pin-circle"]}>
                <FaLocationDot size={"45px"} />
            </div>
            <div className={classes["text-row"]}>
                <p>Germany,</p>
                <p>&nbsp; Düsseldorf/</p>
                <p>Duisburg</p>
            </div>
        </div>
    )
}

export default LocationCard
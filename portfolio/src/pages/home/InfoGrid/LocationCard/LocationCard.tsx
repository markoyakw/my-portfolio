import { FaLocationDot } from 'react-icons/fa6'
import classes from "./LocationCard.module.css"

const LocationCard = () => {
    return (
        <div className={classes["container"]}>
            <div className={classes["location-pin-circle"]}>
                <FaLocationDot size={"45px"} />
            </div>
            Germany, <br />
            &nbsp; Düsseldorf/ <br />
            Duisburg
        </div>
    )
}

export default LocationCard
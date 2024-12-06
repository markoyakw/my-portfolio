import MyText from '@components/UI/MyText/MyText'
import { FaLocationDot } from 'react-icons/fa6'
import classes from "./LocationCard.module.css"

const LocationCard = () => {
    return (
        <MyText size='m' color='primary'>
            <div className={classes["container"]}>
                <div className={classes["location-pin-circle"]}>
                </div>
                <FaLocationDot size={"45px"} />
                Germany, <br />
                &nbsp; Düsseldorf/ <br />
                Duisburg
            </div>
        </MyText>
    )
}

export default LocationCard
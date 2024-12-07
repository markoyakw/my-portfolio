import MyText from '@components/UI/MyText/MyText'
import { FaLocationDot } from 'react-icons/fa6'
import classes from "./LocationCard.module.css"

const LocationCard = () => {
    return (
        <MyText size='s' color='primary'>
            <div className={classes["container"]}>
                <div className={classes["location-pin-circle"]}>
                    <FaLocationDot size={"45px"} />
                </div>
                Germany, <br />
                &nbsp; Düsseldorf/ <br />
                Duisburg
            </div>
        </MyText>
    )
}

export default LocationCard
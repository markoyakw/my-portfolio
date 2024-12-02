import MyText from '@components/UI/MyText/MyText'
import { FaLocationDot } from 'react-icons/fa6'
import classes from "./LocationCard.module.css"

const LocationCard = () => {
    return (
        <MyText size='m' color='primary'>
            <div className={classes["container"]}>
                <FaLocationDot size={"45px"} />
                Based in: <br />
                Germany, Düsseldorf - Duisburg
            </div>
        </MyText>
    )
}

export default LocationCard
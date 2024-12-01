import { useState } from 'react'
import MyCard from '@components/UI/MyCard/MyCard'
import MyContainer from '@components/UI/MyContainer/MyContainer'
import AddMLGGlassesOnHover from '@components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import MyImage from '@components/UI/MyImage/MyImage'
import WavyHand from '@components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "@assets/resume-photo.jpg"
import MyText from '@components/UI/MyText/MyText'
import MyAnimatedIconStack from '@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack'
import MyAnimatedLinks from './MyAnimatedLinks'
import classes from "./HelloCard.module.css"

const HelloCard = () => {
    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)

    return (
        <MyCard onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)}>
            <div className={classes["container"]}>

                <div className={classes["hello-and-picture__container"]}>

                    <MyText size='l' color='secondary'>
                        <h1>
                            Hello <WavyHand isHovered={isHelloCardHovered} />
                            , <br />I'm Marko
                        </h1>
                    </MyText>

                    <div className={classes["my-pictire__container"]}>
                        <AddMLGGlassesOnHover isHovered={isHelloCardHovered}>
                            <MyImage src={resumePhoto} rounded zoomLevel={1.2} paddingTop="8px" />
                        </AddMLGGlassesOnHover>
                    </div>

                </div>

                <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
            </div>
        </MyCard>
    )
}

export default HelloCard
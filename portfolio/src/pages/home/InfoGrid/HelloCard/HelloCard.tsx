import { useState } from 'react'
import MyCard from '@components/UI/MyCard/MyCard'
import AddMLGGlassesOnHover from '@components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import WavyHand from '@components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "@assets/resume/resume-photo.jpg"
import MyAnimatedIconStack from '@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack'
import MyAnimatedLinks from './MyAnimatedLinks'
import classes from "./HelloCard.module.css"

const HelloCard = () => {
    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)

    return (
        <MyCard onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)} addedClassName={classes["container"]}>
            <div className={classes["greetings__container"]}>
                <div className={classes["greetings__text"]}>
                    Hello <WavyHand isHovered={isHelloCardHovered} />
                    , <br />I'm Marko
                </div>
                <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
            </div>

            <div className={`${classes["my-pictire__container"]} ${classes["my-picture-container--smaller-screen"]}`}>
                <AddMLGGlassesOnHover isHovered={isHelloCardHovered}>
                    <img className={classes["my-picture"]} src={resumePhoto} />
                </AddMLGGlassesOnHover>
            </div>
        </MyCard>
    )
}

export default HelloCard
import { useState } from 'react'
import MyCard from '@components/UI/MyCard/MyCard'
import AddMLGGlassesOnHover from '@components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import WavyHand from '@components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "@assets/resume-photo.jpg"
import MyText from '@components/UI/MyText/MyText'
import MyAnimatedIconStack from '@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack'
import MyAnimatedLinks from './MyAnimatedLinks'
import classes from "./HelloCard.module.css"

const HelloCard = () => {
    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)

    return (
        <MyCard backgroundColor='#EFEFEF' onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)}>
            <div className={classes["container"]}>

                <div className={classes["greetings__container"]}>
                    <MyText size='l' color='secondary'>
                        <h1>
                            Hello <WavyHand isHovered={isHelloCardHovered} />
                            , <br />I'm Marko
                        </h1>
                    </MyText>
                    <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
                </div>

                <div className={classes["my-pictire__container"]}>
                    <AddMLGGlassesOnHover isHovered={isHelloCardHovered}>
                        <img className={classes["my-picture"]} src={resumePhoto} />
                    </AddMLGGlassesOnHover>
                </div>

            </div>
        </MyCard>
    )
}

export default HelloCard
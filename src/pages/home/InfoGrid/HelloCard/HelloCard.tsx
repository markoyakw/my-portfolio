import { FC, useState } from 'react'
import MyCard from '@components/UI/MyCard/MyCard'
import AddMLGGlassesOnHover from '@components/UI/animations/AddMLGGlassesOnHover/AddMLGGlassesOnHover'
import WavyHand from '@components/UI/animations/WavyHand/WavyHand'
import resumePhoto from "@assets/resume/resume-photo.jpg"
import MyAnimatedIconStack from '@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack'
import MyAnimatedLinks from './MyAnimatedLinks'
import classes from "./HelloCard.module.css"
import useAppearAnimationAttributes from '@hooks/useAppearAnimationProps/useAppearAnimationProps'

const HelloCard: FC = () => {

    const [isHelloCardHovered, setIsHelloCardHovered] = useState(false)
    const { animationClassName } = useAppearAnimationAttributes({
        type: "from-top",
    })
    const containerClassName = `${classes["container"]} ${animationClassName}`

    return (
        <MyCard onMouseEnter={() => setIsHelloCardHovered(true)} onMouseLeave={() => setIsHelloCardHovered(false)} addedClassName={containerClassName}>
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
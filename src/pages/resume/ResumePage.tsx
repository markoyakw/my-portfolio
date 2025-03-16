import MyButton from "@components/UI/MyButton/MyButton"
import openResumePage from "@utils/openResumePage"
import { forwardRef, memo, useEffect, useState } from "react"
import { FaArrowDown } from "react-icons/fa6"
import { PiReadCvLogoFill } from "react-icons/pi"
import classes from "./ResumePage.module.css"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"
import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"

const ResumePage = forwardRef<HTMLDivElement, { isInView: boolean }>(({ isInView }, ref) => {

    const [isTextRevealAnimationFinished, setIsTextRevealAnimationFinished] = useState(false)
    const shouldShowMyResumeButton = isTextRevealAnimationFinished && isInView
    const { animationClassName, delayStyle } = useAppearAnimationAttributes({ type: "fade-in", delay: "0s", show: shouldShowMyResumeButton })

    const handleTextRevealAnimationFinish = () => {
        setIsTextRevealAnimationFinished(true)
    }

    useEffect(() => {
        if (!isInView) {
            setIsTextRevealAnimationFinished(false)
        }
    }, [isInView])

    return (
        <div ref={ref} className={classes["container"]}>
            <h2>
                <TextReveal shouldAnimationStart={isInView} onAnimationFinish={handleTextRevealAnimationFinish}>
                    For more information, you can check out my resume below
                </TextReveal>
            </h2>
            <div className={`${animationClassName} ${classes["button-and-arrow-column"]}`} style={delayStyle}>
                <FaArrowDown />
                <div className={classes["button-container"]}>
                    <MyButton addedClassName={classes["button"]} onClick={openResumePage}>
                        <PiReadCvLogoFill />&nbsp;My resume
                    </MyButton>
                </div>
            </div>
        </div>
    )
})

export default memo(ResumePage)
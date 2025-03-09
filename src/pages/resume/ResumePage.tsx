import MyButton from "@components/UI/MyButton/MyButton"
import openResumePage from "@utils/openResumePage"
import { forwardRef, memo } from "react"
import { FaArrowDown } from "react-icons/fa6"
import { PiReadCvLogoFill } from "react-icons/pi"
import classes from "./ResumePage.module.css"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"
import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"

const ResumePage = forwardRef<HTMLDivElement, { isInView: boolean }>(({ isInView }, ref) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({ type: "fade-in", delay: "0.6s", show: isInView })

    return (
        <div ref={ref} className={classes["container"]}>
            <h2>
                <TextReveal shouldAnimationStart={isInView}>
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
import MyButton from "@components/UI/MyButton/MyButton"
import openResumePage from "@utils/openResumePage"
import { forwardRef, memo } from "react"
import { FaArrowDown } from "react-icons/fa6"
import { PiReadCvLogoFill } from "react-icons/pi"
import classes from "./ResumePage.module.css"
import TextReveal from "@components/UI/animations/TextReveal/TextReveal"

const ResumePage = forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className={classes["container"]}>
            <h2>
                <TextReveal>For more information, you can check out my resume below</TextReveal>
                &nbsp;<FaArrowDown />
            </h2>
            <div className={classes["button-container"]}>
                <MyButton addedClassName={classes["button"]} onClick={openResumePage}>
                    <PiReadCvLogoFill />&nbsp;My resume
                </MyButton>
            </div>
        </div>
    )
})

export default memo(ResumePage)
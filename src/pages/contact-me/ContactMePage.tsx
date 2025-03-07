import classes from "./ContactMePage.module.css"
import MyCard from "@components/UI/MyCard/MyCard"
import { forwardRef, memo } from "react"
import MyAnimatedIconStack from "@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack"
import MyAnimatedLinks from "@pages/home/InfoGrid/HelloCard/MyAnimatedLinks"
import { FaPhoneVolume } from "react-icons/fa6"
import { ContactMeForm } from "./ContactMeForm"
import useAppearAnimationAttributes from "@hooks/useAppearAnimationProps/useAppearAnimationProps"

type TContactMePageProps = {
    isInView: boolean
}

const ContactMePage = forwardRef<HTMLDivElement, TContactMePageProps>(({ isInView }, ref) => {

    const { animationClassName, delayStyle } = useAppearAnimationAttributes({
        type: "fade-in",
        delay: "0.1s",
        show: isInView
    })
    const containerClassName = `${classes["container"]} ${animationClassName}`

    return (
        <div className={containerClassName} ref={ref} style={delayStyle}>
            <h2>Contact me:</h2>
            <MyCard addedClassName={classes["main-card"]}>
                <div className={classes["main-card__contact-text"]}>
                    <p>Feel free to reach out, and I'll get back to you ASAP! Or contact me via:</p>
                    <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
                    <div className={classes["main-card__contact-text-icon-container"]}>
                        <FaPhoneVolume className={classes["main-card__contact-text-icon"]} />
                    </div>
                </div>
                <ContactMeForm />
            </MyCard>
        </div >
    )
})

export default memo(ContactMePage)
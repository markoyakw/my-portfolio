import classes from "./ContactMePage.module.css"
import MyCard from "@components/UI/MyCard/MyCard"
import { forwardRef } from "react"
import MyAnimatedIconStack from "@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack"
import MyAnimatedLinks from "@pages/home/InfoGrid/HelloCard/MyAnimatedLinks"
import { FaPhoneVolume } from "react-icons/fa6"
import { ContactMeForm } from "./ContactMeForm"

const ContactMePage = forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div className={classes["container"]} ref={ref}>
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

export default ContactMePage
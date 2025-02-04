import MyInput from "@components/UI/MyInput/MyInput"
import classes from "./ContactMePage.module.css"
import MyCard from "@components/UI/MyCard/MyCard"
import MyTextArea from "@components/UI/MyInput/MyTextArea"
import { FormEvent, forwardRef, useState } from "react"
import MyButton from "@components/UI/MyButton/MyButton"
import MyAnimatedIconStack from "@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack"
import MyAnimatedLinks from "@pages/home/InfoGrid/HelloCard/MyAnimatedLinks"
import { FaPhoneVolume } from "react-icons/fa6"

const ContactMePage = forwardRef<HTMLFormElement>((_, ref) => {

    const [value, setValue] = useState("")

    const onFormSubmit = async () => {
        const res = await fetch("https://api.telegram.org/bot7978438245:AAF79rieHepHoViZtYGK54VnsEKk_4nW344/sendMessage?chat_id=5028575361&text=Enter your text here")
        console.log(await res.json())
    }

    return (
        <form className={classes["container"]} ref={ref} >
            <h2>Contact me:</h2>
            <MyCard addedClassName={classes["main-card"]}>
                <div className={classes["main-card__contact-text"]}>
                    <p>Feel free to reach out, and I'll get back to you ASAP! Or contact me via:</p>
                    <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
                    <div className={classes["main-card__contact-text-icon-container"]}>
                        <FaPhoneVolume className={classes["main-card__contact-text-icon"]} />
                    </div>
                </div>
                <MyCard addedClassName={classes["form-card"]}>
                    <MyInput label="Name" addedClassName={classes["input"]} />
                    <MyInput label="Email/ Telephone number" addedClassName={classes["input"]} />
                    <MyTextArea
                        label="Message"
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)}
                        maxRows={20}
                    />
                    <div className={classes["button__container"]}>
                        <MyButton addedClassName={classes["button"]} onClick={onFormSubmit} type="button">
                            Send
                        </MyButton>
                    </div>
                </MyCard>
            </MyCard>
        </form >
    )
})

export default ContactMePage
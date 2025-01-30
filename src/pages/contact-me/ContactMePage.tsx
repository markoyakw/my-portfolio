import MyInput from "@components/UI/MyInput/MyInput"
import classes from "./ContactMePage.module.css"
import MyCard from "@components/UI/MyCard/MyCard"
import MyTextArea from "@components/UI/MyInput/MyTextArea"
import { forwardRef, useState } from "react"
import MyButton from "@components/UI/MyButton/MyButton"
import MyAnimatedIconStack from "@components/UI/animations/MyAnimatedIconStack/MyAnimatedIconStack"
import MyAnimatedLinks from "@pages/home/InfoGrid/HelloCard/MyAnimatedLinks"

const ContactMePage = forwardRef<HTMLDivElement>((_, ref) => {

    const [value, setValue] = useState("")
    return (
        <form>
            <div ref={ref} className={classes["container"]}>
                <h2>
                    <p>Feel free to reach out, and I'll get back to you ASAP! 😊</p>
                    <p>
                        Or contact me via: <MyAnimatedIconStack itemArr={MyAnimatedLinks} />
                    </p>
                </h2>
                <MyCard addedClassName={classes["card"]}>
                    <MyInput label="Name" addedClassName={classes["input"]} />
                    <MyInput label="Email/ Telephone number" addedClassName={classes["input"]} />
                    <MyTextArea
                        label="Message"
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)}
                        maxRows={20}
                    />
                    <div className={classes["button__container"]}>
                        <MyButton addedClassName={classes["button"]}>
                            Send
                        </MyButton>
                    </div>
                </MyCard>
            </div>
        </form >
    )
})

export default ContactMePage
import { FC } from "react"
import classes from "./WavyHand.module.css"
import MyCustomCursor from "@components/UI/MyCustomCursor/MyCustomCursor"
import MyText from "@components/UI/MyText/MyText"

type TWavyHandProps = {
    isHovered?: boolean
}

const WavyHand: FC<TWavyHandProps> = ({ isHovered }) => {

    const wavyHandClassName = `${classes["wavy-hand"]} ${isHovered ? classes["wave-hand--hovered"] : ""}`

    const HoverCursor = <MyText size={"xl"} className={wavyHandClassName}>👋</MyText>

    return (
        <MyCustomCursor cursor={HoverCursor} disableBasicCursor>
            <span className={wavyHandClassName}>👋</span>
        </MyCustomCursor>
    )
}

export default WavyHand
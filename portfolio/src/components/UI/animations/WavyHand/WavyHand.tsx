import { FC } from "react"
import classes from "./WavyHand.module.css"
import MyCustomCursor from "@components/UI/MyCustomCursor/MyCustomCursor"

type TWavyHandProps = {
    isHovered?: boolean
}

const WavyHand: FC<TWavyHandProps> = ({ isHovered }) => {

    const wavyHandClassName = `${classes["wavy-hand"]} ${isHovered ? classes["wave-hand--hovered"] : ""}`

    const HoverCursor = <span className={wavyHandClassName}>👋</span>

    return (
        <MyCustomCursor cursor={HoverCursor} disableBasicCursor>
            <span className={wavyHandClassName}>👋</span>
        </MyCustomCursor>
    )
}

export default WavyHand
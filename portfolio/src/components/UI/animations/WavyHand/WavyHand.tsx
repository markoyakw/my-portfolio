import { FC } from "react"
import classes from "./WavyHand.module.css"

type TWavyHandProps = {
    isHovered?: boolean
}

const WavyHand: FC<TWavyHandProps> = ({ isHovered }) => {

    const wavyHandClassName = `${classes["wavy-hand"]} ${isHovered ? classes["wave-hand--hovered"] : ""}`

    return (
        <span className={wavyHandClassName}>👋</span>
    )
}

export default WavyHand
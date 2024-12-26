import { FC, useMemo } from "react"
import classes from "./CircularText.module.css"

type TCircularText = {
    children: string,
    addedClassName?: string
}

const CircularText: FC<TCircularText> = ({ children, addedClassName }) => {
    const text = children + " "
    const textLength = text.length
    const circularTextClassName = `${classes["char-container"]} ${addedClassName && ""}`

    const charsInCircularStringShape = useMemo(() => {
        return text.split("").map((char, charId) =>
            <div
                className={circularTextClassName}
                style={{
                    transform: `rotate(${360 / textLength * charId + "deg"})`,
                }}>
                {char}
            </div>
        )
    }, [])

    return (
        <div className={classes["container"]}>
            {charsInCircularStringShape}
        </div>
    )
}

export default CircularText
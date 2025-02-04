import { FC, useMemo } from "react"
import classes from "./CircularText.module.css"

type TCircularText = {
    children: string,
    addedCharClassName?: string,
    addedContainerClassName?: string
}

const CircularText: FC<TCircularText> = ({ children, addedCharClassName, addedContainerClassName }) => {
    const text = children + " "
    const textLength = text.length
    const circularTextClassName = `${classes["char-container"]} ${addedCharClassName || ""}`

    const charsInCircularStringShape = useMemo(() => {
        return text.split("").map((char, charId) =>
            <div
                key={charId}
                className={circularTextClassName}
                style={{
                    transform: `rotate(${360 / textLength * charId + "deg"})`,
                }}>
                {char}
            </div>
        )
    }, [])

    return (
        <div className={`${classes["container"]} ${addedContainerClassName}`}>
            {charsInCircularStringShape}
        </div>
    )
}

export default CircularText
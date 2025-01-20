import { FC, useEffect, useRef } from "react"
import classes from "./AnimatedLoaderText.module.css"

type TAnimatedElipsiesProps = {
    children: string
}

const AnimatedCharacter = (props: { char: string, charId: number }) => {

    const { char, charId } = props

    const charRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!charRef.current) return
        charRef.current.style.setProperty("--char-id", String(charId))
    }, [charRef])

    return (
        <span ref={charRef} className={classes["char"]}>
            {char}
        </span>
    )
}

const AnimatedLoaderText: FC<TAnimatedElipsiesProps> = ({ children }) => {
    return (
        <span className={classes["container"]}>
            {children.split("").map((char, charId) => {
                return (
                    <AnimatedCharacter char={char} charId={charId} key={charId} />
                )
            })}
        </span>
    )
}

export default AnimatedLoaderText
import { CSSProperties, FC, ReactNode, useEffect, useRef } from 'react'
import classes from "./AppearAnimation.module.css"

type TAppearType = "from-top" | "from-bottom" | "from-left" | "from-right"

type TAppearAnimationProps = {
    children: ReactNode,
    type: TAppearType,
    delay?: CSSProperties["animationDelay"],
    addedClassName?: string
}

const AppearAnimation: FC<TAppearAnimationProps> = ({ children, type, delay, addedClassName }) => {

    const containerClassName = `${classes["container"]} ${classes[`container--${type}`]} ${addedClassName ? addedClassName : ""}`
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !delay) return
        containerRef.current.style.setProperty("--animation-delay", delay)
    }, [])

    return (
        <div className={containerClassName} ref={containerRef}>
            {children}
        </div>
    )
}

export default AppearAnimation
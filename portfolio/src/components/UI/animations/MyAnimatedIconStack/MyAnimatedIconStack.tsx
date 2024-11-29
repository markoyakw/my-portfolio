import MyIcon, { TMyIconName } from "@components/UI/MyIcon/MyIcon"
import { FC, MouseEvent, useMemo, useRef, useState } from "react"
import classes from "./MyAnimatedIconStack.module.css"
import MyAnimatedIconStackItem from "./MyAnimatedIconStackItem"

type TMyAnimatedIconStackProps = {
    iconNameArr: TMyIconName[],
}

export type TMouseCoordinates = {
    x: number,
    y: number
} | null

const MyAnimatedIconStack: FC<TMyAnimatedIconStackProps> = ({ iconNameArr }) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerMousePosition, setContainerMousePosition] = useState<TMouseCoordinates>({ x: 0, y: 0 })

    const containerRect = useMemo(() => containerRef.current && containerRef.current.getBoundingClientRect(), [containerRef.current])

    const getMouseCoordinates = (event: MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current
        if (!container) {
            return
        }
        setContainerMousePosition({ x: event.clientX, y: event.clientY })
    }

    const mouseLeaveHandler = () => {
        setContainerMousePosition(null)
    }

    return (
        <div className={classes["animated-stack"]} ref={containerRef} onMouseMove={getMouseCoordinates} onMouseLeave={mouseLeaveHandler}>
            {iconNameArr.map((iconName) => {
                return (
                    <MyAnimatedIconStackItem mousePosition={containerMousePosition} containerRect={containerRect}>
                        <MyIcon name={iconName} size="50px" />
                    </MyAnimatedIconStackItem>
                )
            })}
            <div className={classes["animated-stack__animation-trigger"]}></div>
        </div>
    )
}

export default MyAnimatedIconStack
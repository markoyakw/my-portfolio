import { FC, MouseEvent, ReactElement, useMemo, useRef, useState } from "react"
import classes from "./MyAnimatedIconStack.module.css"
import MyAnimatedIconStackItem from "./MyAnimatedIconStackItem"
import useSensorScreen from "@hooks/useIsSensorScreen"

type TMyAnimatedIconStackProps = {
    itemArr: ReactElement[],
}

export type TMouseCoordinates = {
    x: number,
    y: number
} | null

const MyAnimatedIconStack: FC<TMyAnimatedIconStackProps> = ({ itemArr }) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState<TMouseCoordinates>({ x: 0, y: 0 })
    const isScreenSensor = useSensorScreen()

    const containerRect = useMemo(() => containerRef.current && containerRef.current.getBoundingClientRect(), [containerRef.current])
    const getMouseCoordinates = (event: MouseEvent<HTMLDivElement>) => {
        if (isScreenSensor) return
        const container = containerRef.current
        if (!container) return

        setMousePosition({
            x: event.clientX,
            y: event.clientY
        })
    }

    const mouseLeaveHandler = () => {
        setMousePosition(null)
    }

    return (
        <div className={classes["animated-stack__container"]} ref={containerRef} >
            <div className={classes["animated-stack"]} onMouseMove={getMouseCoordinates} onMouseLeave={mouseLeaveHandler}>
                {itemArr.map((icon, iconId) => {
                    return (
                        <MyAnimatedIconStackItem mousePosition={mousePosition} containerRect={containerRect} key={iconId} iconId={iconId} >
                            {icon}
                        </MyAnimatedIconStackItem>
                    )
                })}
                <div className={classes["animated-stack__shrink-stopper"]}></div>
            </div>
        </div>
    )
}

export default MyAnimatedIconStack
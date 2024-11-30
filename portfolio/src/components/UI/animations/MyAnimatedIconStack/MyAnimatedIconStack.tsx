import { FC, MouseEvent, ReactElement, useMemo, useRef, useState } from "react"
import classes from "./MyAnimatedIconStack.module.css"
import MyAnimatedIconStackItem from "./MyAnimatedIconStackItem"

type TMyAnimatedIconStackProps = {
    itemArr: ReactElement[],
}

export type TMouseCoordinates = {
    x: number,
    y: number
} | null

const MyAnimatedIconStack: FC<TMyAnimatedIconStackProps> = ({ itemArr }) => {

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
            {itemArr.map((icon) => {
                return (
                    <MyAnimatedIconStackItem mousePosition={containerMousePosition} containerRect={containerRect}>
                        {icon}
                    </MyAnimatedIconStackItem>
                )
            })}
            <div className={classes["animated-stack__shrink-stopper"]}></div>
        </div>
    )
}

export default MyAnimatedIconStack
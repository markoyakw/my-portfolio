import { forwardRef, MutableRefObject, ReactNode } from 'react'
import { TMouseCoordinates } from '../animations/MyAnimatedIconStack/MyAnimatedIconStack';
import classes from "./MyCursor.module.css"

type TMyCursor = {
    mousePosition: TMouseCoordinates;
    translateXPercent: number;
    translateYPercent: number;
    children: ReactNode;
}

const MyCursor = forwardRef<HTMLDivElement, TMyCursor>((
    {
        translateXPercent = 0,
        translateYPercent = 0,
        mousePosition,
        children
    },
    ref) => {

    if (!mousePosition) return <></>
    const cursorContainerRef = ref as MutableRefObject<HTMLDivElement>

    return (
        <div
            ref={cursorContainerRef}
            style={{
                translate: `${translateXPercent}% ${translateYPercent}%`,
                top: mousePosition.y + 'px',
                left: mousePosition.x + 'px',
            }}
            className={classes["custom-cursor"]}
        >
            {children}
        </div>
    )
})

export default MyCursor
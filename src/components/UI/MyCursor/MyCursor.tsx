import { CSSProperties, forwardRef, ReactNode, useMemo } from 'react'
import classes from "./MyCursor.module.css"

type TMyCursor = {
    mousePosition: { x: number, y: number };
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

    const transformStyle = useMemo<CSSProperties>(() => ({
        transform: `translate(
            calc(${mousePosition.x}px + ${translateXPercent}%),
            calc(${mousePosition.y}px + ${translateYPercent}%)
        )`
    }), [mousePosition.x, mousePosition.y, translateXPercent, translateYPercent]);

    return (
        <div
            ref={ref}
            style={transformStyle}
            className={classes["custom-cursor"]}
        >

            {children}

        </div>
    )
})

export default MyCursor
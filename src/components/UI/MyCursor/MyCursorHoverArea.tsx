import { FC, MouseEvent, ReactNode, useState, CSSProperties, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from "./MyCursor.module.css"
import MyCursor from './MyCursor';

type TMouseCoordinates = { x: number; y: number } | null;

type TMyCustomCursorProps = {
    children: ReactNode;
    cursor: ReactNode;
    disableBasicCursor?: boolean;
    normalizeOverflowOutsideOfScreen?: boolean;
    translateXPercent?: number;
    translateYPercent?: number;
}

const MyCustomCursor: FC<TMyCustomCursorProps> = ({
    cursor,
    children,
    disableBasicCursor,
    normalizeOverflowOutsideOfScreen = true,
    translateXPercent = -50,
    translateYPercent = -50
}) => {

    const [mousePosition, setMousePosition] = useState<TMouseCoordinates>(null);
    const cursorContainerRef = useRef<HTMLDivElement>(null)
    const cursorPivot = useRef({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
            x: getNormalizedX(e.clientX),
            y: getNormalizedY(e.clientY),
        });
    };

    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    const showBasicCursorStyle: CSSProperties = disableBasicCursor
        ? { cursor: "none" }
        : {}

    useEffect(() => {
        if (!cursorContainerRef.current || !mousePosition) return
        const { left, top } = cursorContainerRef.current.getBoundingClientRect();
        cursorPivot.current.x = mousePosition.x - left
        cursorPivot.current.y = mousePosition.y - top
    }, [cursorContainerRef.current])

    const getNormalizedX = (x: number) => {
        if (!normalizeOverflowOutsideOfScreen) return x;
        const cursorContainer = cursorContainerRef.current;
        if (!cursorContainer) return x;

        const documentWidth = document.documentElement.clientWidth;
        const { width } = cursorContainer.getBoundingClientRect();

        return Math.max(cursorPivot.current.x, Math.min(x, documentWidth - width * (1 + translateXPercent / 100)));
    };

    const getNormalizedY = (y: number) => {
        if (!normalizeOverflowOutsideOfScreen) return y;
        const cursorContainer = cursorContainerRef.current;
        if (!cursorContainer) return y;

        const documentHeight = document.documentElement.clientHeight;
        const { height } = cursorContainer.getBoundingClientRect();

        return Math.max(cursorPivot.current.y, Math.min(y, documentHeight - height * (1 + translateYPercent / 100)));
    };

    return (
        <div
            className={classes["custom-cursor__hover-container"]}
            style={{ ...showBasicCursorStyle }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>

            {children}

            {createPortal(
                <MyCursor
                    ref={cursorContainerRef}
                    mousePosition={mousePosition}
                    translateXPercent={translateXPercent}
                    translateYPercent={translateYPercent}
                >
                    {cursor}
                </MyCursor>,
                portalRoot
            )}

        </div>
    );
};

export default MyCustomCursor;

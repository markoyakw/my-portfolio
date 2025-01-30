import { FC, MouseEvent, ReactNode, useState, CSSProperties, useRef, useEffect, useMemo } from 'react';
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
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    const fromScreenBorderToCursorMargin = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const spacingValue = rootStyles.getPropertyValue("--spacing-s").trim().slice(0, -2);
        return Number(spacingValue)
    }, [])

    const showBasicCursorStyle: CSSProperties = disableBasicCursor
        ? { cursor: "none" }
        : {}

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
            x: getNormalizedX(e.clientX),
            y: getNormalizedY(e.clientY),
        });
    };

    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    const getNormalizedX = (x: number) => {
        if (!normalizeOverflowOutsideOfScreen) return x;
        const cursorContainer = cursorContainerRef.current;
        if (!cursorContainer) return x;

        const documentWidth = document.documentElement.clientWidth;
        const { width } = cursorContainer.getBoundingClientRect();

        const minXWithMargin = cursorPivot.current.x + fromScreenBorderToCursorMargin
        const maxXWithMargin = documentWidth - width * (1 + translateXPercent / 100) - fromScreenBorderToCursorMargin

        return Math.max(minXWithMargin, Math.min(x, maxXWithMargin));
    };

    const getNormalizedY = (y: number) => {
        if (!normalizeOverflowOutsideOfScreen) return y;
        const cursorContainer = cursorContainerRef.current;
        if (!cursorContainer) return y;

        const documentHeight = document.documentElement.clientHeight;
        const { height } = cursorContainer.getBoundingClientRect();

        const minYWithMargin = cursorPivot.current.y + fromScreenBorderToCursorMargin
        const maxYWithMargin = documentHeight - height * (1 + translateYPercent / 100) - fromScreenBorderToCursorMargin

        return Math.max(minYWithMargin, Math.min(y, maxYWithMargin));
    };

    useEffect(() => {
        if (!cursorContainerRef.current || !mousePosition) return
        const { left, top } = cursorContainerRef.current.getBoundingClientRect();
        cursorPivot.current.x = mousePosition.x - left
        cursorPivot.current.y = mousePosition.y - top
    }, [cursorContainerRef.current])

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

import { FC, MouseEvent, ReactNode, useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import classes from "./MyCursor.module.css"
import MyCursor from './MyCursor';
import useSensorScreen from '@hooks/useIsSensorScreen';

type TMouseCoordinates = { x: number; y: number } | null;

type TMyCustomCursorProps = {
    children: ReactNode;
    cursor: ReactNode;
    disableBasicCursor?: boolean;
    normalizeOverflowOutsideOfScreen?: boolean;
    translateXPercent?: number;
    translateYPercent?: number;
    noCursorChilrenArr?: HTMLElement[]
}

const MyCustomCursor: FC<TMyCustomCursorProps> = ({
    cursor,
    children,
    disableBasicCursor,
    normalizeOverflowOutsideOfScreen = false,
    translateXPercent = -50,
    translateYPercent = -50,
    noCursorChilrenArr
}) => {

    const [mousePosition, setMousePosition] = useState<TMouseCoordinates>(null);
    const isSensorScreen = useSensorScreen()
    const cursorContainerRef = useRef<HTMLDivElement>(null)
    const cursorPivot = useRef({ x: 0, y: 0 })
    const portalRoot = document.getElementById('cursor-portal-root');
    if (!portalRoot) return null;

    const fromScreenBorderToCursorMargin = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const spacingValue = rootStyles.getPropertyValue("--spacing-s").trim().slice(0, -2);
        return Number(spacingValue)
    }, [])

    const handleMouseMove = (e: MouseEvent) => {

        const isHoveredChildNoCursor = noCursorChilrenArr?.some(element => {
            const target = e.target as Node
            return element.contains(target)
        })

        const setCursorPositionToMousePosition = () => setMousePosition({
            x: getNormalizedX(e.clientX),
            y: getNormalizedY(e.clientY),
        });

        if (!noCursorChilrenArr) {
            setCursorPositionToMousePosition()
            return
        }

        if (isHoveredChildNoCursor) {
            setMousePosition(null)
            return
        }

        setCursorPositionToMousePosition()
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
            className={`${classes["custom-cursor__hover-container"]} ${disableBasicCursor ? classes["custom-cursor__hover-container--no-basic-cursor"] : ""}`}

            onMouseOver={handleMouseMove}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {children}

            {createPortal(
                <MyCursor
                    ref={cursorContainerRef}
                    mousePosition={mousePosition}
                    translateXPercent={translateXPercent}
                    translateYPercent={translateYPercent}
                >
                    {!isSensorScreen && cursor}
                </MyCursor>,
                portalRoot
            )}

        </div>
    );
};

export default MyCustomCursor;

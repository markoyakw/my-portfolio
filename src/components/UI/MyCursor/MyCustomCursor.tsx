import { FC, MouseEvent, ReactNode, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import MyCursor from './MyCursor';
import useSensorScreen from '@hooks/useIsSensorScreen';
import MyCursorHoverArea from './MyCursorHoverArea';

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

    const portalRoot = useMemo(() => document.getElementById('cursor-portal-root'), []);
    if (!portalRoot) return null;

    const fromScreenBorderToCursorMargin = useMemo(() => {
        const rootStyles = getComputedStyle(document.documentElement)
        const spacingValue = rootStyles.getPropertyValue("--spacing-s").trim().slice(0, -2);
        return Number(spacingValue)
    }, [])

    const animationFrameRef = useRef<number | null>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isSensorScreen) return
        if (animationFrameRef.current && mousePosition) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            const isHoveredChildNoCursor = noCursorChilrenArr?.some(element => {
                const target = e.target as Node;
                return element.contains(target);
            });

            if (isHoveredChildNoCursor) {
                setMousePosition(null);
            } else {
                setMousePosition({
                    x: getNormalizedX(e.clientX),
                    y: getNormalizedY(e.clientY),
                });
            }
        });
    }, [noCursorChilrenArr])

    const handleMouseLeave = useCallback(() => {
        if (isSensorScreen) return
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
            setMousePosition(null)
        });
    }, [])

    const getNormalizedX = useCallback((x: number) => {
        if (!normalizeOverflowOutsideOfScreen || !cursorContainerRef.current) return x;

        const { width } = cursorContainerRef.current.getBoundingClientRect();
        const documentWidth = document.documentElement.clientWidth;
        const minX = cursorPivot.current.x + fromScreenBorderToCursorMargin;
        const maxX = documentWidth - width * (1 + translateXPercent / 100) - fromScreenBorderToCursorMargin;

        return Math.max(minX, Math.min(x, maxX));
    }, [normalizeOverflowOutsideOfScreen, fromScreenBorderToCursorMargin, translateXPercent]);

    const getNormalizedY = useCallback((y: number) => {
        if (!normalizeOverflowOutsideOfScreen || !cursorContainerRef.current) return y;

        const { height } = cursorContainerRef.current.getBoundingClientRect();
        const documentHeight = document.documentElement.clientHeight;
        const minY = cursorPivot.current.y + fromScreenBorderToCursorMargin;
        const maxY = documentHeight - height * (1 + translateYPercent / 100) - fromScreenBorderToCursorMargin;

        return Math.max(minY, Math.min(y, maxY));
    }, [normalizeOverflowOutsideOfScreen, fromScreenBorderToCursorMargin, translateYPercent]);

    useEffect(() => {
        if (!cursorContainerRef.current || !mousePosition) return
        const { left, top } = cursorContainerRef.current.getBoundingClientRect();
        cursorPivot.current.x = mousePosition.x - left
        cursorPivot.current.y = mousePosition.y - top
    }, [cursorContainerRef.current])

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <>
            <MyCursorHoverArea handleMouseLeave={handleMouseLeave} handleMouseMove={handleMouseMove} disableBasicCursor={disableBasicCursor}>
                {children}
            </MyCursorHoverArea>

            {createPortal(
                !isSensorScreen && mousePosition
                    ? <MyCursor
                        ref={cursorContainerRef}
                        mousePosition={mousePosition}
                        translateXPercent={translateXPercent}
                        translateYPercent={translateYPercent}
                    >
                        {cursor}
                    </MyCursor>
                    : <></>,
                portalRoot
            )}
        </>
    );
};

export default MyCustomCursor;

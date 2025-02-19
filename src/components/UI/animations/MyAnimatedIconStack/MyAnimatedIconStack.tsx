import { FC, MouseEvent, ReactElement, useRef, useState, useCallback, useEffect } from "react";
import classes from "./MyAnimatedIconStack.module.css";
import MyAnimatedIconStackItem from "./MyAnimatedIconStackItem";
import useSensorScreen from "@hooks/useIsSensorScreen";

export type TMouseCoordinates = {
    x: number;
    y: number;
} | null;

type TMyAnimatedIconStackProps = {
    itemArr: ReactElement[];
};

const MyAnimatedIconStack: FC<TMyAnimatedIconStackProps> = ({ itemArr }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<TMouseCoordinates>(null);
    const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
    const isScreenSensor = useSensorScreen();

    useEffect(() => {
        if (!containerRef.current) return;
        const updateRect = () => {
            setContainerRect(containerRef.current?.getBoundingClientRect() || null);
        };
        updateRect();

        const resizeObserver = new ResizeObserver(() => {
            updateRect();
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const animationFrameRef = useRef<number | null>(null);

    const handleMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
        if (isScreenSensor || !containerRef.current) return;

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        });
    }, [isScreenSensor]);

    const handleMouseLeave = useCallback(() => {
        setTimeout(() => setMousePosition(null), 10)
    }, []);

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className={classes["animated-stack__container"]} ref={containerRef}>
            <div
                className={classes["animated-stack"]}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {itemArr.map((icon, iconId) => (
                    <MyAnimatedIconStackItem
                        key={iconId}
                        mousePosition={mousePosition}
                        containerRect={containerRect}
                        iconId={iconId}
                    >
                        {icon}
                    </MyAnimatedIconStackItem>
                ))}
                <div className={classes["animated-stack__shrink-stopper"]}></div>
            </div>
        </div>
    );
};

export default MyAnimatedIconStack;

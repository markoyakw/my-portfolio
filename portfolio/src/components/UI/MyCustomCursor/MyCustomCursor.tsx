import { FC, MouseEvent, ReactNode, useState } from 'react';
import { TMouseCoordinates } from '../animations/MyAnimatedIconStack/MyAnimatedIconStack';
import classes from "./MyCustomCursor.module.css"

type TMyCustomCursorProps = {
    children: ReactNode;
    cursor: ReactNode;
    mousePositionProp?: TMouseCoordinates;
};

const MyCustomCursor: FC<TMyCustomCursorProps> = ({ cursor, children, mousePositionProp }) => {
    const [mousePositionState, setMousePositionState] = useState<TMouseCoordinates | null>(null);
    const mousePosition = mousePositionProp || mousePositionState;

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cursor) {
            return;
        }
        if (!mousePositionProp) {
            setMousePositionState({
                x: e.clientX,
                y: e.clientY,
            });
        }
    };

    const displayCustomCursor = cursor && mousePosition;

    return (
        <div onMouseMove={handleMouseMove}>
            {children}

            {displayCustomCursor && (
                <div
                    style={{
                        top: mousePosition.y,
                        left: mousePosition.x,
                    }}
                    className={classes["custom-cursor"]}
                >
                    {cursor}
                </div>
            )}
        </div>
    );
};

export default MyCustomCursor;
import { FC, MouseEvent, ReactNode, useState, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import classes from "./MyCustomCursor.module.css";

type TMouseCoordinates = { x: number; y: number } | null;

type TMyCustomCursorProps = {
    children: ReactNode;
    cursor: ReactNode;
    disableBasicCursor?: boolean;
};

const MyCustomCursor: FC<TMyCustomCursorProps> = ({ cursor, children, disableBasicCursor }) => {
    const [mousePosition, setMousePosition] = useState<TMouseCoordinates>(null);

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseLeave = () => {
        setMousePosition(null)
    }

    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    const showBasicCursorStyle: CSSProperties = disableBasicCursor
        ? { cursor: "none" }
        : {}

    const cursorElement = cursor && mousePosition ? (
        <div
            style={{
                position: 'fixed',
                top: mousePosition.y,
                left: mousePosition.x,
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                ...showBasicCursorStyle
            }}
            className={classes["custom-cursor"]}
        >
            {cursor}
        </div>
    ) : null;

    return (
        <>
            <div
                className={classes["custom-cursor__hover-container"]}
                style={{ ...showBasicCursorStyle }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>

                {children}
            </div>
            {createPortal(cursorElement, portalRoot)}
        </>
    );
};

export default MyCustomCursor;

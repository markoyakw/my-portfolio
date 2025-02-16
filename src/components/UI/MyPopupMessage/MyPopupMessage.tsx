import { CSSProperties, FC, useMemo } from "react";
import { createPortal } from "react-dom";
import classes from "./MyPopupMessage.module.css";

type TMyPopupMessageProps = {
    message: string;
    addedClassName?: string;
    type?: "error" | "success";
    delay?: number;
    isVisible: boolean;
};

const MyPopupMessage: FC<TMyPopupMessageProps> = ({ message, addedClassName, type, delay = 0, isVisible }) => {
    const className = `
        ${classes["popup-message"]}
        ${type ? classes["popup-message--" + type] : ""}
        ${addedClassName ? addedClassName : ""}
        ${!isVisible ? classes["popup-message--hidden"] : ""}
    `;

    const style = useMemo<CSSProperties>(() => {
        if (!delay) return {};
        return {
            transitionDelay: `${delay}ms`,
        };
    }, [delay]);

    const portalRoot = document.getElementById("popup-message-portal-root");

    if (!portalRoot) {
        console.error("Portal root element not found!");
        return null;
    }

    return createPortal(
        <div className={className} style={style}>
            {message}
        </div>,
        portalRoot
    );
};

export default MyPopupMessage;
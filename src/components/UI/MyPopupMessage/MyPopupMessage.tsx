import { CSSProperties, FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import classes from "./MyPopupMessage.module.css";

type TMyPopupMessageProps = {
    children: string;
    addedClassName?: string;
    type?: "error" | "success";
    delay?: number;
    isVisible?: boolean;
    disappearIn?: number,
    disappearFunction?: () => void
}

const MyPopupMessage: FC<TMyPopupMessageProps> = ({
    children,
    addedClassName,
    type,
    delay = 0,
    isVisible = true,
    disappearIn,
    disappearFunction
}) => {

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

    useEffect(() => {
        if (!disappearIn) return
        if (!disappearFunction) {
            console.error("SetToIsHidden prop is not found in MyPopup component whyle hideIn is present.")
            return
        }
        if (!isVisible) return
        const hideTimer = setTimeout(disappearFunction, disappearIn)

        return () => {
            clearTimeout(hideTimer)
        }
    }, [isVisible])

    return createPortal(
        <div className={className} style={style}>
            {children}
        </div>,
        portalRoot
    );
};

export default MyPopupMessage;
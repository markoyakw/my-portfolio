import { FC, MouseEventHandler, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./MyPopupWindow.module.css";
import { IoIosCloseCircle } from "react-icons/io";

type TMyPopupWindowProps = {
    children: ReactNode;
    isOpen: boolean;
    toggleIsOpen: () => void;
};

const MyPopupWindow: FC<TMyPopupWindowProps> = ({ children, isOpen, toggleIsOpen }) => {

    const portalRoot = document.getElementById("popup-window-portal-root");

    if (!portalRoot) {
        console.error("Portal root element not found!");
        return null;
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handlePopupMenuClose: MouseEventHandler = (e) => {
        e.stopPropagation()
        toggleIsOpen()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            toggleIsOpen()
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyDown)
        return () => {
            window.removeEventListener("keyup", handleKeyDown)
        }
    }, [])

    return ReactDOM.createPortal(
        <>
            {isOpen &&
                <div className={classes["around-popup-area"]} onClick={handlePopupMenuClose}>
                    <div className={classes["popup"]}>
                        <button className={classes["popup__close-button"]} onClick={handlePopupMenuClose}>
                            <IoIosCloseCircle />
                        </button>
                        <div onClick={e => e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>,
        portalRoot
    );
};

export default MyPopupWindow;

import { TiThMenu } from "react-icons/ti"
import classes from "./Nav.module.css"
import { FaChevronUp } from "react-icons/fa6"
import { AiFillMessage } from "react-icons/ai"
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react"

type TMobileHeaderProps = {
    setIsSideBarOpenOnMobile: Dispatch<SetStateAction<boolean>>
}

const MobileHeader: FC<TMobileHeaderProps> = ({ setIsSideBarOpenOnMobile }) => {

    const scrollTopRef = useRef(0)
    const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true)

    useEffect(() => {
        const handleHeaderVisibilityAndScrollTopValue = () => {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop > scrollTopRef.current) {
                setIsMobileHeaderVisible(false);
            } else {
                setIsMobileHeaderVisible(true);
            }

            scrollTopRef.current = scrollTop;
        };

        window.addEventListener("scroll", handleHeaderVisibilityAndScrollTopValue);
        return () => {
            window.removeEventListener("scroll", handleHeaderVisibilityAndScrollTopValue);
        };
    }, []);

    const mobileHeaderClassName = `${classes["mobile-header"]} ${isMobileHeaderVisible ? classes["mobile-header--visible"] : ""}`
    const handleMobileHeaderTogge = () => {
        setIsSideBarOpenOnMobile(oldState => !oldState)
    }

    return (
        <div className={mobileHeaderClassName}>
            <div className={classes["mobile-header__main-row"]}>
                <button className={classes["mobile-header__button"]} onClick={handleMobileHeaderTogge}>
                    <TiThMenu size={"70%"} />
                </button>
                <button className={classes["mobile-header__button"]} >
                    <AiFillMessage size={"70%"} />
                </button>
            </div>
            <button className={classes["mobile-header__button"]} onClick={() => scrollTo(0, 0)}>
                <FaChevronUp style={{ zIndex: 100 }} size={"70%"} />
            </button>
        </div>
    )
}

export default MobileHeader
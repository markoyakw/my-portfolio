import { TiThMenu } from "react-icons/ti"
import classes from "./Nav.module.css"
import { FaChevronUp } from "react-icons/fa6"
import { AiFillMessage } from "react-icons/ai"
import { FC, useEffect, useRef, useState } from "react"

type TMobileHeaderProps = {
    setIsSideBarOpenOnMobile: (isOpen: boolean) => void
}

const ALWAYS_VISIBLE_HEADER_MAX_SCROLLTOP = 40

const MobileHeader: FC<TMobileHeaderProps> = ({ setIsSideBarOpenOnMobile }) => {

    const scrollTopRef = useRef(0)
    const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(false)

    useEffect(() => {
        const handleHeaderVisibilityAndScrollTopValue = () => {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop > scrollTopRef.current && scrollTop > ALWAYS_VISIBLE_HEADER_MAX_SCROLLTOP) {
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

    const handleMobileHeaderOpen = () => {
        setIsSideBarOpenOnMobile(true)
    }

    return (
        <div className={mobileHeaderClassName}>
            <div className={classes["mobile-header__main-row"]}>
                <button className={classes["mobile-header__button"]} onClick={handleMobileHeaderOpen}>
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
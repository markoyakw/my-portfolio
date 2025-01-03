import { TiThMenu } from "react-icons/ti"
import classes from "./Nav.module.css"
import { FaChevronUp } from "react-icons/fa6"
import { AiFillMessage } from "react-icons/ai"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"

type TMobileHeaderProps = {
    isSideBarOpenOnMobile: boolean,
    setIsSideBarOpenOnMobile: Dispatch<SetStateAction<boolean>>
}

const MobileHeader: FC<TMobileHeaderProps> = ({ isSideBarOpenOnMobile, setIsSideBarOpenOnMobile }) => {

    const [scrollTopState, setScrollTopState] = useState(0)
    const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true)

    useEffect(() => {
        const handleHeaderVisibilityAndScrollTopValue = () => {
            const scrollTop = document.documentElement.scrollTop
            setScrollTopState(oldValue => {
                console.log(oldValue, scrollTop)
                if (oldValue > scrollTopState) {
                    setIsMobileHeaderVisible(false)
                }
                else {
                    setIsMobileHeaderVisible(true)
                }
                return scrollTop
            })
        }
        document.addEventListener("scroll", handleHeaderVisibilityAndScrollTopValue)
        return () => {
            window.removeEventListener("scroll", handleHeaderVisibilityAndScrollTopValue)
        }
    })

    const mobileHeaderClassName = `${classes["mobile-header"]} ${isMobileHeaderVisible ? classes["mobile-header--visible"] : ""}`
    const handleMobileHeaderTogge = () => {
        setIsSideBarOpenOnMobile(oldState => !oldState)
    }

    return (
        isSideBarOpenOnMobile
            ? <></>
            : <div className={mobileHeaderClassName}>
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
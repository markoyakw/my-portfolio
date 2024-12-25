import { TiThMenu } from "react-icons/ti"
import classes from "./Header.module.css"
import { FaChevronUp } from "react-icons/fa6"
import { AiFillMessage } from "react-icons/ai"
import { useEffect, useState } from "react"

const MobileHeader = () => {

    const [scrollTopState, setScrollTopState] = useState(0)
    const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
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
        })
    })

    const mobileHeaderClassName = `${classes["mobile-header"]} ${isMobileHeaderVisible ? classes["mobile-header--visible"] : ""}`

    return (
        <div className={mobileHeaderClassName}>
            <div className={classes["mobile-header__main-row"]}>
                <button className={classes["mobile-header__button"]} >
                    <TiThMenu size={"70%"} />
                </button>
                <button className={classes["mobile-header__button"]} >
                    <AiFillMessage size={"70%"} />
                </button>
            </div>
            <button className={classes["mobile-header__button"]} >
                <FaChevronUp size={"70%"} />
            </button>
        </div>
    )
}

export default MobileHeader
import { IoClose } from "react-icons/io5"
import classes from "./Nav.module.css"
import CircularText from "@components/UI/CircularText/CircularText"
import { Dispatch, FC, SetStateAction } from "react"

type TAroundMobileSideBarAreaProps = {
    setIsSideBarOpenOnMobile: Dispatch<SetStateAction<boolean>>
}

const AroundMobileSideBarArea: FC<TAroundMobileSideBarAreaProps> = ({ setIsSideBarOpenOnMobile }) => {

    const handleOutsideOfNavBarClick = () => {
        setIsSideBarOpenOnMobile(false)
    }

    return (
        <div onClick={handleOutsideOfNavBarClick} className={classes["mobile-nav-bar__not-nav-bar-area"]}>
            <div className={classes["mobile-nav-bar__tap-to-close-circle"]}>
                <IoClose className={classes["mobile-nav-bar__tap-to-close-cross"]} />
                <CircularText addedCharClassName={classes["mobile-nav-bar__tap-to-close-text"]}>
                    Tap to close the menu
                </CircularText>
            </div>
        </div>
    )
}

export default AroundMobileSideBarArea
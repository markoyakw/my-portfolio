import { FC } from "react"
import classes from "./Nav.module.css"
import MobileHeader from "./MobileHeader"
import AroundMobileSideBarArea from "./AroundMobileSideBarArea"

type TNavMobileExclusiveComponentsProps = {
    isSideBarOpenOnMobile: boolean,
    setIsSideBarOpenOnMobile: (isOpen: boolean) => void
}

const NavMobileExclusiveComponents: FC<TNavMobileExclusiveComponentsProps> = ({ isSideBarOpenOnMobile, setIsSideBarOpenOnMobile }) => {

    return (
        <div className={classes["nav-bar__mobile-elements"]}>
            {isSideBarOpenOnMobile
                ? <AroundMobileSideBarArea setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
                : <MobileHeader setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
            }
        </div>
    )
}

export default NavMobileExclusiveComponents
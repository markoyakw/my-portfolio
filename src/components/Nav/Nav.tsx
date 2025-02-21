import classes from "./Nav.module.css"
import NavBar from './NavBar/NavBar'
import { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import AroundMobileNavBarArea from './AroundMobileNavBarArea'
import MobileHeader from './MobileHeader'

type THeaderProps = {
    isSideBarOpenOnMobile: boolean,
    setIsSideBarOpenOnMobile: Dispatch<SetStateAction<boolean>>,
    children: ReactNode
}

const Header: FC<THeaderProps> = ({ isSideBarOpenOnMobile, setIsSideBarOpenOnMobile, children }) => {

    const sideBarClassName = `${classes["nav-bar"]}`
    const mobileSideBarClassName = `${classes["nav-bar"]} ${classes["nav-bar--mobile"]} ${isSideBarOpenOnMobile ? classes["nav-bar--mobile-open"] : classes["nav-bar--mobile-closed"]}`

    return (
        <>
            <NavBar className={sideBarClassName} />
            <NavBar className={mobileSideBarClassName} />
            {isSideBarOpenOnMobile
                ? <AroundMobileNavBarArea setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
                : <MobileHeader setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
            }
            {children}
        </ >
    )
}

export default Header
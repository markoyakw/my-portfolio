import { BrowserRouter } from 'react-router-dom'
import classes from "./Nav.module.css"
import NavBar from './NavBar/NavBar'
import { FC, ReactNode } from 'react'
import { useIsMobileWindowSize } from '@hooks/useIsMobileWindowSize'
import NavMobileExclusiveComponents from './NavMobileExclusiveComponents'

type THeaderProps = {
    isSideBarOpenOnMobile: boolean,
    setIsSideBarOpenOnMobile: (newValue: boolean) => void,
    children: ReactNode
}

const Header: FC<THeaderProps> = ({ isSideBarOpenOnMobile, setIsSideBarOpenOnMobile, children }) => {

    const sideBarClassName = `${classes["nav-bar"]}`
    const mobileSideBarClassName = `${classes["nav-bar"]} ${classes["nav-bar--mobile"]} ${isSideBarOpenOnMobile ? classes["nav-bar--mobile-open"] : classes["nav-bar--mobile-closed"]}`
    const isMobileWindowSize = useIsMobileWindowSize()

    return (
        <BrowserRouter>
            {isMobileWindowSize
                ? <NavBar className={mobileSideBarClassName} />
                : <NavBar className={sideBarClassName} />
            }
            {isMobileWindowSize &&
                <NavMobileExclusiveComponents setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} isSideBarOpenOnMobile={isSideBarOpenOnMobile} />
            }
            {children}
        </BrowserRouter >
    )
}

export default Header
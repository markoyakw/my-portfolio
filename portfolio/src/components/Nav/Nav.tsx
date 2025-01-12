import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from "./Nav.module.css"
import NavBar from './NavBar/NavBar'
import { Dispatch, FC, SetStateAction } from 'react'
import AroundMobileNavBarArea from './AroundMobileNavBarArea'
import MobileHeader from './MobileHeader'

type THeaderProps = {
    isSideBarOpenOnMobile: boolean,
    setIsSideBarOpenOnMobile: Dispatch<SetStateAction<boolean>>
}

const Header: FC<THeaderProps> = ({ isSideBarOpenOnMobile, setIsSideBarOpenOnMobile }) => {

    const sideBarClassName = `${classes["nav-bar"]}`
    const mobileSideBarClassName = `${classes["nav-bar"]} ${classes["nav-bar--mobile"]} ${isSideBarOpenOnMobile ? classes["nav-bar--mobile-open"] : classes["nav-bar--mobile-closed"]}`

    return (
        <BrowserRouter>
            <NavBar className={sideBarClassName} />
            <NavBar className={mobileSideBarClassName} />
            {isSideBarOpenOnMobile
                ? <AroundMobileNavBarArea setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
                : <MobileHeader setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
            }
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/about-me" element={<></>} />
                <Route path="/my-projects" element={<></>} />
                <Route path="/contact-me" element={<></>} />
                <Route path="/resume" element={<></>} />
            </Routes>
        </BrowserRouter >
    )
}

export default Header
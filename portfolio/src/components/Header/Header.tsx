import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from "./Header.module.css"
import NavBar from './NavBar/NavBar'
import { FC } from 'react'

type THeaderProps = {
    isHeaderOpenOnMobile: boolean
}

const Header: FC<THeaderProps> = ({ isHeaderOpenOnMobile }) => {

    const headerClassName = `${classes["header"]} ${isHeaderOpenOnMobile ? classes["header--open-on-mobile"] : ""}`

    return (
        <BrowserRouter>
            <div className={classes["size-dummy"]}>
                <header className={headerClassName}>
                    <NavBar />
                </header>
            </div>
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
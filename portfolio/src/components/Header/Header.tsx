import { BrowserRouter, Routes } from 'react-router-dom'
import MyLink from '../UI/MyLink/MyLink'
import classes from "./Header.module.css"

const Header = () => {
    return (
        <BrowserRouter>
            <header className={classes["header"]}>
                <nav className={classes["header__row"]}>
                    <MyLink href='/'>Home</MyLink>

                    <div className={classes["header__center-row"]}>
                        <MyLink href='/about-me'>About me</MyLink>
                        <MyLink href='/my-projects'>My projects</MyLink>
                        <MyLink href='/contact-me'>Contact me</MyLink>
                    </div>

                    <MyLink href='/resume'>My resume</MyLink>
                </nav>
            </header>
            <Routes>

            </Routes>
        </BrowserRouter >
    )
}

export default Header
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from "./Header.module.css"
import NavBar from './NavBar/NavBar'

const Header = () => {

    return (
        <BrowserRouter>
            <div className={classes["size-dummy"]}>
                <header className={classes["header"]}>
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
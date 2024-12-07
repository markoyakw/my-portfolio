import { BrowserRouter, Routes } from 'react-router-dom'
import classes from "./Header.module.css"
import { PiReadCvLogoFill } from 'react-icons/pi'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { BsEmojiSunglassesFill } from 'react-icons/bs'
import { IoHomeSharp } from 'react-icons/io5'
import MyNavLink from '@components/UI/MyNavLink/MyNavLink'
import MyText from '@components/UI/MyText/MyText'

const Header = () => {
    return (
        <BrowserRouter>
            <div className={classes["size-dummy"]}>
                <header className={classes["header"]}>
                    <nav className={classes["main-column"]}>
                        <MyNavLink href='/' icon={<IoHomeSharp />}>
                            Home
                        </MyNavLink>
                        <MyNavLink href='/about-me' icon={<BsEmojiSunglassesFill />}>
                            About me
                        </MyNavLink>
                        <MyNavLink href='/my-projects' icon={<MdOutlineWork />}>
                            Projects
                        </MyNavLink>
                        <MyNavLink href='/contact-me' icon={<AiFillMessage />}>
                            Contact me
                        </MyNavLink>
                        <MyNavLink href='/resume' icon={<PiReadCvLogoFill />}>
                            Resume
                        </MyNavLink>
                    </nav>
                </header>
            </div>
            <Routes>

            </Routes>
        </BrowserRouter >
    )
}

export default Header
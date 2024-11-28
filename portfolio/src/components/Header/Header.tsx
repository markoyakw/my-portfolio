import { BrowserRouter, Routes } from 'react-router-dom'
import MyLink from '../UI/MyLink/MyLink'
import MyContainer from '../UI/MyContainer/MyContainer'
import MyStack from '../UI/MyStack/MyStack'

const Header = () => {
    return (
        <BrowserRouter>
            <nav>
                <MyContainer height="60px">
                    <MyStack justifyContent="space-between" alignItems='center'>
                        <MyLink href='/'>Home</MyLink>

                        <MyStack justifyContent='center' alignItems='center' gapSize="s">
                            <MyLink href='/about-me'>About me</MyLink>
                            <MyLink href='/my-projects'>My projects</MyLink>
                            <MyLink href='/contact-me'>Contact me</MyLink>
                        </MyStack>

                        <MyLink href='/resume'>My resume</MyLink>
                    </MyStack>
                </MyContainer>
            </nav>
            <Routes>

            </Routes>
        </BrowserRouter >
    )
}

export default Header
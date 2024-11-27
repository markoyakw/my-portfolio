import { FC, ReactNode } from "react"
import Header from "../Header/Header"
import MyContainer from "../UI/MyContainer/MyContainer"
import classes from "./MainLayout.module.css"

type TMainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <MyContainer width="100%" height="100%" padding={["", "l"]} addedClassName={classes["layout"]}>
      <Header />
      {children}
    </MyContainer>
  )
}

export default MainLayout
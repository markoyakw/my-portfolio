import { FC, ReactNode, useState } from "react"
import Nav from "@components/Nav/Nav"
import classes from "./MainLayout.module.css"

type TMainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {

  const [isSideBarOpenOnMobile, _setIsSideBarOpenOnMobile] = useState(false)

  const setIsSideBarOpenOnMobile = (newValue: boolean) => {
    _setIsSideBarOpenOnMobile(newValue)
  }

  return (
    <div className={classes["layout"]}>
      <Nav isSideBarOpenOnMobile={isSideBarOpenOnMobile} setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} >
        <div className={classes["layout__body"]}>
          {children}
        </div>
      </Nav>
    </div>
  )
}

export default MainLayout
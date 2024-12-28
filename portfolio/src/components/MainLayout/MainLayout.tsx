import { FC, ReactNode, useState } from "react"
import SideBar from "@components/Nav/Nav"
import classes from "./MainLayout.module.css"
import MobileHeader from "@components/Nav/MobileHeader"

type TMainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {

  const [isSideBarOpenOnMobile, setIsSideBarOpenOnMobile] = useState(false)

  return (
    <div className={classes["layout"]}>
      <SideBar isSideBarOpenOnMobile={isSideBarOpenOnMobile} setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
      <MobileHeader isSideBarOpenOnMobile={isSideBarOpenOnMobile} setIsSideBarOpenOnMobile={setIsSideBarOpenOnMobile} />
      <div className={classes["layout__body"]}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
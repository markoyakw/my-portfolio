import { FC, ReactNode, useState } from "react"
import Header from "@components/Header/Header"
import classes from "./MainLayout.module.css"
import MobileHeader from "@components/Header/MobileHeader"
import CircularText from "@components/UI/CircularText/CircularText"

type TMainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {

  const [isHeaderOpenOnMobile, setIsHeaderOpenOnMobile] = useState(false)

  return (
    <div className={classes["layout"]}>
      <Header isHeaderOpenOnMobile={isHeaderOpenOnMobile} />
      <MobileHeader isHeaderOpenOnMobile={isHeaderOpenOnMobile} setIsHeaderOpenOnMobile={setIsHeaderOpenOnMobile} />
      <div className={classes["layout__body"]}>
        <CircularText />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
import { FC, ReactNode } from "react"
import Header from "@components/Header/Header"
import classes from "./MainLayout.module.css"

type TMainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <div className={classes["layout"]}>
      <Header />
      <div className={classes["layout__body"]}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
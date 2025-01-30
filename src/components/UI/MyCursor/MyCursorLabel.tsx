import { FC, ReactNode } from 'react'
import MyCard from '../MyCard/MyCard'
import classes from "./MyCursor.module.css"
import getRandomColor from '@utils/getRandomColor'

type TMyCursorLabelProps = {
    children: ReactNode
}

const MyCursorLabel: FC<TMyCursorLabelProps> = ({ children }) => {
    return (
        <div className={classes["custom-cursor__label"]}>
            <MyCard addedClassName={classes["custom-cursor__card"]} addedStyle={{ backgroundColor: getRandomColor() }}>
                <div className={classes["custom-cursor__label-text"]}>
                    {children}
                </div>
            </MyCard>
        </div>
    )
}

export default MyCursorLabel
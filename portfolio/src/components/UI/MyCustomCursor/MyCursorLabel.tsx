import { FC, ReactNode } from 'react'
import MyCard from '../MyCard/MyCard'
import classes from "./MyCustomCursor.module.css"
import getRandomColor from '@utils/getRandomColor'

type TMyCursorLabelProps = {
    children: ReactNode
}

const MyCursorLabel: FC<TMyCursorLabelProps> = ({ children }) => {
    return (
        <div className={classes["custom-cursor__label"]}>
            <MyCard padding='xs' addedStyle={{ backgroundColor: getRandomColor() }}>
                <span className={classes["custom-cursor__label-text"]}>
                    {children}
                </span>
            </MyCard>
        </div>
    )
}

export default MyCursorLabel
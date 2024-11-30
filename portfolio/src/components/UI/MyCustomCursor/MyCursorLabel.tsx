import { FC, ReactNode } from 'react'
import MyCard from '../MyCard/MyCard'
import classes from "./MyCustomCursor.module.css"
import { getRandomNumber } from '@/utils/getRandomNumber'
import MyText from '../MyText/MyText'

type TMyCursorLabelProps = {
    children: ReactNode
}

const randomColors = ["#F6AE2D", "#F26419", "#3D77A4", "#571C5E", "#BE6064", "#E576A0", "#6F1D1B", "#41D3BD"]
const getRandomColor = () => randomColors[getRandomNumber(0, randomColors.length - 1)]

const MyCursorLabel: FC<TMyCursorLabelProps> = ({ children }) => {
    return (
        <div className={classes["custom-cursor__label"]}>
            <MyCard padding='xs' backgroundColor={getRandomColor()}>
                <MyText size={"s"} color='primary'>
                    {children}
                </MyText>
            </MyCard>
        </div>
    )
}

export default MyCursorLabel
import { FC, ReactNode } from "react"
import classes from "./MyListWithTimeline.module.css"

type TMyListWithTimelineProps = {
    listItemArr: ReactNode[]
}

const MyListWithTimeline: FC<TMyListWithTimelineProps> = ({ listItemArr }) => {
    return (
        <ul className={classes["container"]}>
            {listItemArr.map((item, itemId) => (
                <li key={itemId} className={classes["item"]}>
                    <div className={classes["timeline-container"]} />
                    <p className={classes["text-container"]}>
                        {item}
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default MyListWithTimeline
import { FC, ReactNode } from "react"
import classes from "./MyListWithTimeline.module.css"

type TMyListWithTimelineProps = {
    listItemArr: ReactNode[]
}

const MyListWithTimeline: FC<TMyListWithTimelineProps> = ({ listItemArr }) => {
    return (
        <div className={classes["container"]}>
            {listItemArr.map(item => (
                <ul>
                    <li className={classes["item"]}>
                        <div className={classes["timeline-container"]} />
                        <p>
                            {item}
                        </p>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default MyListWithTimeline
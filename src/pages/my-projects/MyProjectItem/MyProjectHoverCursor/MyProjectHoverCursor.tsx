import CircularText from "@components/UI/CircularText/CircularText"
import classes from "./MyProjectHoverCursor.module.css"

const MyProjectHoverCursor = () => {
  return (
    <CircularText addedCharClassName={classes["circular-text__char"]} addedContainerClassName={classes["circular-text__container"]}>
      hover on feature - hover on feature -
    </CircularText>
  )
}

export default MyProjectHoverCursor
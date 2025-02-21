import PulsingOnlineIcon from '@components/UI/animations/PulsingOnlineIcon/PulsingOnlineIcon'
import MyButton from '@components/UI/MyButton/MyButton'
import classes from "./LetsConnectButton.module.css"

const LetsConnectButton = () => {

  return (
    
    <MyButton addedClassName={classes["container"]}>
      <div className={classes["row"]}>
        <PulsingOnlineIcon />
        <span className={classes["text"]}>
          Let's connect
        </span>
      </div>
    </MyButton>
  )
}

export default LetsConnectButton
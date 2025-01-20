import PulsingOnlineIcon from '@components/UI/animations/PulsingOnlineIcon/PulsingOnlineIcon'
import MyButton from '@components/UI/MyButton/MyButton'
import classes from "./LetsConnectButton.module.css"
import { useNavigate } from 'react-router-dom'

const LetsConnectButton = () => {

  const navigate = useNavigate()

  return (
    <MyButton addedClassName={classes["container"]} onClick={() => navigate("contact-me")}>
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
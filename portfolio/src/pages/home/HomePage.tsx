import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import LocationCard from './InfoGrid/LocationCard/LocationCard'
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import MyButton from '@components/UI/MyButton/MyButton'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import PulsingOnlineIcon from '@components/UI/animations/PulsingOnlineIcon/PulsingOnlineIcon'
import LetsConnectButton from './InfoGrid/LetsConnectButton/LetsConnectButton'

const HomePage = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["main-row"]}>
        <div className={classes["left-column"]}>
          <HelloCard />
          <div className={classes["location-and-connect-row"]}>
            <LocationCard />
            <LetsConnectButton />
          </div>
          <WorkPositionCard />
          <TechStackCard />
        </div>
        <div className={classes["right-column"]}>
          <WorkExperienceCard />
          <EducationCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage
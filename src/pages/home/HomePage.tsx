import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import { forwardRef } from 'react'
import LocationAndLetsConnectCards from './InfoGrid/LocationAndLetsConnectCards/LocationAndLetsConnectCards'

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {



  return (
    <div className={classes["container"]} ref={ref}>
      <div className={classes["main-row"]}>
        <div className={classes["left-column"]}>

          <div className={classes["hello-location-and-connect-flexbox"]}>
            <HelloCard />
            <LocationAndLetsConnectCards />
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
})

export default HomePage
import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import { forwardRef } from 'react'
import LocationAndLetsConnectCards from './InfoGrid/LocationAndLetsConnectCards/LocationAndLetsConnectCards'

type THomePageProps = {
  isInView: boolean
}

const HomePage = forwardRef<HTMLDivElement, THomePageProps>(({ isInView }, ref) => {

  return (
    <div className={classes["container"]} ref={ref}>
      <div className={classes["main-row"]}>
        <div className={classes["left-column"]}>

          <div className={classes["hello-location-and-connect-flexbox"]}>
            <HelloCard isInView={isInView} />
            <LocationAndLetsConnectCards isInView={isInView} />
          </div>

          <WorkPositionCard isInView={isInView} />
          <TechStackCard isInView={isInView} />
        </div>

        <div className={classes["right-column"]}>
          <WorkExperienceCard  isInView={isInView}/>
          <EducationCard isInView={isInView}/>
        </div>
      </div>
    </div>
  )
})

export default HomePage
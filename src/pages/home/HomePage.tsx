import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import LocationCard from './InfoGrid/LocationCard/LocationCard'
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import LetsConnectButton from './InfoGrid/LetsConnectButton/LetsConnectButton'
import { forwardRef } from 'react'
import AppearAnimation from '@components/UI/animations/AppearAnimation/AppearAnimation'

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={classes["container"]} ref={ref}>
      <div className={classes["main-row"]}>
        <div className={classes["left-column"]}>
          <div className={classes["hello-location-and-connect-flexbox"]}>

            <AppearAnimation type='from-top'>
              <HelloCard />
            </AppearAnimation>

            <AppearAnimation type='from-left' delay="1s">
              <div className={classes["location-and-connect-row"]}>
                <LocationCard />
                <AppearAnimation type='from-left' delay="2s">
                  <LetsConnectButton />
                </AppearAnimation>
              </div>
            </AppearAnimation>

          </div>

          <AppearAnimation type='from-left'>
            <WorkPositionCard />
          </AppearAnimation>

          <AppearAnimation type='from-bottom'>
            <TechStackCard />
          </AppearAnimation>
        </div>
        <div className={classes["right-column"]}>
          <AppearAnimation type='from-top'>
            <WorkExperienceCard />
          </AppearAnimation>

          <AppearAnimation type='from-bottom'>
            <EducationCard />
          </AppearAnimation>
        </div>
      </div>
    </div>
  )
})

export default HomePage
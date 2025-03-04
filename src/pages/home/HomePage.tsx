import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import { forwardRef, memo } from 'react'
import LocationAndLetsConnectCards from './InfoGrid/LocationAndLetsConnectCards/LocationAndLetsConnectCards'
import useDelay from '@hooks/useDelay'
import { FAKE_LOADING_TIME_MS } from '@/constants'

const HomePage = forwardRef<HTMLDivElement>((_, ref) => {

  const [isRevealAnimationReady] = useDelay(FAKE_LOADING_TIME_MS, { startDelayRightAway: true })

  return (
    <div className={classes["container"]} ref={ref}>
      <div className={classes["main-row"]}>
        <div className={classes["left-column"]}>

          <div className={classes["hello-location-and-connect-flexbox"]}>
            <HelloCard isRevealAnimationReady={isRevealAnimationReady} />
            <LocationAndLetsConnectCards isRevealAnimationReady={isRevealAnimationReady} />
          </div>

          <WorkPositionCard isRevealAnimationReady={isRevealAnimationReady} />
          <TechStackCard isRevealAnimationReady={isRevealAnimationReady} />
        </div>

        <div className={classes["right-column"]}>
          <WorkExperienceCard isRevealAnimationReady={isRevealAnimationReady} />
          <EducationCard isRevealAnimationReady={isRevealAnimationReady} />
        </div>
      </div>
    </div>
  )
})

export default memo(HomePage)
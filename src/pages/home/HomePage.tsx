import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import classes from "./HomePage.module.css"
import WorkPositionCard from './InfoGrid/WorkPositionCard/WorkPositionCard'
import WorkExperienceCard from './InfoGrid/WorkExperienceCard/WorkExperienceCard'
import TechStackCard from './InfoGrid/TechStackCard/TechStackCard'
import EducationCard from './InfoGrid/EducationCard/EducationCard'
import { forwardRef, memo, useEffect, useState } from 'react'
import LocationAndLetsConnectCards from './InfoGrid/LocationAndLetsConnectCards/LocationAndLetsConnectCards'
import { useMainLoadingDelay } from '@hooks/useMainLoadingDelay'

const HomePage = forwardRef<HTMLDivElement, { isInView: boolean }>(({ isInView }, ref) => {

  const { isLoadingDelayFinished } = useMainLoadingDelay()
  const [isRevealAnimationReady, setIsRevealAnimationReady] = useState(false)

  useEffect(() => {
    if (isInView && isLoadingDelayFinished) {
      setIsRevealAnimationReady(true)
    }
  }, [isInView, isLoadingDelayFinished])

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
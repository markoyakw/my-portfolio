import MainLayout from '@components/MainLayout/MainLayout'
import MyContainer from '@components/UI/MyContainer/MyContainer'
import MyGridItem from '@components/UI/MyGrid/MyGridItem'
import MyStack from '@components/UI/MyStack/MyStack'
import HelloCard from '@pages/home/InfoGrid/HelloCard/HelloCard'
import TechStackCard from '@pages/home/InfoGrid/TechStackCard'
import EducationCard from '@pages/home/InfoGrid/EducationCard'
import AboutMeCard from '@pages/home/InfoGrid/AboutMeCard'
import MyText from '@components/UI/MyText/MyText'
import { FaLocationDot } from 'react-icons/fa6'
import classes from "./Home.module.css"
import MyCard from '@components/UI/MyCard/MyCard'
import LocationCard from './InfoGrid/LocationCard/LocationCard'

const HomePage = () => {
  return (
    <MainLayout>
      <div className={classes["container"]}>
        <div className={classes["grid"]}>

          <div style={{ "gridRow": "1/span 3", "gridColumn": "1/span 4" }}>
            <HelloCard />
          </div>

          <div style={{ "gridArea": "5/1/span 1/span 4" }}>
            <LocationCard />
          </div>

          <div style={{ gridArea: "6/1/span 3/ span 8" }}>
            <h1>
              <MyText size='xxl'>
                <strong>
                  FRONT <i>end</i> <br />
                  DEVELOPER
                </strong>
              </MyText>
            </h1>
          </div>

          <div style={{ "gridArea": "1/5/5/span 4" }}>
            <MyCard>
              da
            </MyCard>
          </div>

          <div style={{ "gridArea": "1/9/6/span 4" }}>
            <MyCard>
              da
            </MyCard>
          </div>

          {/* <MyGridItem gridArea="5/5/span 1/ span 8">
            </MyGridItem> */}
          {/* 
          <MyGridItem gridArea="5/5/1/9">
            <WorkPositionCard />
          </MyGridItem>

          <MyGridItem gridArea="6/9/1/13">
            <WorkPositionCard />
          </MyGridItem> */}

          {/* <TechStackCard /> */}

          {/*
            <MyGridItem gridArea="1/9/1/11">
              <MyCard>
                <h3>Let's contact</h3>
              </MyCard>
            </MyGridItem>



            <MyGridItem gridArea="auto/auto/span 3/ span 7">
              <EducationCard />
            </MyGridItem>

            <MyGridItem gridArea="auto/auto/span 2/ span 5">
              <AboutMeCard />
            </MyGridItem>

            <MyGridItem gridArea="5/1/5/4">
              <LocationCard />
            </MyGridItem> */}

        </div>
      </div>
    </MainLayout >
  )
}

export default HomePage
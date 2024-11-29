import MainLayout from './components/MainLayout/MainLayout'
import MyCard from './components/UI/MyCard/MyCard'
import MyContainer from './components/UI/MyContainer/MyContainer'
import MyGrid from './components/UI/MyGrid/MyGrid'
import MyGridItem from './components/UI/MyGrid/MyGridItem'
import MyStack from './components/UI/MyStack/MyStack'
import HelloCard from './pages/home/InfoGrid/HelloCard'
import WorkPositionCard from './pages/home/InfoGrid/WorkPositionCard'
import LocationCard from './pages/home/InfoGrid/LocationCard'
import TechStackCard from './pages/home/InfoGrid/TechStackCard'
import EducationCard from './pages/home/InfoGrid/EducationCard'
import AboutMeCard from './pages/home/InfoGrid/AboutMeCard'

function App() {

  return (
    <MainLayout>
      <MyStack direction='column' alignItems='center'>
        <MyContainer height='100%' width='100%'>
          <MyGrid rowsCount={6} columnsCount={11} gap='s' >

            <MyGridItem gridArea="1/1/4/5">
              <HelloCard />
            </MyGridItem>

            {/* <MyGridItem gridArea="4/1/span 1/ span 5">
              <TechStackCard />
            </MyGridItem> */}
            {/* <MyGridItem gridArea="1/4/1/9">
              <WorkPositionCard />
            </MyGridItem>

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

          </MyGrid>
        </MyContainer>
      </MyStack>
    </MainLayout>
  )
}

export default App

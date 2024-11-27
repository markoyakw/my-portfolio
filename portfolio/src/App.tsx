import MainLayout from './components/MainLayout/MainLayout'
import MyCard from './components/UI/MyCard/MyCard'
import MyContainer from './components/UI/MyContainer/MyContainer'
import MyGrid from './components/UI/MyGrid/MyGrid'
import MyGridItem from './components/UI/MyGrid/MyGridItem'
import MyStack from './components/UI/MyStack/MyStack'
import MyIcon from './components/UI/MyIcon/MyIcon'
import HelloCard from './pages/home/InfoGrid/HelloCard'
import WorkPositionCard from './pages/home/InfoGrid/WorkPositionCard'
import MyTechStackIcon from './components/UI/MyIcon/MyTechStackIcon'
import MyText from './components/UI/MyText/MyText'

const myTechStackIconNames = [
  { iconName: "nextjs2", displayName: "Next.js" },
  { iconName: "reactjs", displayName: "React" },
  { iconName: "nodejs", displayName: "Node.js" },
  { iconName: "typescript", displayName: "TypeScript" },
  { iconName: "js", displayName: "JavaScript" },
  { iconName: "html5", displayName: "HTML5" },
  { iconName: "css3", displayName: "CSS3" }
]

function App() {

  return (
    <MainLayout>
      <MyStack direction='column' alignItems='center'>
        <MyContainer height='80vh' aspectRatio="12/7">
          <MyGrid rowsCount={7} columnsCount={12} gap='s'>
            <MyGridItem gridArea="1/1/span 4/span 3">
              <HelloCard />
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 1/span 7">
              <WorkPositionCard />
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 1/ span 2">
              <MyCard>
                <h3>About me</h3>
              </MyCard>
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 3/ span 2">
              <MyCard>
                <MyStack direction='column' alignItems='center'>
                  <MyIcon type='location' size="100px" />
                  <h2>Germany, Duisburg/ Düsseldorf</h2>
                </MyStack>
              </MyCard>
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 2/ span 7">
              <MyCard>
                <MyStack justifyContent='space-between' alignItems='center'>
                  {myTechStackIconNames.map((name) =>
                    <MyTechStackIcon iconName={name.iconName} displayName={name.displayName} size='45px' />)
                  }
                </MyStack>
              </MyCard>
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 4/ span 7">
              <MyCard>
                <h2>
                  <MyText size='m' color='secondary'>Education</MyText>
                </h2>

                <strong>• Master's Degree with horons</strong>  / Odesa / 2023
                <p>
                  Odesa National University of Technology
                </p>
                <strong>• Bachelor's Degree</strong> / Odesa / 2022
                <p>
                  Odesa National University of Technology
                </p>
                <strong>• Diploma of Junoir Specialist</strong> / Odesa / 2020
                <p>
                  College of Industrial Automation and Information Technologies
                </p>
                <h2>
                  <MyText size='m' color='secondary'>Jobs and internships</MyText>
                </h2>
              </MyCard>
            </MyGridItem>
            <MyGridItem gridArea="auto/auto/span 3/ span 5">
              <MyCard>
                <MyText size='m' color='secondary'>
                  My goal for the near future is to become the best developer I can be, and I am willing to give my all to reach it!
                </MyText>
              </MyCard>
            </MyGridItem>
          </MyGrid>
        </MyContainer>
      </MyStack>
    </MainLayout>
  )
}

export default App

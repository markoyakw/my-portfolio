import ProjectsPage from '@pages/projects/ProjectsPage'
import HomePage from './pages/home/HomePage'
import MainLayout from '@components/MainLayout/MainLayout'
import AboutMePage from '@pages/aboutMe/AboutMePage'

function App() {

  return (
    <MainLayout>
      <HomePage />
      <AboutMePage />
      <ProjectsPage />
    </MainLayout>
  )
}

export default App

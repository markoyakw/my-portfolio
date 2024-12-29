import ProjectsPage from '@pages/projects/ProjectsPage'
import HomePage from './pages/home/HomePage'
import MainLayout from '@components/MainLayout/MainLayout'

function App() {

  return (
    <MainLayout>
      <HomePage />
      <ProjectsPage />
    </MainLayout>
  )
}

export default App

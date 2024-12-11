import ProjectsPage from '@pages/Projects/ProjectsPage'
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

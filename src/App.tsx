import MainLayout from '@components/MainLayout/MainLayout'
import PagesContainer from '@pages/Pages'
import "./global-styles/main-loader-finish.css"
import "./global-styles/globalVariables.css"
import "./global-styles/reset.css"
import "./global-styles/root.css"

function App() {
  return (
    <MainLayout>
      <PagesContainer />
    </MainLayout>
  )
}

export default App

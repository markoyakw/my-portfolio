import MainLayout from '@components/MainLayout/MainLayout'
import PagesContainer from '@pages/Pages'
import "./global-styles/main-loader-finish.css"
import "./global-styles/globalVariables.css"
import "./global-styles/reset.css"
import "./global-styles/root.css"
import { LoadingDelayProvider } from '@hooks/useMainLoadingDelay'
import { LOADING_DELAY_TIME_MS } from './constants'

function App() {

  return (
    <LoadingDelayProvider delayMs={LOADING_DELAY_TIME_MS}>
      <MainLayout>
        <PagesContainer />
      </MainLayout>
    </LoadingDelayProvider >
  )
}

export default App

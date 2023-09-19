import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppContexts } from './context/AppContexts'
import { Router } from './router'

function App() {
  return (
    <>
    <BrowserRouter>
      <AppContexts>
        <Router />
      </AppContexts>
    </BrowserRouter>
    </>
  )
}

export default App

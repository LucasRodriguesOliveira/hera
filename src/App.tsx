import './App.css'
import { BottomDrawer } from './components/BottomDrawer'
import { Greeting } from './components/Greeting'
import { HomeQuickAccess } from './components/HomeQuickAccess'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { AppContexts } from './context/AppContexts'

function App() {
  return (
    <>
    <AppContexts>
      <Navbar />
      <Sidebar />
      <Greeting name='Lucas' />
      <HomeQuickAccess />
      <BottomDrawer />
    </AppContexts>
    </>
  )
}

export default App

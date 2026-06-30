import './App.css'
import { Route, Router } from '@solidjs/router'
import MainLayout from './layouts/MainLayouts'
import HomeIndex from './pages/Home/HomeIndex'
import QuranIndex from './pages/Quran/QuranIndex'

function App() {

  return (
    <>
      <Router>
        <Route component={MainLayout}>
          <Route path={'/'} component={HomeIndex} />
          <Route path={'/quran'} component={QuranIndex} />
        </Route>
      </Router>
    </>
  )
}

export default App

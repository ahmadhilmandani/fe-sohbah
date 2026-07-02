import './App.css'
import { Route, Router } from '@solidjs/router'
import MainLayout from './layouts/MainLayouts'
import HomeIndex from './pages/Home/HomeIndex'
import QuranIndex from './pages/Quran/QuranIndex'
import QuranDetail from './pages/Quran/QuranDetail'

function App() {

  return (
    <>
      <Router>
        <Route component={MainLayout}>
          <Route path={'/'} component={HomeIndex} />
          <Route path={'/quran'} component={QuranIndex} />
          <Route path={'/quran/:number'} component={QuranDetail} />
        </Route>
      </Router>
    </>
  )
}

export default App

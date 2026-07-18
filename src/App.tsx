import './App.css'
import { Route, Router } from '@solidjs/router'
import MainLayout from './layouts/MainLayouts'
import HomeIndex from './pages/Home/HomeIndex'

import "@thisbeyond/solid-select/style.css";
import QuranIndex from './features/quran/pages/QuranIndex'
import QuranDetail from './features/quran/pages/QuranDetail';

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

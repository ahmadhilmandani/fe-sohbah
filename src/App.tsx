import { Route, Router } from '@solidjs/router'
import MainLayout from './layouts/MainLayouts'

import "@thisbeyond/solid-select/style.css";
import QuranIndex from './features/quran/pages/QuranIndex'
import QuranDetail from './features/quran/pages/QuranDetail';

function App() {

  return (
    <>
      <Router>
        <Route component={MainLayout}>
          <Route path={'/'} component={QuranIndex} />
          <Route path={'/quran'} component={QuranIndex} />
          <Route path={'/quran/surah'} component={QuranDetail} />
        </Route>
      </Router>
    </>
  )
}

export default App

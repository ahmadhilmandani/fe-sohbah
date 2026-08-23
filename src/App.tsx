import { Route, Router } from '@solidjs/router'
import MainLayout from './layouts/MainLayouts'

import QuranIndex from './features/quran/pages/QuranIndex'
import QuranDetail from './features/quran/pages/QuranDetail';
import SignInIndex from './features/signIn/pages/SignInIndex';

function App() {

  return (
    <>
      <Router>
        <Route component={MainLayout}>
          <Route path={'/'} component={QuranIndex} />
          <Route path={'/quran'} component={QuranIndex} />
          <Route path={'/quran/surah'} component={QuranDetail} />
          <Route path={'/sign-in'} component={SignInIndex} />
        </Route>
      </Router>
    </>
  )
}

export default App

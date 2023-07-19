
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { MenuComponent } from './components/menu'
import { ContentComponent } from './components/content'
import { ToolbarComponent } from './components/toolbar'
import { DashboardsPage } from './pages/dashboards'
import { UsersPage } from './pages/users'

function App() {

  return (
    <>
      <Router>
        <MenuComponent />
        <ContentComponent toolbar={<ToolbarComponent />}>
          <Routes>
              <Route path='/' Component={() => <DashboardsPage />}/>
              <Route path='/users' Component={() => <UsersPage />}/>
          </Routes>
        </ContentComponent>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import DashBoard from './containers/Dashboard'
import Tasks from './containers/Tasks'
import Team from './containers/Team'

export default function App() {
  return (
    <div className='app__w'>
      <Router>
        <Navigation />
        <div className='app__body'>
          <Switch>
            <Route path='/' component={DashBoard} exact />
            <Route path='/tasks' component={Tasks} exact />
            <Route path='/team' component={Team} exact />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BasicComponents from './Views/BasicComponents'
import Dashboard from './Views/Dashboard.js'
import PassingParameters from './Views/PassingParameters.js'

import Counter from './Views/Counter.js'
import ToDo from './Views/ToDo'
import Navigation from './Views/Navigation'
import FetchingRandomUsers from './Views/FetchingRandomUsers/FetchingRandomUsers';





const App = () => (
  <Router>
  <div>
    <Navigation/>
    <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/counter'} component={() => <Counter number={5}/>} />
        <Route path={'/todo'} component={ToDo} />
        <Route path={'/fetchingrandom'} component={FetchingRandomUsers} />

  </div>
  </Router>
)
 

export default App

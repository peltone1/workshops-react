import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'


import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard.js'
import PassingParameters from './PassingParameters.js'
import SideBar from './SideBar.js'
import Counter from './Counter.js'
import ToDo from './ToDo'



const App = () => (
  <div>
    <Router>
      <div>
        <AppBar
          title="OSH app"
        />
        <SideBar />
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/counter'} component={() => <Counter number={5}/>} />
        <Route path={'/todo'} component={ToDo} />

      </div>
    </Router>

  </div>
)


export default App

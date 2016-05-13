import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import { Welcome } from './pages/welcome'
import { About } from './pages/about'

export class App extends Component {

  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Welcome}/> 
          <Route path="about" component={About}/>
        </Route>
      </Router>
    )
  }
}

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ArtItem from './Art/ArtItem'
import Header from './Header'
import Home from './Home'

const App = () => (
  <Router>
    <div className = "app-container">
      <Header />
      <div className="app-container">
        <Route exact path = "/" component={Home} />
        <Route exact path = "/art/:id" component={ArtItem} />
      </div>
    </div>
  </Router>
)

export default App

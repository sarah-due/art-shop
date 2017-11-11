import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ArtDisplay from './Art/ArtDisplay'
import Header from './Header'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <ArtDisplay />
    </div>
  </Router>
)

export default App

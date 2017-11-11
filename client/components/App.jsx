import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ArtDisplay from './Art/ArtDisplay'

const App = () => (
  <Router>
    <div className='app-container'>
      <ArtDisplay />
    </div>
  </Router>
)

export default App

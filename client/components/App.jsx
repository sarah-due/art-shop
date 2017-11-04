import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ArtDisplay from './Art/ArtDisplay'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <ArtDisplay />
    </div>
  </Router>
)

export default App

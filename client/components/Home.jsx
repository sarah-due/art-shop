import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import ArtDisplay from './Art/ArtDisplay'
import Header from './Header'

  const Home = () => (
    <div className="app-container">
      <ArtDisplay />
    </div>
  )

export default Home

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Here is the art store! Check out the arts!</h1>
      </div>
    )
  }
}

export default Header

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getArt} from '../../actions/art'

const renderAllArt = (art, key) => (
  <div className="art-display">
    <img src={art.image}/>
    <p>{art.title}</p>
  </div>
)

class ArtDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getArt())
  }

  render() {

    return (
      <div className="art-display-container">
        {this.props.art.map((item, key) => {
          return renderAllArt(item, key)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {art: state.art}
}


export default connect(mapStateToProps)(ArtDisplay)

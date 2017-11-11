import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getArt} from '../../actions/art'

const renderAllArt = (art, key) => (
  <div className="art-display-item" key={key}>
    <div className="image-placeholder"></div>
    <p className="art-display-item__details">{art.title}</p>
    <p className="art-display-item__price">{art.price}</p>
    <Link to={`/art/${art.id}`}>
      <button className = "art-display-item__button">
        Get a closer look
      </button>
    </Link>
  </div>
)

class ArtDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getArt())
  }

  render() {

    return (
      <div className="art-display-container">
        <h2>Pieces for Sale!</h2>
        <div className="art-display-grid">
          {this.props.art.map((item, key) => {
            return renderAllArt(item, key)
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {art: state.art}
}


export default connect(mapStateToProps)(ArtDisplay)

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getArt} from '../../actions/art'

const renderArtItem = (art, key) => (
  <div className="single-art-item" key={key}>
    <p>{art.title}</p>
    <img src={art.image} />
  </div>
)

class ArtItem extends React.Component {
  componentDidMount() {
    this.props.dispatch(getArt())
  }

  render() {
    let artItemID = this.props.match.params.id
    return (
      <div className="art-item-container">
        {this.props.art.filter(art => {
          return art.id == artItemID}).map((item, key) => {
          return renderArtItem(item, key)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {art: state.art}
}


export default connect(mapStateToProps)(ArtItem)

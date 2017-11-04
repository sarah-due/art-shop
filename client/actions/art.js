
import request from 'superagent'

export const receiveArt = (art) => {
  return {
    type: 'RECEIVE_ART',
    art
  }
}

export function getArt() {
  return (dispatch) => {
    request
      .get('./tempData/art')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveArt(res.body))
      })
  }
}


import request from 'superagent'

export const receiveArt = (art) => {
  return {
    type: 'RECEIVE_ART',
    art
  }
}

export function getArt() {
  return (dispatch) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveArt(res.body))
  }
}

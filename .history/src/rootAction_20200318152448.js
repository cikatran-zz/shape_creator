import * as actionTypes from './actionTypes'

export function generateRandomColor(color) {
  return {
    type: actionTypes.GENERATE_RANDOM_COLOR
  }
}
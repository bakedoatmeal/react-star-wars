import { SEARCH, ADD_CHAR } from '../actions'

const starwarsReducer = (state = [], action) => {
  switch(action.type) {
    case SEARCH:
      console.log(action.payload)
      return action.payload
    case ADD_CHAR:
      return state
    default: 
      return state
  }
}

export default starwarsReducer;
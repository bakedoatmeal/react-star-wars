import { SEARCH, ADD_CHAR } from '../actions'

const defaultState = () => {
  return {
    data: {},
    savedChars: []
  }
}

const starwarsReducer = (state = defaultState(), action) => {
  switch(action.type) {
    case SEARCH:
      let tempState = {...state}
      tempState.data = action.payload
      return tempState 
    case ADD_CHAR:
      let tempState1 = {...state}
      const data = tempState1.savedChars
      data.push(action.payload)
      console.log('Saved chars: ', data)
      tempState1.savedChars = data
      return tempState1
    default: 
      return state
  }
}

export default starwarsReducer;
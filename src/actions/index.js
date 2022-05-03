export const SEARCH = "SEARCH"
export const ADD_CHAR = "ADD_CHAR"

export const search = (search_term) => {
  return {
    type: SEARCH,
    payload: {search_term}
  }
}

export const addChar = (char) => {
  return {
    type: ADD_CHAR,
    payload: {char}
  }
}
export const SEARCH = "SEARCH"
export const ADD_CHAR = "ADD_CHAR"

export const search = (search_term) => {

  return async (dispatch) => {
    const path = `https://swapi.dev/api/people/${search_term}`
    const res = await fetch(path)
    const json = await res.json()
    const {name, height, hair_color, gender } = json

    dispatch({
      type: SEARCH, 
      payload: {name, height, hair_color, gender}
    })

  }

  // return {
  //   type: SEARCH,
  //   payload: {search_term}
  // }
}

export const addChar = (char) => {
  return {
    type: ADD_CHAR,
    payload: {char}
  }
}
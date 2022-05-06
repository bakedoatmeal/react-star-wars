export const SEARCH = "SEARCH"
export const ADD_CHAR = "ADD_CHAR"

export const search = (search_term) => {

  return async (dispatch) => {

    const path = `https://swapi.dev/api/people/${search_term}`
    const res = await fetch(path)
    const json = await res.json()
    const {name, height, hair_color, gender, homeworld, films } = json

    const res2 = await fetch(homeworld)
    const json2 = await res2.json()
    const planetName = json2.name

    const filmNames = []
    for (let i = 0; i < films.length; i = i + 1) {
      const filmRes = await fetch(films[i])
      const filmJson = await filmRes.json()
      filmNames.push(filmJson.title)
    }

    dispatch({
      type: SEARCH, 
      payload: {name, height, hair_color, gender, planetName, filmNames}
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
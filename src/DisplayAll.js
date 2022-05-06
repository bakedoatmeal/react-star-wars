import React from "react";
import { useSelector} from "react-redux";

const DisplayAll = () => {
  const chars = useSelector(state => state.starWars.savedChars)

  const allData = chars.map((data, index) => {
    const films = data.char.filmNames.map((name) => {
      return(
        <li>{name}</li>
      )
    })
    return (
      <div className='saved-char'>
        <h1>{data.char.name}</h1>
        <p>Gender: {data.char.gender}</p>
        <p>Hair color: {data.char.hair_color}</p>
        <p>Height: {data.char.height}cm</p>
        <p>Home planet: {data.char.planetName}</p>
        <p>Films: </p>
        <ul>
          {films}
        </ul>
      </div>
    )
  })

  return (
    <div className="saved-chars">
      {allData}
    </div>
  )

}

export default DisplayAll;
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addChar } from "./actions";

const Display = () => { 
  const data = useSelector(state => state.starWars.data) 
  const dispatch = useDispatch()

  if (Object.keys(data).length === 0) {
    return null
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Height: {data.height}cm</p>
      <p>Hair color: {data.hair_color}</p>
      <p>Gender: {data.gender}</p>
      <button
        onClick={() => {
          dispatch(addChar(data))
        }}
      >Save</button>
    </div>
  )

}

export default Display;
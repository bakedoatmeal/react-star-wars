import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {search} from './actions'

const StarWars = () => {
  const [term, setTerm] = useState(1)
  const dispatch = useDispatch()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(search(term))
        }}
      >
        <input 
          type="number"
          value={term}
          onChange={ (e) => {
            setTerm(e.target.value)
          }}
          max='83'
          >
          </input>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default StarWars;
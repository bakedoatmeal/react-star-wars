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
          if (term === '17') {
            alert('There is no number 17!')
          } else {
            dispatch(search(term))
          }
        }}
      >
        <input 
          type="number"
          value={term}
          onChange={ (e) => {
            setTerm(e.target.value)
          }}
          min='1'
          max='83'
          >
          </input>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default StarWars;
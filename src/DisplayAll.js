import React from "react";
import { useSelector } from "react-redux";

const DisplayAll = () => {
  const chars = useSelector(state => state.starWars.savedChars)

  console.log(chars)

  return (
    <div>
      
    </div>
  )

}

export default DisplayAll;
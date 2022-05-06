import React from "react";
import { useSelector } from "react-redux";

const DisplayAll = () => {
  const chars = useSelector(state => state.starWars.savedChars)

  console.log(chars)

  const allData = chars.map((data) => {
    console.log(data)
    return (
      <div>
        <p>{data.char.name}</p>
      </div>
    )
  })

  return (
    <div>
      {allData}
    </div>
  )

}

export default DisplayAll;